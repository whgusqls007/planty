import json
import xmltodict
import requests

headers = {'Content-Type': 'application/json; charset=utf-8'}
params = {'apiKey' : '20220831J3W8AC80SV04RAAHSRCTPG', 'numOfRows' : 1000}
response = requests.get('http://api.nongsaro.go.kr/service/garden/gardenList', headers=headers, params=params)

# api key 20220831J3W8AC80SV04RAAHSRCTPG


# with open("response.xml","r", encoding="utf-8-sig") as f:
    # xmlString = f.read()

# print("xml Input ======")
# print(xmlString)

jsonString = json.dumps(xmltodict.parse(response.content, encoding="utf-8"), ensure_ascii = False, indent=4)
json_data = json.loads(jsonString)

# print("json output ======")
# print(jsonString)

with open("TIL/BSJ/dataProcess/plantDataXmltoJson/response.json","w", encoding="utf-8") as f:
    f.write(jsonString)

plantLength = int(json_data['response']['body']['items']['totalCount'])
print(plantLength)

plantIdList = []
print(len(json_data['response']['body']['items']['item']))

for i in range(plantLength):
    plantIdList.append(json_data['response']['body']['items']['item'][i]['cntntsNo'])

# print(json_data['response']['body']['items']['item'][0]['cntntsNo'])

print(plantIdList)

for i in plantIdList:
    i = int(i)
    headers = {'Content-Type': 'application/json; charset=utf-8'}
    params = {'apiKey' : '20220831J3W8AC80SV04RAAHSRCTPG', 'cntntsNo' : i}
    response = requests.get('http://api.nongsaro.go.kr/service/garden/gardenDtl', headers=headers, params=params)
    with open("TIL/BSJ/dataProcess/plantDataXmltoJson/plantDtlData/plantDtl_{}.json".format(i), "w", encoding="utf-8") as f:
        f.write(json.dumps(xmltodict.parse(response.content, encoding="utf-8"), ensure_ascii = False, indent=4))