import pandas as pd
import numpy as np
from collections import defaultdict
from scipy.stats import pearsonr
import pymysql
from datetime import datetime

db_start_time = datetime.now()
connection = pymysql.connect(
    user="j7e103",
    passwd="000000",
    host="j7e103.p.ssafy.io",
    port=3307,
    db="homidu",
    charset="utf8",
)
cursor = connection.cursor(pymysql.cursors.DictCursor)

# SQL = 'SELECT * FROM plantLike'
# df = pd.read_sql(SQL, connection)
#
# zeros = np.zeros((66, 25))
# farm = pd.DataFrame(zeros, index=list(set(df['user_id'])), columns=sorted(list(set(df['plant_id']))))

SQL = 'select user_id, plant_id, score from plantLike'  # 갖고올 쿼리
df = pd.read_sql(SQL, connection)   #연결
db_end_time = datetime.now()
db_elapsed_time = db_end_time-db_start_time
print("db : " + str(db_elapsed_time))


sim_start_time = datetime.now()
zeros = np.zeros((len(set(df['user_id'])), len(set(df['plant_id']))))     #유저id 개수만큼 행을 만들고 0으로 채워줌 *df를 쓰는 이유!!!!
farm = pd.DataFrame(zeros, index=list(set(df['user_id'])), columns=sorted(list(set(df['plant_id']))))   # df 생성

# sql = """select user_id, plant_id, score from plantLike"""
cursor.execute(SQL) #안에 데이터값을 갖고온다매
list_user = cursor.fetchall()   #리스트에 담아줌

for user in list_user:
    farm[user['plant_id']].loc[user['user_id']] = user['score'] #plant_id에 해당하는 user_id 에다가 해당 점수를 집어넣어줌 (pandas loc 검색해보기)

# 유사도 테이블 생성
n = len(farm.index)
zeros = np.zeros((n, n))
sim = pd.DataFrame(zeros, index=list(farm.index), columns=list(farm.index))
sim_end_time = datetime.now()
sim_elapsed_time = sim_end_time - sim_start_time
print("sim : " + str(sim_elapsed_time))

cal_sim_start_time = datetime.now()
# 유사도 계산
for name1 in sim.index:
    for name2 in sim.index:
        sim[name1].loc[name2] = round(pearsonr(list(farm.loc[name1]), list(farm.loc[name2]))[0], 4) # scipy 라이브러리 사용
cal_sim_end_time = datetime.now()
cal_elapsed_time = cal_sim_end_time - cal_sim_start_time
print("cal : " + str(cal_elapsed_time))

def get_recommendation_top_cnt(name, top_cnt):
    plants = list(farm.columns)
    score_dic = defaultdict(int)  # 평점
    sim_dic = defaultdict(int)  # 유사도

    for name2, sim_score in sorted(dict(sim[2]).items(), key=lambda x: x[1], reverse=True)[1:top_cnt + 1]:
        if sim_score > 0 and name != name2:  # 박현정과 유사도가 0 이상인 사람에 대해서
            for plant in plants:  # 모든 식물을 조사해본다.
                score = 0
                if not farm.loc[name][plant]:  # 만약 박현정이 그 식물을 키우지 않는다면,
                    score += farm.loc[name2][plant] * sim_score  # 평점 예측
                    score_dic[plant] += score
                    sim_dic[plant] += sim_score

    # print(score_dic)
    # print(sim_dic)
    ret = []
    for key in score_dic.keys():
        score_dic[key] = score_dic[key] / sim_dic[key]
        ret.append([score_dic[key], key])

    return sorted(ret, key=lambda x: x[0], reverse=True)

get_rec_start_time = datetime.now()
print(get_recommendation_top_cnt(14, 5))
get_rec_end_time = datetime.now()

# db_elapsed_time = db_end_time - db_start_time
# sim_elapsed_time = sim_end_time - sim_start_time
# cal_sim_elapsed_time = cal_sim_end_time - cal_sim_start_time
get_rec_elapsed_time = get_rec_end_time - get_rec_start_time

# print("db : " + str(db_elapsed_time))
# print("sim : " + str(sim_elapsed_time))
# print("cal_sim : " + str(cal_sim_elapsed_time))
print("get_rec : " + str(get_rec_elapsed_time))