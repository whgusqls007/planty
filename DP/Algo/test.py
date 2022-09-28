import pandas as pd
import numpy as np
from collections import defaultdict
from scipy.stats import pearsonr
import pymysql

connection = pymysql.connect(
    user="j7e103",
    passwd="000000",
    host="j7e103.p.ssafy.io",
    port=3306,
    db="homidu",
    charset="utf8",
)
cursor = connection.cursor(pymysql.cursors.DictCursor)

# sql = """select score from plantLike where user_id = 8"""
# cursor.execute(sql)
# list_user = str(cursor.fetchall())
# print(list_user)

# for i in range (list_user.split(",")):
#     print(i.split(": ")[1].split("}")[0])

# connection.commit()

for user_id in range(1, 72):
    sql = """select score from plantLike where user_id = {}""".format(user_id)
    cursor.execute(sql)
    list_user = str(cursor.fetchall())
    print(list_user)

    if not list_user: # 없는 user_id를 조회했을 때 어떤 값이 리턴되는지 모르겠어, 그걸 찾아보고 종료조건 바꾸기
        continue
    for i in range(list_user.split(",")):
        print(i.split(": ")[1].split("}")[0])

    user_id += 1

connection.commit() # 이건 user_id 한번에 한번 실행되야 한다면, while문 안으로
# ---------------------------------------------------------------------------------------------
farm = {
    '이수민': {
        '개운죽': 4.0,
        '금전수': 5.0,
        '떡갈잎고무나무': 3.0,
        '몬스테라': 1.5,
        '무늬접란': 1.5,
    },
    '백승진': {
        '개운죽': 5.0,
        '금전수': 4.0,
        '떡갈잎고무나무': 3.5,
        '몬스테라': 1.5,
        '무늬접란': 1.0 ,
        
    },
    
    '장지선': {
        '개운죽': 5.0,
        '금전수': 4.5,
        '떡갈잎고무나무': 2.5,
        '몬스테라': 1.0,
        '무늬접란': 1.0,
        
    },
    '조현빈': {
        '개운죽': 3.5,
        '금전수': 5.0,
        '떡갈잎고무나무': 3.0,
        '몬스테라': 1.5,
        '무늬접란': 1.0,
        
    },
    '홍성목': {
        '개운죽': 4.0,
        '금전수': 4.5,
        '떡갈잎고무나무': 3.0,
        '몬스테라': 1.0,
        '무늬접란': 2.5,
        
    },
    '김지현': {
        '개운죽': 4.0,
        '금전수': 4.0,
        '떡갈잎고무나무': 3.0,
        '몬스테라': 1.5,
        '무늬접란': 2.0,
        
    },
    '이태희': {
        '개운죽': 4.0,
        '금전수': 4.0,
        '떡갈잎고무나무': 2.5,
        '몬스테라': 1.0,
        '무늬접란': 2.0,
        
    },
    '박현정': {
        '개운죽': 4.0,
        '금전수': 0,
        '떡갈잎고무나무': 0,
        '몬스테라': 0,
        '무늬접란': 0, # 1. 아직 키우지 않는다 = 평가되지 않음?!! 2. 선호하지 않는다
    },
}

n = len(farm)
zeros = np.zeros((n, n))
sim = pd.DataFrame(zeros, index=list(farm.keys()), columns=list(farm.keys()))

farm = pd.DataFrame(farm).T

# 유사도 계산
for name1 in sim.index:
    for name2 in sim.index:
        sim[name1].loc[name2] = round(pearsonr(list(farm.loc[name1]), list(farm.loc[name2]))[0], 4) # scipy 라이브러리 사용


# 새로운 데이터 추가
def update_table(update_name, new_data, new_person = False):
    if new_person:
        sim[update_name] = 1
        sim.loc[update_name] = 1
    
    farm.loc[update_name] = new_data

    for name in sim.index:
        sim[update_name].loc[name] = round(pearsonr(list(farm.loc[update_name]), list(farm.loc[name]))[0], 4)
        sim[name].loc[update_name] = round(pearsonr(list(farm.loc[update_name]), list(farm.loc[name]))[0], 4)

# new_data = {
#         '개운죽': 5.0,
#         '금전수': 5.0,
#         '떡갈잎고무나무': 4.0,
#         '몬스테라': 1.5,
#         '무늬접란': 1.5,
#     }
# update_table('이승형', new_data, new_person = True)


def get_recommendation(name):
    plants =list(farm.columns)
    score_dic=defaultdict(int) # 평점
    sim_dic=defaultdict(int) # 유사도

    for name2, sim_score in dict(sim[name]).items():
        if sim_score > 0 and name != name2: # 박현정과 유사도가 0 이상인 사람에 대해서
            for plant in plants: # 모든 식물을 조사해본다.
                score = 0
                if not farm.loc['박현정'][plant]: # 만약 박현정이 그 식물을 키우지 않는다면,
                    score += farm.loc[name2][plant] * sim_score # 평점 예측 
                    score_dic[plant] += score
                    sim_dic[plant] += sim_score
    
    # print(score_dic)
    # print(sim_dic)
    ret = []
    for key in score_dic.keys():
        score_dic[key] = score_dic[key]/sim_dic[key]
        ret.append([score_dic[key], key])
    
    return ret

# print(get_recommendation('박현정'))
