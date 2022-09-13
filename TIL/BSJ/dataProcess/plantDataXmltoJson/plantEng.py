from ftplib import all_errors
import json
import xmltodict
import requests

headers = {"Content-Type": "application/json; charset=utf-8"}
params = {"apiKey": "20220831J3W8AC80SV04RAAHSRCTPG", "numOfRows": 1000}
response = requests.get(
    "http://api.nongsaro.go.kr/service/garden/gardenList",
    headers=headers,
    params=params,
)

with open(
    "TIL/BSJ/dataProcess/plantDataXmltoJson/responseEng.json",
    "w",
    encoding="utf-8",
) as f:

  jsonString = json.dumps(
      xmltodict.parse(response.content, encoding="utf-8"),
      ensure_ascii=False,
      indent=4,
  )
  json_data = json.loads(jsonString)

  plantLength = int(json_data["response"]["body"]["items"]["totalCount"])
  print(plantLength)

  for i in range(plantLength):
      i = int(i)
      cntntsNo = json_data["response"]["body"]["items"]["item"][i]["cntntsNo"]
      cntntsSj = json_data["response"]["body"]["items"]["item"][i]["cntntsSj"]

      headers = {"Content-Type": "application/json; charset=utf-8"}
      params = {"apiKey": "20220831J3W8AC80SV04RAAHSRCTPG", "cntntsNo": cntntsNo}
      response = requests.get(
          "http://api.nongsaro.go.kr/service/garden/gardenDtl",
          headers=headers,
          params=params,
      )
      json_dtl_data = json.loads(
          json.dumps(
              xmltodict.parse(response.content, encoding="utf-8"),
              ensure_ascii=False,
              indent=4,
          )
      )

      plntzrNm = json_dtl_data["response"]["body"]["item"]["plntzrNm"]
      f.write(cntntsNo + " : " + cntntsSj + " : " + plntzrNm + "\n")