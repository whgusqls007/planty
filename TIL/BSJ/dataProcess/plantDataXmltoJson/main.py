import json
import xmltodict
import requests

plantDtlList = []


class Plant:
    def __init__(self):
        self.cntntsNo = ""
        self.cntntsSj = ""
        self.adviseInfo = ""
        self.clCodeNm = ""
        self.distbNm = ""
        self.dlthtsCodeNm = ""
        self.dlthtsManageInfo = ""
        self.eclgyCodeNm = ""
        self.etcEraInfo = ""
        self.flclrCodeNm = ""
        self.flpodmtBigInfo = ""
        self.flpodmtMddlInfo = ""
        self.flpodmtSmallInfo = ""
        self.fmlCodeNm = ""
        self.fmlNm = ""
        self.fmldeSeasonCodeNm = ""
        self.fmldecolrCodeNm = ""
        self.fncltyInfo = ""
        self.frtlzrInfo = ""
        self.growthAraInfo = ""
        self.growthHgInfo = ""
        self.grwhTpCode = ""
        self.grwhTpCodeNm = ""
        self.grwhstleCodeNm = ""
        self.grwtveCode = ""
        self.grwtveCodeNm = ""
        self.hdCode = ""
        self.hgBigInfo = ""
        self.hgMddlInfo = ""
        self.hgSmallInfo = ""
        self.ignSeasonCodeNm = ""
        self.imageEvlLinkCours = ""
        self.indoorpsncpacompositionCodeNm = ""
        self.lefStleInfo = ""
        self.lefcolrCodeNm = ""
        self.lefmrkCodeNm = ""
        self.lighttdemanddoCodeNm = ""
        self.managedemanddoCode = ""
        self.managedemanddoCodeNm = ""
        self.managelevelCode = ""
        self.managelevelCodeNm = ""
        self.orgplceInfo = ""
        self.pcBigInfo = ""
        self.pcMddlInfo = ""
        self.pcSmallInfo = ""
        self.plntbneNm = ""
        self.plntzrNm = ""
        self.postngplaceCodeNm = ""
        self.prpgtEraInfo = ""
        self.prpgtmthCodeNm = ""
        self.smellCode = ""
        self.smellCodeNm = ""
        self.soilInfo = ""
        self.speclmanageInfo = ""
        self.toxctyInfo = ""
        self.volmeBigInfo = ""
        self.volmeMddlInfo = ""
        self.volmeSmallInfo = ""
        self.vrticlBigInfo = ""
        self.vrticlMddlInfo = ""
        self.vrticlSmallInfo = ""
        self.watercycleAutumnCode = ""
        self.watercycleAutumnCodeNm = ""
        self.watercycleSprngCode = ""
        self.watercycleSprngCodeNm = ""
        self.watercycleSummerCode = ""
        self.watercycleSummerCodeNm = ""
        self.watercycleWinterCode = ""
        self.watercycleWinterCodeNm = ""
        self.widthBigInfo = ""
        self.widthMddlInfo = ""
        self.widthSmallInfo = ""
        self.winterLwetTpCode = ""

    def add(
        self,
        cntntsNo,
        cntntsSj,
        adviseInfo,
        clCodeNm,
        distbNm,
        dlthtsCodeNm,
        dlthtsManageInfo,
        eclgyCodeNm,
        etcEraInfo,
        flclrCodeNm,
        flpodmtBigInfo,
        flpodmtMddlInfo,
        flpodmtSmallInfo,
        fmlCodeNm,
        fmlNm,
        fmldeSeasonCodeNm,
        fmldecolrCodeNm,
        fncltyInfo,
        frtlzrInfo,
        growthAraInfo,
        growthHgInfo,
        grwhTpCode,
        grwhTpCodeNm,
        grwhstleCodeNm,
        grwtveCode,
        grwtveCodeNm,
        hdCode,
        hgBigInfo,
        hgMddlInfo,
        hgSmallInfo,
        ignSeasonCodeNm,
        imageEvlLinkCours,
        indoorpsncpacompositionCodeNm,
        lefStleInfo,
        lefcolrCodeNm,
        lefmrkCodeNm,
        lighttdemanddoCodeNm,
        managedemanddoCode,
        managedemanddoCodeNm,
        managelevelCode,
        managelevelCodeNm,
        orgplceInfo,
        pcBigInfo,
        pcMddlInfo,
        pcSmallInfo,
        plntbneNm,
        plntzrNm,
        postngplaceCodeNm,
        prpgtEraInfo,
        prpgtmthCodeNm,
        smellCode,
        smellCodeNm,
        soilInfo,
        speclmanageInfo,
        toxctyInfo,
        volmeBigInfo,
        volmeMddlInfo,
        volmeSmallInfo,
        vrticlBigInfo,
        vrticlMddlInfo,
        vrticlSmallInfo,
        watercycleAutumnCode,
        watercycleAutumnCodeNm,
        watercycleSprngCode,
        watercycleSprngCodeNm,
        watercycleSummerCode,
        watercycleSummerCodeNm,
        watercycleWinterCode,
        watercycleWinterCodeNm,
        widthBigInfo,
        widthMddlInfo,
        widthSmallInfo,
        winterLwetTpCode,
    ):
        self.cntntsNo = cntntsNo
        self.cntntsSj = cntntsSj
        self.adviseInfo = adviseInfo
        self.clCodeNm = clCodeNm
        self.distbNm = distbNm
        self.dlthtsCodeNm = dlthtsCodeNm
        self.dlthtsManageInfo = dlthtsManageInfo
        self.eclgyCodeNm = eclgyCodeNm
        self.etcEraInfo = etcEraInfo
        self.flclrCodeNm = flclrCodeNm
        self.flpodmtBigInfo = flpodmtBigInfo
        self.flpodmtMddlInfo = flpodmtMddlInfo
        self.flpodmtSmallInfo = flpodmtSmallInfo
        self.fmlCodeNm = fmlCodeNm
        self.fmlNm = fmlNm
        self.fmldeSeasonCodeNm = fmldeSeasonCodeNm
        self.fmldecolrCodeNm = fmldecolrCodeNm
        self.fncltyInfo = fncltyInfo
        self.frtlzrInfo = frtlzrInfo
        self.growthAraInfo = growthAraInfo
        self.growthHgInfo = growthHgInfo
        self.grwhTpCode = grwhTpCode
        self.grwhTpCodeNm = grwhTpCodeNm
        self.grwhstleCodeNm = grwhstleCodeNm
        self.grwtveCode = grwtveCode
        self.grwtveCodeNm = grwtveCodeNm
        self.hdCode = hdCode
        self.hgBigInfo = hgBigInfo
        self.hgMddlInfo = hgMddlInfo
        self.hgSmallInfo = hgSmallInfo
        self.ignSeasonCodeNm = ignSeasonCodeNm
        self.imageEvlLinkCours = imageEvlLinkCours
        self.indoorpsncpacompositionCodeNm = indoorpsncpacompositionCodeNm
        self.lefStleInfo = lefStleInfo
        self.lefcolrCodeNm = lefcolrCodeNm
        self.lefmrkCodeNm = lefmrkCodeNm
        self.lighttdemanddoCodeNm = lighttdemanddoCodeNm
        self.managedemanddoCode = managedemanddoCode
        self.managedemanddoCodeNm = managedemanddoCodeNm
        self.managelevelCode = managelevelCode
        self.managelevelCodeNm = managelevelCodeNm
        self.orgplceInfo = orgplceInfo
        self.pcBigInfo = pcBigInfo
        self.pcMddlInfo = pcMddlInfo
        self.pcSmallInfo = pcSmallInfo
        self.plntbneNm = plntbneNm
        self.plntzrNm = plntzrNm
        self.postngplaceCodeNm = postngplaceCodeNm
        self.prpgtEraInfo = prpgtEraInfo
        self.prpgtmthCodeNm = prpgtmthCodeNm
        self.smellCode = smellCode
        self.smellCodeNm = smellCodeNm
        self.soilInfo = soilInfo
        self.speclmanageInfo = speclmanageInfo
        self.toxctyInfo = toxctyInfo
        self.volmeBigInfo = volmeBigInfo
        self.volmeMddlInfo = volmeMddlInfo
        self.volmeSmallInfo = volmeSmallInfo
        self.vrticlBigInfo = vrticlBigInfo
        self.vrticlMddlInfo = vrticlMddlInfo
        self.vrticlSmallInfo = vrticlSmallInfo
        self.watercycleAutumnCode = watercycleAutumnCode
        self.watercycleAutumnCodeNm = watercycleAutumnCodeNm
        self.watercycleSprngCode = watercycleSprngCode
        self.watercycleSprngCodeNm = watercycleSprngCodeNm
        self.watercycleSummerCode = watercycleSummerCode
        self.watercycleSummerCodeNm = watercycleSummerCodeNm
        self.watercycleWinterCode = watercycleWinterCode
        self.watercycleWinterCodeNm = watercycleWinterCodeNm
        self.widthBigInfo = widthBigInfo
        self.widthMddlInfo = widthMddlInfo
        self.widthSmallInfo = widthSmallInfo
        self.winterLwetTpCode = winterLwetTpCode

    def printDtl(self):
        print(
            self.cntntsNo,
            self.cntntsSj,
            self.adviseInfo,
            self.clCodeNm,
            self.distbNm,
            self.dlthtsCodeNm,
            self.dlthtsManageInfo,
            self.eclgyCodeNm,
            self.etcEraInfo,
            self.flclrCodeNm,
            self.flpodmtBigInfo,
            self.flpodmtMddlInfo,
            self.flpodmtSmallInfo,
            self.fmlCodeNm,
            self.fmlNm,
            self.fmldeSeasonCodeNm,
            self.fmldecolrCodeNm,
            self.fncltyInfo,
            self.frtlzrInfo,
            self.growthAraInfo,
            self.growthHgInfo,
            self.grwhTpCode,
            self.grwhTpCodeNm,
            self.grwhstleCodeNm,
            self.grwtveCode,
            self.grwtveCodeNm,
            self.hdCode,
            self.hgBigInfo,
            self.hgMddlInfo,
            self.hgSmallInfo,
            self.ignSeasonCodeNm,
            self.imageEvlLinkCours,
            self.indoorpsncpacompositionCodeNm,
            self.lefStleInfo,
            self.lefcolrCodeNm,
            self.lefmrkCodeNm,
            self.lighttdemanddoCodeNm,
            self.managedemanddoCode,
            self.managedemanddoCodeNm,
            self.managelevelCode,
            self.managelevelCodeNm,
            self.orgplceInfo,
            self.pcBigInfo,
            self.pcMddlInfo,
            self.pcSmallInfo,
            self.plntbneNm,
            self.plntzrNm,
            self.postngplaceCodeNm,
            self.prpgtEraInfo,
            self.prpgtmthCodeNm,
            self.smellCode,
            self.smellCodeNm,
            self.soilInfo,
            self.speclmanageInfo,
            self.toxctyInfo,
            self.volmeBigInfo,
            self.volmeMddlInfo,
            self.volmeSmallInfo,
            self.vrticlBigInfo,
            self.vrticlMddlInfo,
            self.vrticlSmallInfo,
            self.watercycleAutumnCode,
            self.watercycleAutumnCodeNm,
            self.watercycleSprngCode,
            self.watercycleSprngCodeNm,
            self.watercycleSummerCode,
            self.watercycleSummerCodeNm,
            self.watercycleWinterCode,
            self.watercycleWinterCodeNm,
            self.widthBigInfo,
            self.widthMddlInfo,
            self.widthSmallInfo,
            self.winterLwetTpCode,
        )

    def filePrintDtl(self, f):
        f.write(
            self.cntntsNo
            + "    "
            + self.cntntsSj
            + "    "
            + self.adviseInfo
            + "    "
            + self.clCodeNm
            + "    "
            # + self.distbNm
            # + "    "
            + self.dlthtsCodeNm
            + "    "
            + self.dlthtsManageInfo
            + "    "
            + self.eclgyCodeNm
            + "    "
            + self.etcEraInfo
            + "    "
            + self.flclrCodeNm
            + "    "
            # + self.flpodmtBigInfo
            # + "    "
            # + self.flpodmtMddlInfo
            # + "    "
            # + self.flpodmtSmallInfo
            # + "    "
            + self.fmlCodeNm
            + "    "
            # + self.fmlNm
            # + "    "
            + self.fmldeSeasonCodeNm
            + "    "
            + self.fmldecolrCodeNm
            + "    "
            + self.fncltyInfo
            + "    "
            + self.frtlzrInfo
            + "    "
            + self.growthAraInfo
            + "    "
            + self.growthHgInfo
            + "    "
            # + self.grwhTpCode
            # + "    "
            + self.grwhTpCodeNm
            + "    "
            + self.grwhstleCodeNm
            + "    "
            # + self.grwtveCode
            # + "    "
            + self.grwtveCodeNm
            + "    "
            + self.hdCode
            + "    "
            # + self.hgBigInfo
            # + "    "
            # + self.hgMddlInfo
            # + "    "
            # + self.hgSmallInfo
            # + "    "
            + self.ignSeasonCodeNm
            + "    "
            # + self.imageEvlLinkCours
            # + "    "
            # + self.indoorpsncpacompositionCodeNm
            # + "    "
            + self.lefStleInfo
            + "    "
            + self.lefcolrCodeNm
            + "    "
            + self.lefmrkCodeNm
            + "    "
            + self.lighttdemanddoCodeNm
            + "    "
            # + self.managedemanddoCode
            # + "    "
            + self.managedemanddoCodeNm
            + "    "
            # + self.managelevelCode
            # + "    "
            + self.managelevelCodeNm
            + "    "
            + self.orgplceInfo
            + "    "
            # + self.pcBigInfo
            # + "    "
            # + self.pcMddlInfo
            # + "    "
            # + self.pcSmallInfo
            # + "    "
            # + self.plntbneNm
            # + "    "
            # + self.plntzrNm
            # + "    "
            + self.postngplaceCodeNm
            + "    "
            + self.prpgtEraInfo
            + "    "
            + self.prpgtmthCodeNm
            + "    "
            # + self.smellCode
            # + "    "
            + self.smellCodeNm
            + "    "
            + self.soilInfo
            + "    "
            + self.speclmanageInfo
            + "    "
            + self.toxctyInfo
            + "    "
            # + self.volmeBigInfo
            # + "    "
            # + self.volmeMddlInfo
            # + "    "
            # + self.volmeSmallInfo
            # + "    "
            # + self.vrticlBigInfo
            # + "    "
            # + self.vrticlMddlInfo
            # + "    "
            # + self.vrticlSmallInfo
            # + "    "
            # + self.watercycleAutumnCode
            # + "    "
            + self.watercycleAutumnCodeNm
            + "    "
            # + self.watercycleSprngCode
            # + "    "
            + self.watercycleSprngCodeNm
            + "    "
            # + self.watercycleSummerCode
            # + "    "
            + self.watercycleSummerCodeNm
            + "    "
            # + self.watercycleWinterCode
            # + "    "
            + self.watercycleWinterCodeNm
            + "    "
            # + self.widthBigInfo
            # + "    "
            # + self.widthMddlInfo
            # + "    "
            # + self.widthSmallInfo
            # + "    "
            + self.winterLwetTpCode
            + "\n"
        )


plantDtl = Plant()
plantDtl.add(
    "cntntsNo(식물번호)",
    "cntntsSj(식물명)",
    "adviseInfo",
    "clCodeNm",
    "distbNm",
    "dlthtsCodeNm",
    "dlthtsManageInfo",
    "eclgyCodeNm",
    "etcEraInfo",
    "flclrCodeNm",
    "flpodmtBigInfo",
    "flpodmtMddlInfo",
    "flpodmtSmallInfo",
    "fmlCodeNm",
    "fmlNm",
    "fmldeSeasonCodeNm",
    "fmldecolrCodeNm",
    "fncltyInfo",
    "frtlzrInfo",
    "growthAraInfo",
    "growthHgInfo",
    "grwhTpCode",
    "grwhTpCodeNm",
    "grwhstleCodeNm",
    "grwtveCode",
    "grwtveCodeNm",
    "hdCode",
    "hgBigInfo",
    "hgMddlInfo",
    "hgSmallInfo",
    "ignSeasonCodeNm",
    "imageEvlLinkCours",
    "indoorpsncpacompositionCodeNm",
    "lefStleInfo",
    "lefcolrCodeNm",
    "lefmrkCodeNm",
    "lighttdemanddoCodeNm",
    "managedemanddoCode",
    "managedemanddoCodeNm",
    "managelevelCode",
    "managelevelCodeNm",
    "orgplceInfo",
    "pcBigInfo",
    "pcMddlInfo",
    "pcSmallInfo",
    "plntbneNm",
    "plntzrNm",
    "postngplaceCodeNm",
    "prpgtEraInfo",
    "prpgtmthCodeNm",
    "smellCode",
    "smellCodeNm",
    "soilInfo",
    "speclmanageInfo",
    "toxctyInfo",
    "volmeBigInfo",
    "volmeMddlInfo",
    "volmeSmallInfo",
    "vrticlBigInfo",
    "vrticlMddlInfo",
    "vrticlSmallInfo",
    "watercycleAutumnCode",
    "watercycleAutumnCodeNm",
    "watercycleSprngCode",
    "watercycleSprngCodeNm",
    "watercycleSummerCode",
    "watercycleSummerCodeNm",
    "watercycleWinterCode",
    "watercycleWinterCodeNm",
    "widthBigInfo",
    "widthMddlInfo",
    "widthSmallInfo",
    "winterLwetTpCode",
)
plantDtlList.append(plantDtl)

headers = {"Content-Type": "application/json; charset=utf-8"}
params = {"apiKey": "20220831J3W8AC80SV04RAAHSRCTPG", "numOfRows": 1000}
response = requests.get(
    "http://api.nongsaro.go.kr/service/garden/gardenList",
    headers=headers,
    params=params,
)

# api key 20220831J3W8AC80SV04RAAHSRCTPG


# with open("response.xml","r", encoding="utf-8-sig") as f:
# xmlString = f.read()

# print("xml Input ======")
# print(xmlString)

jsonString = json.dumps(
    xmltodict.parse(response.content, encoding="utf-8"),
    ensure_ascii=False,
    indent=4,
)
json_data = json.loads(jsonString)

# print("json output ======")
# print(jsonString)

with open(
    "TIL/BSJ/dataProcess/plantDataXmltoJson/response.json",
    "w",
    encoding="utf-8",
) as f:
    f.write(jsonString)

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

    adviseInfo = json_dtl_data["response"]["body"]["item"]["adviseInfo"]
    if(adviseInfo == None):
        adviseInfo = "데이터가 없습니다."
    else:
        adviseInfo = adviseInfo.replace("\n", "")
    clCodeNm = json_dtl_data["response"]["body"]["item"]["clCodeNm"]
    if(clCodeNm == None):
        clCodeNm = "데이터가 없습니다."
    else:
        clCodeNm = clCodeNm.replace("\n", "")
    distbNm = json_dtl_data["response"]["body"]["item"]["distbNm"]
    if(distbNm == None):
        distbNm = "데이터가 없습니다."
    else:
        distbNm = distbNm.replace("\n", "")
    dlthtsCodeNm = json_dtl_data["response"]["body"]["item"]["dlthtsCodeNm"]
    if(dlthtsCodeNm == None):
        dlthtsCodeNm = "데이터가 없습니다."
    else:
        dlthtsCodeNm = dlthtsCodeNm.replace("\n", "")
    dlthtsManageInfo = json_dtl_data["response"]["body"]["item"]["dlthtsManageInfo"]
    if(dlthtsManageInfo == None):
        dlthtsManageInfo = "데이터가 없습니다."
    else:
        dlthtsManageInfo = dlthtsManageInfo.replace("\n", "")
    eclgyCodeNm = json_dtl_data["response"]["body"]["item"]["eclgyCodeNm"]
    if(eclgyCodeNm == None):
        eclgyCodeNm = "데이터가 없습니다."
    else:
        eclgyCodeNm = eclgyCodeNm.replace("\n", "")
    etcEraInfo = json_dtl_data["response"]["body"]["item"]["etcEraInfo"]
    if(etcEraInfo == None):
        etcEraInfo = "데이터가 없습니다."
    else:
        etcEraInfo = etcEraInfo.replace("\n", "")
    flclrCodeNm = json_dtl_data["response"]["body"]["item"]["flclrCodeNm"]
    if(flclrCodeNm == None):
        flclrCodeNm = "데이터가 없습니다."
    else:
        flclrCodeNm = flclrCodeNm.replace("\n", "")
    flpodmtBigInfo = json_dtl_data["response"]["body"]["item"]["flpodmtBigInfo"]
    if(flpodmtBigInfo == None):
        flpodmtBigInfo = "데이터가 없습니다."
    else:
        flpodmtBigInfo = flpodmtBigInfo.replace("\n", "")
    flpodmtMddlInfo = json_dtl_data["response"]["body"]["item"]["flpodmtMddlInfo"]
    if(flpodmtMddlInfo == None):
        flpodmtMddlInfo = "데이터가 없습니다."
    else:
        flpodmtMddlInfo = flpodmtMddlInfo.replace("\n", "")
    flpodmtSmallInfo = json_dtl_data["response"]["body"]["item"]["flpodmtSmallInfo"]
    if(flpodmtSmallInfo == None):
        flpodmtSmallInfo = "데이터가 없습니다."
    else:
        flpodmtSmallInfo = flpodmtSmallInfo.replace("\n", "")
    fmlCodeNm = json_dtl_data["response"]["body"]["item"]["fmlCodeNm"]
    if(fmlCodeNm == None):
        fmlCodeNm = "데이터가 없습니다."
    else:
        fmlCodeNm = fmlCodeNm.replace("\n", "")
    fmlNm = json_dtl_data["response"]["body"]["item"]["fmlNm"]
    if(fmlNm == None):
        fmlNm = "데이터가 없습니다."
    else:
        fmlNm = fmlNm.replace("\n", "")
    fmldeSeasonCodeNm = json_dtl_data["response"]["body"]["item"]["fmldeSeasonCodeNm"]
    if(fmldeSeasonCodeNm == None):
        fmldeSeasonCodeNm = "데이터가 없습니다."
    else:
        fmldeSeasonCodeNm = fmldeSeasonCodeNm.replace("\n", "")
    fmldecolrCodeNm = json_dtl_data["response"]["body"]["item"]["fmldecolrCodeNm"]
    if(fmldecolrCodeNm == None):
        fmldecolrCodeNm = "데이터가 없습니다."
    else:
        fmldecolrCodeNm = fmldecolrCodeNm.replace("\n", "")
    fncltyInfo = json_dtl_data["response"]["body"]["item"]["fncltyInfo"]
    if(fncltyInfo == None):
        fncltyInfo = "데이터가 없습니다."
    else:
        fncltyInfo = fncltyInfo.replace("\n", "")
    frtlzrInfo = json_dtl_data["response"]["body"]["item"]["frtlzrInfo"]
    if(frtlzrInfo == None):
        frtlzrInfo = "데이터가 없습니다."
    else:
        frtlzrInfo = frtlzrInfo.replace("\n", "")
    growthAraInfo = json_dtl_data["response"]["body"]["item"]["growthAraInfo"]
    if(growthAraInfo == None):
        growthAraInfo = "데이터가 없습니다."
    else:
        growthAraInfo = growthAraInfo.replace("\n", "")
    growthHgInfo = json_dtl_data["response"]["body"]["item"]["growthHgInfo"]
    if(growthHgInfo == None):
        growthHgInfo = "데이터가 없습니다."
    else:
        growthHgInfo = growthHgInfo.replace("\n", "")
    grwhTpCode = json_dtl_data["response"]["body"]["item"]["grwhTpCode"]
    if(grwhTpCode == None):
        grwhTpCode = "데이터가 없습니다."
    else:
        grwhTpCode = grwhTpCode.replace("\n", "")
    grwhTpCodeNm = json_dtl_data["response"]["body"]["item"]["grwhTpCodeNm"]
    if(grwhTpCodeNm == None):
        grwhTpCodeNm = "데이터가 없습니다."
    else:
        grwhTpCodeNm = grwhTpCodeNm.replace("\n", "")
    grwhstleCodeNm = json_dtl_data["response"]["body"]["item"]["grwhstleCodeNm"]
    if(grwhstleCodeNm == None):
        grwhstleCodeNm = "데이터가 없습니다."
    else:
        grwhstleCodeNm = grwhstleCodeNm.replace("\n", "")
    grwtveCode = json_dtl_data["response"]["body"]["item"]["grwtveCode"]
    if(grwtveCode == None):
        grwtveCode = "데이터가 없습니다."
    else:
        grwtveCode = grwtveCode.replace("\n", "")
    grwtveCodeNm = json_dtl_data["response"]["body"]["item"]["grwtveCodeNm"]
    if(grwtveCodeNm == None):
        grwtveCodeNm = "데이터가 없습니다."
    else:
        grwtveCodeNm = grwtveCodeNm.replace("\n", "")
    hdCode = json_dtl_data["response"]["body"]["item"]["hdCode"]
    if(hdCode == None):
        hdCode = "데이터가 없습니다."
    else:
        hdCode = hdCode.replace("\n", "")
    hgBigInfo = json_dtl_data["response"]["body"]["item"]["hgBigInfo"]
    if(hgBigInfo == None):
        hgBigInfo = "데이터가 없습니다."
    else:
        hgBigInfo = hgBigInfo.replace("\n", "")
    hgMddlInfo = json_dtl_data["response"]["body"]["item"]["hgMddlInfo"]
    if(hgMddlInfo == None):
        hgMddlInfo = "데이터가 없습니다."
    else:
        hgMddlInfo = hgMddlInfo.replace("\n", "")
    hgSmallInfo = json_dtl_data["response"]["body"]["item"]["hgSmallInfo"]
    if(hgSmallInfo == None):
        hgSmallInfo = "데이터가 없습니다."
    else:
        hgSmallInfo = hgSmallInfo.replace("\n", "")
    ignSeasonCodeNm = json_dtl_data["response"]["body"]["item"]["ignSeasonCodeNm"]
    if(ignSeasonCodeNm == None):
        ignSeasonCodeNm = "데이터가 없습니다."
    else:
        ignSeasonCodeNm =ignSeasonCodeNm.replace("\n", "")
    imageEvlLinkCours = json_dtl_data["response"]["body"]["item"]["imageEvlLinkCours"]
    if(imageEvlLinkCours == None):
        imageEvlLinkCours = "데이터가 없습니다."
    else:
        imageEvlLinkCours = imageEvlLinkCours.replace("\n", "")
    indoorpsncpacompositionCodeNm = json_dtl_data["response"]["body"]["item"][
        "indoorpsncpacompositionCodeNm"
    ]
    if(indoorpsncpacompositionCodeNm == None):
        indoorpsncpacompositionCodeNm = "데이터가 없습니다."
    else:
        indoorpsncpacompositionCodeNm =indoorpsncpacompositionCodeNm.replace("\n", "")
    lefStleInfo = json_dtl_data["response"]["body"]["item"]["lefStleInfo"]
    if(lefStleInfo == None):
        lefStleInfo = "데이터가 없습니다."
    else:
        lefStleInfo = lefStleInfo.replace("\n", "")
    lefcolrCodeNm = json_dtl_data["response"]["body"]["item"]["lefcolrCodeNm"]
    if(lefcolrCodeNm == None):
        lefcolrCodeNm = "데이터가 없습니다."
    else:
        lefcolrCodeNm = lefcolrCodeNm.replace("\n", "")
    lefmrkCodeNm = json_dtl_data["response"]["body"]["item"]["lefmrkCodeNm"]
    if(lefmrkCodeNm == None):
        lefmrkCodeNm = "데이터가 없습니다."
    else:
        lefmrkCodeNm = lefmrkCodeNm.replace("\n", "")
    lighttdemanddoCodeNm = json_dtl_data["response"]["body"]["item"][
        "lighttdemanddoCodeNm"
    ]
    if(lighttdemanddoCodeNm == None):
        lighttdemanddoCodeNm = "데이터가 없습니다."
    else:
        lighttdemanddoCodeNm = lighttdemanddoCodeNm.replace("\n", "")
    managedemanddoCode = json_dtl_data["response"]["body"]["item"]["managedemanddoCode"]
    if(managedemanddoCode == None):
        managedemanddoCode = "데이터가 없습니다."
    else:
        managedemanddoCode = managedemanddoCode.replace("\n", "")
    managedemanddoCodeNm = json_dtl_data["response"]["body"]["item"][
        "managedemanddoCodeNm"
    ]
    if(managedemanddoCodeNm == None):
        managedemanddoCodeNm = "데이터가 없습니다."
    else:
        managedemanddoCodeNm = managedemanddoCodeNm.replace("\n", "")
    managelevelCode = json_dtl_data["response"]["body"]["item"]["managelevelCode"]
    if(managelevelCode == None):
        managelevelCode = "데이터가 없습니다."
    else:
        managelevelCode = managelevelCode.replace("\n", "")
    managelevelCodeNm = json_dtl_data["response"]["body"]["item"]["managelevelCodeNm"]
    if(managelevelCodeNm == None):
        managelevelCodeNm = "데이터가 없습니다."
    else:
        managelevelCodeNm = managelevelCodeNm.replace("\n", "")
    orgplceInfo = json_dtl_data["response"]["body"]["item"]["orgplceInfo"]
    if(orgplceInfo == None):
        orgplceInfo = "데이터가 없습니다."
    else:
        orgplceInfo = orgplceInfo.replace("\n", "")
    pcBigInfo = json_dtl_data["response"]["body"]["item"]["pcBigInfo"]
    if(pcBigInfo == None):
        pcBigInfo = "데이터가 없습니다."
    else:
        pcBigInfo = pcBigInfo.replace("\n", "")
    pcMddlInfo = json_dtl_data["response"]["body"]["item"]["pcMddlInfo"]
    if(pcMddlInfo == None):
        pcMddlInfo = "데이터가 없습니다."
    else:
        pcMddlInfo = pcMddlInfo.replace("\n", "")
    pcSmallInfo = json_dtl_data["response"]["body"]["item"]["pcSmallInfo"]
    if(pcSmallInfo == None):
        pcSmallInfo = "데이터가 없습니다."
    else:
        pcSmallInfo = pcSmallInfo.replace("\n", "")
    plntbneNm = json_dtl_data["response"]["body"]["item"]["plntbneNm"]
    if(plntbneNm == None):
        plntbneNm = "데이터가 없습니다."
    else:
        plntbneNm = plntbneNm.replace("\n", "")
    plntzrNm = json_dtl_data["response"]["body"]["item"]["plntzrNm"]
    if(plntzrNm == None):
        plntzrNm = "데이터가 없습니다."
    else:
        plntzrNm = plntzrNm.replace("\n", "")
    postngplaceCodeNm = json_dtl_data["response"]["body"]["item"]["postngplaceCodeNm"]
    if(postngplaceCodeNm == None):
        postngplaceCodeNm = "데이터가 없습니다."
    else:
        postngplaceCodeNm = postngplaceCodeNm.replace("\n", "")
    prpgtEraInfo = json_dtl_data["response"]["body"]["item"]["prpgtEraInfo"]
    if(prpgtEraInfo == None):
        prpgtEraInfo = "데이터가 없습니다."
    else:
        prpgtEraInfo = prpgtEraInfo.replace("\n", "")
    prpgtmthCodeNm = json_dtl_data["response"]["body"]["item"]["prpgtmthCodeNm"]
    if(prpgtmthCodeNm == None):
        prpgtmthCodeNm = "데이터가 없습니다."
    else:
        prpgtmthCodeNm = prpgtmthCodeNm.replace("\n", "")
    smellCode = json_dtl_data["response"]["body"]["item"]["smellCode"]
    if(smellCode == None):
        smellCode = "데이터가 없습니다."
    else:
        smellCode = smellCode.replace("\n", "")
    smellCodeNm = json_dtl_data["response"]["body"]["item"]["smellCodeNm"]
    if(smellCodeNm == None):
        smellCodeNm = "데이터가 없습니다."
    else:
        smellCodeNm = smellCodeNm.replace("\n", "")
    soilInfo = json_dtl_data["response"]["body"]["item"]["soilInfo"]
    if(soilInfo == None):
        soilInfo = "데이터가 없습니다."
    else:
        soilInfo = soilInfo.replace("\n", "")
    speclmanageInfo = json_dtl_data["response"]["body"]["item"]["speclmanageInfo"]
    if(speclmanageInfo == None):
        speclmanageInfo = "데이터가 없습니다."
    else:
        speclmanageInfo = speclmanageInfo.replace("\n", "")
    toxctyInfo = json_dtl_data["response"]["body"]["item"]["toxctyInfo"]
    if(toxctyInfo == None):
        toxctyInfo = "데이터가 없습니다."
    else:
        toxctyInfo = toxctyInfo.replace("\n", "")
    volmeBigInfo = json_dtl_data["response"]["body"]["item"]["volmeBigInfo"]
    if(volmeBigInfo == None):
        volmeBigInfo = "데이터가 없습니다."
    else:
        volmeBigInfo = volmeBigInfo.replace("\n", "")
    volmeMddlInfo = json_dtl_data["response"]["body"]["item"]["volmeMddlInfo"]
    if(volmeMddlInfo == None):
        volmeMddlInfo = "데이터가 없습니다."
    else:
        volmeMddlInfo = volmeMddlInfo.replace("\n", "")
    volmeSmallInfo = json_dtl_data["response"]["body"]["item"]["volmeSmallInfo"]
    if(volmeSmallInfo == None):
        volmeSmallInfo = "데이터가 없습니다."
    else:
        volmeSmallInfo = volmeSmallInfo.replace("\n", "")
    vrticlBigInfo = json_dtl_data["response"]["body"]["item"]["vrticlBigInfo"]
    if(vrticlBigInfo == None):
        vrticlBigInfo = "데이터가 없습니다."
    else:
        vrticlBigInfo  = vrticlBigInfo.replace("\n", "")
    vrticlMddlInfo = json_dtl_data["response"]["body"]["item"]["vrticlMddlInfo"]
    if(vrticlMddlInfo == None):
        vrticlMddlInfo = "데이터가 없습니다."
    else:
        vrticlMddlInfo  = vrticlMddlInfo.replace("\n", "")
    vrticlSmallInfo = json_dtl_data["response"]["body"]["item"]["vrticlSmallInfo"]
    if(vrticlSmallInfo == None):
        vrticlSmallInfo = "데이터가 없습니다."
    else:
        vrticlSmallInfo  = vrticlSmallInfo.replace("\n", "")
    watercycleAutumnCode = json_dtl_data["response"]["body"]["item"][
        "watercycleAutumnCode"
    ]
    if(watercycleAutumnCode == None):
        watercycleAutumnCode = "데이터가 없습니다."
    else:
        watercycleAutumnCode  = watercycleAutumnCode.replace("\n", "")
    watercycleAutumnCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleAutumnCodeNm"
    ]
    if(watercycleAutumnCodeNm == None):
        watercycleAutumnCodeNm = "데이터가 없습니다."
    else:
        watercycleAutumnCodeNm  = watercycleAutumnCodeNm.replace("\n", "")
    watercycleSprngCode = json_dtl_data["response"]["body"]["item"][
        "watercycleSprngCode"
    ]
    if(watercycleSprngCode == None):
        watercycleSprngCode = "데이터가 없습니다."
    else:
        watercycleSprngCode  = watercycleSprngCode.replace("\n", "")
    watercycleSprngCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleSprngCodeNm"
    ]
    if(watercycleSprngCodeNm == None):
        watercycleSprngCodeNm = "데이터가 없습니다."
    else:
        watercycleSprngCodeNm  = watercycleSprngCodeNm.replace("\n", "")
    watercycleSummerCode = json_dtl_data["response"]["body"]["item"][
        "watercycleSummerCode"
    ]
    if(watercycleSummerCode == None):
        watercycleSummerCode = "데이터가 없습니다."
    else:
        watercycleSummerCode  = watercycleSummerCode.replace("\n", "")
    watercycleSummerCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleSummerCodeNm"
    ]
    if(watercycleSummerCodeNm == None):
        watercycleSummerCodeNm = "데이터가 없습니다."
    else:
        watercycleSummerCodeNm  = watercycleSummerCodeNm.replace("\n", "")
    watercycleWinterCode = json_dtl_data["response"]["body"]["item"][
        "watercycleWinterCode"
    ]
    if(watercycleWinterCode == None):
        watercycleWinterCode = "데이터가 없습니다."
    else:
        watercycleWinterCode  = watercycleWinterCode.replace("\n", "")
    watercycleWinterCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleWinterCodeNm"
    ]
    if(watercycleWinterCodeNm == None):
        watercycleWinterCodeNm = "데이터가 없습니다."
    else:
        watercycleWinterCodeNm  = watercycleWinterCodeNm.replace("\n", "")
    widthBigInfo = json_dtl_data["response"]["body"]["item"]["widthBigInfo"]
    if(widthBigInfo == None):
        widthBigInfo = "데이터가 없습니다."
    else:
        widthBigInfo  = widthBigInfo.replace("\n", "")
    widthMddlInfo = json_dtl_data["response"]["body"]["item"]["widthMddlInfo"]
    if(widthMddlInfo == None):
        widthMddlInfo = "데이터가 없습니다."
    else:
        widthMddlInfo  = widthMddlInfo.replace("\n", "")
    widthSmallInfo = json_dtl_data["response"]["body"]["item"]["widthSmallInfo"]
    if(widthSmallInfo == None):
        widthSmallInfo = "데이터가 없습니다."
    else:
        widthSmallInfo  = widthSmallInfo.replace("\n", "")
    winterLwetTpCode = json_dtl_data["response"]["body"]["item"]["winterLwetTpCode"]
    if(winterLwetTpCode == None):
        winterLwetTpCode = "데이터가 없습니다."
    else:
        winterLwetTpCode  = winterLwetTpCode.replace("\n", "")

    plantDtl = Plant()
    plantDtl.add(
        cntntsNo,
        cntntsSj,
        adviseInfo,
        clCodeNm,
        distbNm,
        dlthtsCodeNm,
        dlthtsManageInfo,
        eclgyCodeNm,
        etcEraInfo,
        flclrCodeNm,
        flpodmtBigInfo,
        flpodmtMddlInfo,
        flpodmtSmallInfo,
        fmlCodeNm,
        fmlNm,
        fmldeSeasonCodeNm,
        fmldecolrCodeNm,
        fncltyInfo,
        frtlzrInfo,
        growthAraInfo,
        growthHgInfo,
        grwhTpCode,
        grwhTpCodeNm,
        grwhstleCodeNm,
        grwtveCode,
        grwtveCodeNm,
        hdCode,
        hgBigInfo,
        hgMddlInfo,
        hgSmallInfo,
        ignSeasonCodeNm,
        imageEvlLinkCours,
        indoorpsncpacompositionCodeNm,
        lefStleInfo,
        lefcolrCodeNm,
        lefmrkCodeNm,
        lighttdemanddoCodeNm,
        managedemanddoCode,
        managedemanddoCodeNm,
        managelevelCode,
        managelevelCodeNm,
        orgplceInfo,
        pcBigInfo,
        pcMddlInfo,
        pcSmallInfo,
        plntbneNm,
        plntzrNm,
        postngplaceCodeNm,
        prpgtEraInfo,
        prpgtmthCodeNm,
        smellCode,
        smellCodeNm,
        soilInfo,
        speclmanageInfo,
        toxctyInfo,
        volmeBigInfo,
        volmeMddlInfo,
        volmeSmallInfo,
        vrticlBigInfo,
        vrticlMddlInfo,
        vrticlSmallInfo,
        watercycleAutumnCode,
        watercycleAutumnCodeNm,
        watercycleSprngCode,
        watercycleSprngCodeNm,
        watercycleSummerCode,
        watercycleSummerCodeNm,
        watercycleWinterCode,
        watercycleWinterCodeNm,
        widthBigInfo,
        widthMddlInfo,
        widthSmallInfo,
        winterLwetTpCode,
    )
    plantDtlList.append(plantDtl)

# print(json_data['response']['body']['items']['item'][0]['cntntsNo'])

with open(
    "TIL/BSJ/dataProcess/plantDataXmltoJson/plantDtlList.txt", "w", encoding="utf-8"
) as f:
    for i in plantDtlList:
        # i.printDtl()
        i.filePrintDtl(f)

# for i in plantIdList:
#     i = int(i)
#     headers = {'Content-Type': 'application/json; charset=utf-8'}
#     params = {'apiKey' : '20220831J3W8AC80SV04RAAHSRCTPG', 'cntntsNo' : i}
#     response = requests.get('http://api.nongsaro.go.kr/service/garden/gardenDtl', headers=headers, params=params)
#     # with open("TIL/BSJ/dataProcess/plantDataXmltoJson/plantDtlData/plantDtl_{}.json".format(i), "w", encoding="utf-8") as f:
#     #     f.write(json.dumps(xmltodict.parse(response.content, encoding="utf-8"), ensure_ascii = False, indent=4))
