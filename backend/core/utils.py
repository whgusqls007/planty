import boto3
from datetime import datetime
from django.conf import settings
import pandas as pd
import numpy as np
from collections import defaultdict
import pymysql

AWS_ACCESS_KEY_ID = settings.AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY = settings.AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION = settings.AWS_DEFAULT_REGION
AWS_BUCKET_URL = settings.AWS_BUCKET_URL

client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_DEFAULT_REGION
)

def s3_upload_image(file, dir_path=''):
    """
    s3에 파일 업로드 하는 함수
    from core.utils import s3_upload_image
    file : 파일 객체
    dir_path: 업로드 경로

    """
    now = datetime.now()
    file_name = str(now.year) + '_' + \
        str(now.month).zfill(2) + '_' + \
        str(now.day).zfill(2) + '_' + \
        str(now.hour).zfill(2) + '_' + \
        str(now.minute).zfill(2) + '_' + \
        str(now.second).zfill(2) + '_' + \
        str(file)
    client.upload_fileobj(
            file,  # 업로드할파일
            'homidu',  # 버킷 이름
            dir_path + file_name,  # 파일 이름
            ExtraArgs={
                "ContentType": file.content_type
            }
        )
    return f'{AWS_BUCKET_URL}{dir_path}{file_name}'


# 유저 추천
def get_recommendation_top_percent(
    uid, percent=10, ret_cnt=7
):  # user_id , 유사한 사람 상위 몇퍼센트까지, 리턴될 식물개수

    sim, farm, _ = connection_db()

    top_cnt = int(len(sim.index) * ((100 - percent) / 100))
    tmp = sorted(dict(sim[uid]).items(), key=lambda x: -x[1])
    tmp = [x for x in tmp if (x[1]>0)][1:top_cnt+1]
    plants = list(farm.columns)
    score_dic = defaultdict(int)  # 평점
    sim_dic = defaultdict(int)  # 유사도
    for uid2, sim_score in tmp:
        for plant in plants:
            score = 0
            if not farm[plant][uid]:
                score += farm[plant][uid2] * sim_score
                score_dic[plant] += score
                sim_dic[plant] += sim_score


    ret = []
    for key in score_dic.keys():
        score_dic[key] = score_dic[key] / sim_dic[key]
        ret.append([score_dic[key], key])

    if not ret:  # 모든 식물을 키워서 추천된 식물이 하나도 없을 때
        return []  # 빈배열로 넘기는게 맞을지 0을 넘기는게 맞을지

    ret_cnt = min(len(ret), ret_cnt)  # ret_cnt 개 만큼 return 해 주겠다!

    return sorted(ret, key=lambda x: x[0], reverse=True)[:ret_cnt]


def connection_db():
    connection = pymysql.connect(
        user="j7e103",
        passwd="000000",
        host="j7e103.p.ssafy.io",
        port=3337,
        db="homidu",
        charset="utf8",
    )    

    # 유사도 csv 파일 읽어오기
    sim = pd.read_csv("core/sim.csv", index_col=0)
    sim.columns = sim.index

    # 선호도 테이블 불러오기
    SQL = "SELECT * FROM plantlike"
    plant_like = pd.read_sql(SQL, connection)

    # 문자열로 인코딩 된 선호도 파싱 후 테이블 생성
    tmp = [list(map(float, str_score)) for str_score in plant_like.score]

    farm = pd.DataFrame(
        tmp,
        index=list(set(plant_like["user_id"])),
        columns=range(1, len(plant_like["score"].iloc[0]) + 1),
    )


    return sim, farm, connection
