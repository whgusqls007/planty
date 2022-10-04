import pandas as pd
from scipy.stats import pearsonr
from recommand import connection_db
import schedule as schedule
import time


def update_processing():

    sim, farm, connection = connection_db()

    # 업데이트 된 사람들 추가해주기
    SQL = "SELECT * FROM update_table;"
    update_table = pd.read_sql(SQL, connection)

    # truncate table
    cur = connection.cursor()
    cur.execute("TRUNCATE TABLE update_table;")

    update_arr = list(update_table["user_id"])

    for update_uid in update_arr:

        # sim.index <- sim행렬에 존재하는 모든 사람의 리스트

        # update_uid가 기존의 유사도 행렬에 없는 유저의 경우
        # 값을 1로 초기화 해줌
        if update_uid not in sim.index:
            sim[update_uid] = 1
            sim.loc[update_uid] = 1

        # update_uid와 i의 피어슨 유사도 계산
        for i in sim.index:
            # 피어슨 유사도가 2번 계산 되던걸 한번으로 줄임
            pearson = round(
                pearsonr(list(farm.loc[update_uid]), list(farm.loc[i]))[0], 4
            )
            sim[update_uid].loc[i] = pearson
            sim[i].loc[update_uid] = pearson

    # 업데이트된 사람들만 유사도행렬을 새로 계산해줌
    sim.to_csv("sim.csv")


if __name__ == "__main__":
    # 배치작업
    # 매일 10시마다 update_processing() 동작
    schedule.every().day.at("10:00").do(update_processing())

    # 무한 루프를 돌면서 스케쥴을 유지한다.
    while True:
        schedule.run_pending()
        time.sleep(1)
