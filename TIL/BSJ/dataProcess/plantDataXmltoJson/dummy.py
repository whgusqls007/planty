import os
import csv
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

path = os.path.expanduser(
    "D:\E103project\S07P22E103\TIL\BSJ\dataProcess\plantDataXmltoJson\\"
)

idx_convert_list = [
    0,
    0,
    50,
    176,
    93,
    200,
    71,
    160,
    95,
    203,
    75,
    14,
    2,
    42,
    84,
    62,
    103,
    111,
    112,
    122,
    6,
    68,
    174,
    120,
    177,
    59,
    117,
    130,
    179,
    157,
    79,
    77,
]

csv_cursor = open(f"{path}1.csv", "r", encoding="utf-8")
reader = csv.reader(csv_cursor)

i = 1
userId = -1;

for idx in reader:
    if i < 5:
        i += 1
        continue
    for j in range(len(idx)):
        if j < 1:
            continue
        if idx[j] == "":
            idx[j] = "-"
        # 유저 등록 /accounts/signup
        if j == 1:
          sql = f"""insert into accounts_user (password, is_superuser, username, email, is_staff, is_active, date_joined, exp, point, profile_img, is_editor, is_private, plants_count, followers_count, follows_count, articles_count, comments_count, likes_count, age_group) values ('homido1234', '0', 'dummyUser{i-4}', 'dummyUser{i-4}@homido.com', '0', '1', CURRENT_TIMESTAMP(), '0', '0', 'https://homidu.s3.ap-northeast-2.amazonaws.com/user/default-user-img.png', '0', '0', '0', '0', '0', '0', '0', '0', '{idx[j]}')"""
          cursor.execute(sql)
          # 유저 idx 가져오기
          sql = f"""select id from accounts_user where username='dummyUser{i-4}'"""
          cursor.execute(sql)
          userId = cursor.fetchone()
          userId = str(userId)
          userId = userId.split(": ")[1].split("}")[0]
          connection.commit()
          print(userId)
          continue
      # 유저 idx 나의 정원 생성
    sql = f"""insert into mygardens_mygarden (date_created, diaries_count, plant_id, user_id) values (CURRENT_TIMESTAMP(), '0', '{idx_convert_list[i-3]}', '{userId}')"""
    cursor.execute(sql)
        # value 값이 0 이 아니면 나의 정원에 등록
        # print(f'idx : {idx_convert_list[j]} value : {idx[j]}', end = ' ') #선호도 테이블에 값 등록
        # print(idx[j], end=" ")
    i+=1
    print()
