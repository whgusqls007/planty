import os
import csv
from numpy import zeros
import pymysql
import random

connection = pymysql.connect(
    user="j7e103",
    passwd="000000",
    host="j7e103.p.ssafy.io",
    port=3307,
    db="homidu",
    charset="utf8",
)
cursor = connection.cursor(pymysql.cursors.DictCursor)

for i in range(10000):
    mainsql = """insert into plantLike (user_id, score) values """
    substring = zeros(218, int)
    substring=list(substring)
    for j in range(218):
        if j == 0:
          sql = f"""insert into accounts_user (password, is_superuser, username, email, is_staff, is_active, date_joined, exp, point, profile_img, is_editor, is_private, plants_count, followers_count, follows_count, articles_count, comments_count, likes_count, age_group) values ('homido1234', '0', 'dummyUser{300+i}', 'dummyUser{300+i}@homido.com', '0', '1', CURRENT_TIMESTAMP(), '0', '0', 'https://homidu.s3.ap-northeast-2.amazonaws.com/user/default-user-img.png', '0', '0', '0', '0', '0', '0', '0', '0', 'dummy')"""
          cursor.execute(sql)
          # 유저 idx 가져오기
          sql = f"""select id from accounts_user where username='dummyUser{300+i}'"""
          cursor.execute(sql)
          userId = cursor.fetchone()
          userId = str(userId)
          userId = userId.split(": ")[1].split("}")[0]
          connection.commit()
          continue
    # 유저 선호도 입력 idx[1] age
        if j == 169:
            continue
        value = random.randint(1,10)
        if(value == 1 or value == 2):
            substring[j] = 1
        value = random.randint(1,30)
        if(value == 1):
            substring[j] = 2
        if(substring[j] == 1 or substring[j] == 2):
            sql = f"""insert into mygardens_mygarden (date_created, diaries_count, plant_id, user_id, present) values (CURRENT_TIMESTAMP(), '0', '{j}', '{userId}', '0')"""
            cursor.execute(sql)
    substring=substring[1:]
    result = "".join(str(elem) for elem in substring)
    mainsql += f"""('{userId}','{result}'),"""
    mainsql=mainsql[:-1]
    cursor.execute(mainsql)
    connection.commit()
        # value 값이 0 이 아니면 나의 정원에 등록
        # print(f'idx : {idx_convert_list[j]} value : {idx[j]}', end = ' ') #선호도 테이블에 값 등록
        # print(idx[j], end=" ")
    print(i)
