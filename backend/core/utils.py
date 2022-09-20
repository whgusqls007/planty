import boto3
from datetime import datetime
from django.conf import settings

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