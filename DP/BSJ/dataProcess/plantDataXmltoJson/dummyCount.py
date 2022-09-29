import os
import csv
from typing import Counter
from numpy import zeros
import pymysql

connection = pymysql.connect(
    user="j7e103",
    passwd="000000",
    host="j7e103.p.ssafy.io",
    port=3307,
    db="homidu",
    charset="utf8",
)
cursor = connection.cursor(pymysql.cursors.DictCursor)

sql = f"""select user_id, plant_id from mygardens_mygarden"""
cursor.execute(sql)
line = cursor.fetchall()
line = list(line)
allCnt = len(line)
print(allCnt)
for i in range(allCnt):
    print(i)
    substring = str(line[i])
    # print(substring)
    user_id = substring.split("'user_id': ")[1].split(",")[0]
    plant_id = substring.split("'plant_id': ")[1].split("}")[0]
    # print(user_id, plant_id)
    sql = f"""select petSafety, particulateMatter, humidify, airCleaning from plantKeyword where id = {plant_id}"""
    cursor.execute(sql)
    keywordtable = cursor.fetchone()
    keywordtable = str(keywordtable)
    petSafety = keywordtable.split("'petSafety': ")[1].split(",")[0]
    if petSafety == "1":
        petSafety = 1
    else:
        petSafety = 0
    particulateMatter = keywordtable.split("'particulateMatter': ")[1].split(
        ","
    )[0]
    if particulateMatter == "1":
        particulateMatter = 1
    else:
        particulateMatter = 0
    humidify = keywordtable.split("'humidify': ")[1].split(",")[0]
    if humidify == "1":
        humidify = 1
    else:
        humidify = 0
    airCleaning = keywordtable.split("'airCleaning': ")[1].split("}")[0]
    if airCleaning == "1":
        airCleaning = 1
    else:
        airCleaning = 0

    sql = f"""select managelevelCodeNm, smellCodeNm, managedemanddoCodeNm, eclgyCodeNm, lighttdemanddoCodeNm, grwhTpCodeNm from plant where id = {plant_id}"""
    cursor.execute(sql)
    planttable = cursor.fetchone()
    planttable = str(planttable)
    managelevelCodeNm = planttable.split("'managelevelCodeNm': ")[1].split(",")[
        0
    ]
    if "초보자" in managelevelCodeNm:
        managelevelCodeNm = 1
    else:
        managelevelCodeNm = 0
    smellCodeNm = planttable.split("'smellCodeNm': ")[1].split(",")[0]
    if "없음" in smellCodeNm:
        smellCodeNm = 1
    else:
        smellCodeNm = 0
    managedemanddoCodeNm = planttable.split("'managedemanddoCodeNm': ")[
        1
    ].split(",")[0]
    if "낮음" in managedemanddoCodeNm or "보통" in managedemanddoCodeNm:
        managedemanddoCodeNm = 1
    else:
        managedemanddoCodeNm = 0
    eclgyCodeNm = planttable.split("'eclgyCodeNm': ")[1].split(", 'light")[0]
    if "수경형" in eclgyCodeNm:
        eclgyCodeNm = 1
    else:
        eclgyCodeNm = 0
    lighttdemanddoCodeNm = planttable.split("'lighttdemanddoCodeNm': ")[
        1
    ].split(",")[0]
    if "낮은" in lighttdemanddoCodeNm:
        lighttdemanddoCodeNm = 1
    else:
        lighttdemanddoCodeNm = 0
    grwhTpCodeNm = planttable.split("'grwhTpCodeNm': ")[1].split("}")[0]
    if "15" in grwhTpCodeNm or "16" in grwhTpCodeNm:
        grwhTpCodeNm = 1
    else:
        grwhTpCodeNm = 0

    sql = f"""select * from recommendations_userkeywordcount where user_id = {user_id}"""
    cursor.execute(sql)
    countreturn = cursor.fetchone()
    if countreturn == None:
        sql = f"""insert into recommendations_userkeywordcount (pet_safe, humidify, pm_cleaning, beginner, unscented, hydroponics, low_growth_demand, low_light_demand, low_temp, air_cleaning, user_id) values (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {user_id})"""
        cursor.execute(sql)
        connection.commit()
    else:
        countreturn = str(countreturn)
        petSafety += int(countreturn.split("'pet_safe': ")[1].split(",")[0])
        particulateMatter += int(
            countreturn.split("'pm_cleaning': ")[1].split(",")[0]
        )
        humidify += int(countreturn.split("'humidify': ")[1].split(",")[0])
        airCleaning += int(
            countreturn.split("'air_cleaning': ")[1].split("}")[0]
        )
        managelevelCodeNm += int(
            countreturn.split("'beginner': ")[1].split(",")[0]
        )
        smellCodeNm += int(countreturn.split("'unscented': ")[1].split(",")[0])
        managedemanddoCodeNm += int(
            countreturn.split("'low_growth_demand': ")[1].split(",")[0]
        )
        eclgyCodeNm += int(
            countreturn.split("'hydroponics': ")[1].split(",")[0]
        )
        lighttdemanddoCodeNm += int(
            countreturn.split("'low_light_demand': ")[1].split(",")[0]
        )
        grwhTpCodeNm += int(countreturn.split("'low_temp': ")[1].split(",")[0])
        
        sql = f"""update recommendations_userkeywordcount set pet_safe = {petSafety}, pm_cleaning = {particulateMatter}, humidify = {humidify}, air_cleaning = {airCleaning}, beginner = {managelevelCodeNm}, unscented = {smellCodeNm}, hydroponics = {eclgyCodeNm}, low_growth_demand = {managedemanddoCodeNm}, low_light_demand = {lighttdemanddoCodeNm}, low_temp = {grwhTpCodeNm} where user_id = {user_id}"""
        cursor.execute(sql)
        connection.commit()
