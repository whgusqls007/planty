import pandas as pd
import numpy as np
from collections import defaultdict
import pymysql


def connection_db():
    connection = pymysql.connect(
        user="j7e103",
        passwd="000000",
        host="j7e103.p.ssafy.io",
        port=3337,
        db="homidu",
        charset="utf8",
    )
    # cursor = connection.cursor(pymysql.cursors.DictCursor)

    # 유사도 csv 파일 읽어오기
    sim = pd.read_csv("sim.csv", index_col=0)
    sim.columns = sim.index

    # 선호도 테이블 불러오기
    SQL = "SELECT * FROM plantLike"
    plant_like = pd.read_sql(SQL, connection)

    # 문자열로 인코딩 된 선호도 파싱 후 테이블 생성
    zeros = np.zeros(
        (len(set(plant_like["user_id"])), len(plant_like["score"].iloc[0]))
    )
    farm = pd.DataFrame(
        zeros,
        index=list(set(plant_like["user_id"])),
        columns=range(1, len(plant_like["score"].iloc[0]) + 1),
    )

    for uid, score in zip(plant_like["user_id"], plant_like["score"]):
        for i, val in enumerate(score):
            farm[i + 1].loc[uid] = val
    return sim, farm, connection


def get_recommendation_top_percent(
    uid, percent=10, ret_cnt=7
):  # user_id , 유사한 사람 상위 몇퍼센트까지, 리턴될 식물개수

    sim, farm, _ = connection_db()

    top_cnt = int(len(sim.index) * ((100 - percent) / 100))
    plants = list(farm.columns)
    score_dic = defaultdict(int)  # 평점
    sim_dic = defaultdict(int)  # 유사도
    for uid2, sim_score in sorted(
        dict(sim[2]).items(), key=lambda x: x[1], reverse=True
    )[1 : top_cnt + 1]:
        if sim_score > 0 and uid != uid2:  # 박현정과 유사도가 0 이상인 사람에 대해서
            for plant in plants:  # 모든 식물을 조사해본다.
                score = 0
                if not farm.loc[uid][plant]:  # 만약 박현정이 그 식물을 키우지 않는다면,
                    score += farm.loc[uid2][plant] * sim_score  # 평점 예측
                    score_dic[plant] += score
                    sim_dic[plant] += sim_score

    # print(score_dic)
    # print(sim_dic)
    ret = []
    for key in score_dic.keys():
        score_dic[key] = score_dic[key] / sim_dic[key]
        ret.append([score_dic[key], key])

    if not ret:  # 모든 식물을 키워서 추천된 식물이 하나도 없을 때
        return []  # 빈배열로 넘기는게 맞을지 0을 넘기는게 맞을지

    ret_cnt = min(len(ret), ret_cnt)  # ret_cnt 개 만큼 return 해 주겠다!

    return sorted(ret, key=lambda x: x[0], reverse=True)[:ret_cnt]


# get_recommendation_top_percent(2, 50)
