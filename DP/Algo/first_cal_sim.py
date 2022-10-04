import pandas as pd
import numpy as np
from scipy.stats import pearsonr
import pymysql

connection = pymysql.connect(
    user="j7e103",
    passwd="000000",
    host="j7e103.p.ssafy.io",
    port=3337,
    db="homidu",
    charset="utf8",
)
cursor = connection.cursor(pymysql.cursors.DictCursor)
# ------------------------------------------------------------------------------------------------------

SQL = "SELECT * FROM plantlike"
plant_like = pd.read_sql(SQL, connection)

# 문자열로 인코딩 된 선호도 파싱 후 테이블 생성
zeros = np.zeros((len(set(plant_like["user_id"])), len(plant_like["score"].iloc[0])))
farm = pd.DataFrame(
    zeros,
    index=list(set(plant_like["user_id"])),
    columns=range(1, len(plant_like["score"].iloc[0]) + 1),
)

for uid, score in zip(plant_like["user_id"], plant_like["score"]):
    for i, val in enumerate(score):
        farm[i + 1].loc[uid] = int(val)

print(farm.astype(int))


# 최초 유사도 테이블 생성
n = len(farm.index)
zeros = np.zeros((n, n))
sim = pd.DataFrame(zeros, index=list(farm.index), columns=list(farm.index))

# 최초 유사도 계산
for name1 in sim.index:
    for name2 in sim.index:
        sim[name1].loc[name2] = round(
            pearsonr(list(farm.loc[name1]), list(farm.loc[name2]))[0], 4
        )  # scipy 라이브러리 사용

# 모든 유저간의 유사도 행렬 구성 완료 (첫 번째 과정)
sim.to_csv("sim.csv")
