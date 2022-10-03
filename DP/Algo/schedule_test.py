import schedule as schedule
import time
import datetime


# 스케쥴 모듈이 동작시킬 코드 : 현재 시간 출력
def test_fuction():
    now = datetime.datetime.now()
    print("test code- 현재 시간 출력하기")
    print(now)


# 1초마다 test_fuction을 동작시키자
schedule.every(1).seconds.do(test_fuction)

# 무한 루프를 돌면서 스케쥴을 유지한다.
while True:
    schedule.run_pending()
    time.sleep(1)
