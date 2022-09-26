from ftplib import all_errors
import json
import xmltodict
import requests
import pymysql

plantDtlList = []

connection = pymysql.connect(
    user="root",
    passwd="zeitfox",
    host="49.173.95.241",
    port=13306,
    db="homidu",
    charset="utf8",
)
cursor = connection.cursor(pymysql.cursors.DictCursor)

sql = """drop table if exists plant"""

cursor.execute(sql)
connection.commit()

# sql = """drop table if exists plantRecomm"""

# cursor.execute(sql)
# connection.commit()

sql = """create table if not exists plant (
    id int not null auto_increment primary key,
    cntntsNo varchar(255),
    cntntsSj varchar(255),
    adviseInfo varchar(255),
    clCodeNm varchar(255),
    dlthtsCodeNm varchar(255),
    dlthtsManageInfo varchar(255),
    eclgyCodeNm varchar(255),
    etcEraInfo varchar(255),
    flclrCodeNm varchar(255),
    fmlCodeNm varchar(255),
    fmldeSeasonCodeNm varchar(255),
    fmldecolrCodeNm varchar(255),
    fncltyInfo varchar(2000),
    frtlzrInfo varchar(255),
    growthAraInfo varchar(255),
    growthHgInfo varchar(255),
    grwhTpCodeNm varchar(255),
    grwhstleCodeNm varchar(255),
    grwtveCodeNm varchar(255),
    hdCodeNm varchar(255),
    ignSeasonCodeNm varchar(255),
    lefStleInfo varchar(255),
    lefcolrCodeNm varchar(255),
    lefmrkCodeNm varchar(255),
    lighttdemanddoCodeNm varchar(255),
    managedemanddoCodeNm varchar(255),
    managelevelCodeNm varchar(255),
    orgplceInfo varchar(255),
    postngplaceCodeNm varchar(255),
    prpgtEraInfo varchar(255),
    prpgtmthCodeNm varchar(255),
    smellCodeNm varchar(255),
    soilInfo varchar(255),
    speclmanageInfo varchar(2000),
    toxctyInfo varchar(255),
    watercycleAutumnCodeNm varchar(255),
    watercycleSprngCodeNm varchar(255),
    watercycleSummerCodeNm varchar(255),
    watercycleWinterCodeNm varchar(255),
    winterLwetTpCodeNm varchar(255),
    imageURL varchar(255)
)
"""
# sql = """create table if not exists plant (
#     id int not null auto_increment primary key,
#     cntntsNo varchar(255),
#     cntntsSj varchar(255),
#     presentAdequacy int,
#     airCleaning int,
#     particulateMatter int,
#     petSafety int
# )
# """

cursor.execute(sql)
connection.commit()

# sql = """create table if not exists plantRecomm (
#     id int not null auto_increment primary key,
#     cntntsNo varchar(255),
#     cntntsSj varchar(255),
#     presentAdequacy int,
#     airCleaning varchar(3),
#     particulateMatter varchar(3),
#     petSafety int,
#     scent int,
#     humidify int,
#     allergy int
# )
# """

cursor.execute(sql)
connection.commit()


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
        self.hdCodeNm = ""
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
        self.winterLwetTpCodeNm = ""
        self.presentAdequacy = 0
        self.airCleaning = ""
        self.particulateMatter = ""
        self.petSafety = 0
        self.scent = 0
        self.humidify = 0
        self.allergy = 0
        self.imageURL = ""

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
        hdCodeNm,
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
        winterLwetTpCodeNm,
        presentAdequacy,
        airCleaning,
        particulateMatter,
        petSafety,
        scent,
        humidify,
        allergy,
        imageURL
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
        self.hdCodeNm = hdCodeNm
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
        self.winterLwetTpCodeNm = winterLwetTpCodeNm
        self.presentAdequacy = presentAdequacy
        self.airCleaning = airCleaning
        self.particulateMatter = particulateMatter
        self.petSafety = petSafety
        self.scent = scent
        self.humidify =humidify
        self.allergy = allergy
        self.imageURL = imageURL

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
            self.hdCodeNm,
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
            self.winterLwetTpCodeNm,
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
            # + self.hdCode
            # + "    "
            + self.hdCodeNm
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
            # + self.winterLwetTpCode
            # + "    "
            + self.winterLwetTpCodeNm
            + "    "
            +self.imageURL
            + "\n"
        )

    def dbinsert(self, i):
        sql = f"insert into plant (id, cntntsNo, cntntsSj,adviseInfo,clCodeNm,dlthtsCodeNm,dlthtsManageInfo,eclgyCodeNm,etcEraInfo,flclrCodeNm,fmlCodeNm,fmldeSeasonCodeNm,fmldecolrCodeNm,fncltyInfo,frtlzrInfo,growthAraInfo,growthHgInfo,grwhTpCodeNm,grwhstleCodeNm,grwtveCodeNm,hdCodeNm,ignSeasonCodeNm,lefStleInfo,lefcolrCodeNm,lefmrkCodeNm,lighttdemanddoCodeNm,managedemanddoCodeNm,managelevelCodeNm,orgplceInfo,postngplaceCodeNm,prpgtEraInfo,prpgtmthCodeNm,smellCodeNm,soilInfo,speclmanageInfo,toxctyInfo,watercycleAutumnCodeNm,watercycleSprngCodeNm,watercycleSummerCodeNm,watercycleWinterCodeNm,winterLwetTpCodeNm, imageURL) values({i}, '{self.cntntsNo}','{self.cntntsSj}','{self.adviseInfo}','{self.clCodeNm}','{self.dlthtsCodeNm}','{self.dlthtsManageInfo}','{self.eclgyCodeNm}','{self.etcEraInfo}','{self.flclrCodeNm}','{self.fmlCodeNm}','{self.fmldeSeasonCodeNm}','{self.fmldecolrCodeNm}','{self.fncltyInfo}','{self.frtlzrInfo}','{self.growthAraInfo}','{self.growthHgInfo}','{self.grwhTpCodeNm}','{self.grwhstleCodeNm}','{self.grwtveCodeNm}','{self.hdCodeNm}','{self.ignSeasonCodeNm}','{self.lefStleInfo}','{self.lefcolrCodeNm}','{self.lefmrkCodeNm}','{self.lighttdemanddoCodeNm}','{self.managedemanddoCodeNm}','{self.managelevelCodeNm}','{self.orgplceInfo}','{self.postngplaceCodeNm}','{self.prpgtEraInfo}','{self.prpgtmthCodeNm}','{self.smellCodeNm}','{self.soilInfo}','{self.speclmanageInfo}','{self.toxctyInfo}','{self.watercycleAutumnCodeNm}','{self.watercycleSprngCodeNm}','{self.watercycleSummerCodeNm}','{self.watercycleWinterCodeNm}','{self.winterLwetTpCodeNm}','{self.imageURL}')"
        # sql = f"insert into plant (id, cntntsNo, cntntsSj, presentAdequacy, airCleaning, particulateMatter, petSafety) values({i}, '{self.cntntsNo}','{self.cntntsSj}','{self.presentAdequacy}','{self.airCleaning}','{self.particulateMatter}','{self.petSafety}')"
        cursor.execute(sql)
        connection.commit()

        # sql = f"insert into plantRecomm (id, cntntsNo, cntntsSj, presentAdequacy, airCleaning, particulateMatter, petSafety, scent, humidify, allergy) values({i}, '{self.cntntsNo}','{self.cntntsSj}',0,'{self.airCleaning}','{self.particulateMatter}',0,0,0,0)"
        # cursor.execute(sql)
        # connection.commit()


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
    "hdCodeNm",
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
    "winterLwetTpCodeNm",
    "presentAdequacy",
    "airCleaning",
    "particulateMatter",
    "petSafety",
    "scent",
    "humidify",
    "allergy",
    "imageURL",
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

def stringCorrection(str):
        if str == None:
            return "데이터가 없습니다."
        else:
            return str.replace("\n", "").replace("'", "*")

for i in range(plantLength):
    i = int(i)
    cntntsNo = json_data["response"]["body"]["items"]["item"][i]["cntntsNo"]
    cntntsSj = json_data["response"]["body"]["items"]["item"][i]["cntntsSj"]
    cntntsSj = stringCorrection(cntntsSj)

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
    adviseInfo = stringCorrection(adviseInfo)
    clCodeNm = json_dtl_data["response"]["body"]["item"]["clCodeNm"]
    clCodeNm = stringCorrection(clCodeNm)
    distbNm = json_dtl_data["response"]["body"]["item"]["distbNm"]
    distbNm = stringCorrection(distbNm)
    dlthtsCodeNm = json_dtl_data["response"]["body"]["item"]["dlthtsCodeNm"]
    dlthtsCodeNm = stringCorrection(dlthtsCodeNm)
    dlthtsManageInfo = json_dtl_data["response"]["body"]["item"]["dlthtsManageInfo"]
    dlthtsManageInfo = stringCorrection(dlthtsManageInfo)
    eclgyCodeNm = json_dtl_data["response"]["body"]["item"]["eclgyCodeNm"]
    eclgyCodeNm = stringCorrection(eclgyCodeNm)
    etcEraInfo = json_dtl_data["response"]["body"]["item"]["etcEraInfo"]
    etcEraInfo = stringCorrection(etcEraInfo)
    flclrCodeNm = json_dtl_data["response"]["body"]["item"]["flclrCodeNm"]
    flclrCodeNm = stringCorrection(flclrCodeNm)
    flpodmtBigInfo = json_dtl_data["response"]["body"]["item"]["flpodmtBigInfo"]
    flpodmtBigInfo = stringCorrection(flpodmtBigInfo)
    flpodmtMddlInfo = json_dtl_data["response"]["body"]["item"]["flpodmtMddlInfo"]
    flpodmtMddlInfo = stringCorrection(flpodmtMddlInfo)
    flpodmtSmallInfo = json_dtl_data["response"]["body"]["item"]["flpodmtSmallInfo"]
    flpodmtSmallInfo = stringCorrection(flpodmtSmallInfo)
    fmlCodeNm = json_dtl_data["response"]["body"]["item"]["fmlCodeNm"]
    fmlCodeNm = stringCorrection(fmlCodeNm)
    fmlNm = json_dtl_data["response"]["body"]["item"]["fmlNm"]
    fmlNm = stringCorrection(fmlNm)
    fmldeSeasonCodeNm = json_dtl_data["response"]["body"]["item"]["fmldeSeasonCodeNm"]
    fmldeSeasonCodeNm = stringCorrection(fmldeSeasonCodeNm)
    fmldecolrCodeNm = json_dtl_data["response"]["body"]["item"]["fmldecolrCodeNm"]
    fmldecolrCodeNm = stringCorrection(fmldecolrCodeNm)
    fncltyInfo = json_dtl_data["response"]["body"]["item"]["fncltyInfo"]
    fncltyInfo = stringCorrection(fncltyInfo)
    frtlzrInfo = json_dtl_data["response"]["body"]["item"]["frtlzrInfo"]
    frtlzrInfo = stringCorrection(frtlzrInfo)
    growthAraInfo = json_dtl_data["response"]["body"]["item"]["growthAraInfo"]
    growthAraInfo = stringCorrection(growthAraInfo)
    growthHgInfo = json_dtl_data["response"]["body"]["item"]["growthHgInfo"]
    growthHgInfo = stringCorrection(growthHgInfo)
    grwhTpCode = json_dtl_data["response"]["body"]["item"]["grwhTpCode"]
    grwhTpCode = stringCorrection(grwhTpCode)
    grwhTpCodeNm = json_dtl_data["response"]["body"]["item"]["grwhTpCodeNm"]
    grwhTpCodeNm = stringCorrection(grwhTpCodeNm)
    grwhstleCodeNm = json_dtl_data["response"]["body"]["item"]["grwhstleCodeNm"]
    grwhstleCodeNm = stringCorrection(grwhstleCodeNm)
    grwtveCode = json_dtl_data["response"]["body"]["item"]["grwtveCode"]
    grwtveCode = stringCorrection(grwtveCode)
    grwtveCodeNm = json_dtl_data["response"]["body"]["item"]["grwtveCodeNm"]
    grwtveCodeNm = stringCorrection(grwtveCodeNm)
    hdCode = json_dtl_data["response"]["body"]["item"]["hdCode"]
    hdCode = stringCorrection(hdCode)
    hdCodeNm = json_dtl_data["response"]["body"]["item"]["hdCodeNm"]
    hdCodeNm = stringCorrection(hdCodeNm)
    hgBigInfo = json_dtl_data["response"]["body"]["item"]["hgBigInfo"]
    hgBigInfo = stringCorrection(hgBigInfo)
    hgMddlInfo = json_dtl_data["response"]["body"]["item"]["hgMddlInfo"]
    hgMddlInfo = stringCorrection(hgMddlInfo)
    hgSmallInfo = json_dtl_data["response"]["body"]["item"]["hgSmallInfo"]
    hgSmallInfo = stringCorrection(hgSmallInfo)
    ignSeasonCodeNm = json_dtl_data["response"]["body"]["item"]["ignSeasonCodeNm"]
    ignSeasonCodeNm = stringCorrection(ignSeasonCodeNm)
    imageEvlLinkCours = json_dtl_data["response"]["body"]["item"]["imageEvlLinkCours"]
    imageEvlLinkCours = stringCorrection(imageEvlLinkCours)
    indoorpsncpacompositionCodeNm = json_dtl_data["response"]["body"]["item"][
        "indoorpsncpacompositionCodeNm"
    ]
    indoorpsncpacompositionCodeNm = stringCorrection(indoorpsncpacompositionCodeNm)
    lefStleInfo = json_dtl_data["response"]["body"]["item"]["lefStleInfo"]
    lefStleInfo = stringCorrection(lefStleInfo)
    lefcolrCodeNm = json_dtl_data["response"]["body"]["item"]["lefcolrCodeNm"]
    lefcolrCodeNm = stringCorrection(lefcolrCodeNm)
    lefmrkCodeNm = json_dtl_data["response"]["body"]["item"]["lefmrkCodeNm"]
    lefmrkCodeNm = stringCorrection(lefmrkCodeNm)
    lighttdemanddoCodeNm = json_dtl_data["response"]["body"]["item"][
        "lighttdemanddoCodeNm"
    ]
    lighttdemanddoCodeNm = stringCorrection(lighttdemanddoCodeNm)
    managedemanddoCode = json_dtl_data["response"]["body"]["item"]["managedemanddoCode"]
    managedemanddoCode = stringCorrection(managedemanddoCode)
    managedemanddoCodeNm = json_dtl_data["response"]["body"]["item"][
        "managedemanddoCodeNm"
    ]
    managedemanddoCodeNm = stringCorrection(managedemanddoCodeNm)
    managelevelCode = json_dtl_data["response"]["body"]["item"]["managelevelCode"]
    managelevelCode = stringCorrection(managelevelCode)
    managelevelCodeNm = json_dtl_data["response"]["body"]["item"]["managelevelCodeNm"]
    managelevelCodeNm = stringCorrection(managelevelCodeNm)
    orgplceInfo = json_dtl_data["response"]["body"]["item"]["orgplceInfo"]
    orgplceInfo = stringCorrection(orgplceInfo)
    pcBigInfo = json_dtl_data["response"]["body"]["item"]["pcBigInfo"]
    pcBigInfo = stringCorrection(pcBigInfo)
    pcMddlInfo = json_dtl_data["response"]["body"]["item"]["pcMddlInfo"]
    pcMddlInfo = stringCorrection(pcMddlInfo)
    pcSmallInfo = json_dtl_data["response"]["body"]["item"]["pcSmallInfo"]
    pcSmallInfo = stringCorrection(pcSmallInfo)
    plntbneNm = json_dtl_data["response"]["body"]["item"]["plntbneNm"]
    plntbneNm = stringCorrection(plntbneNm)
    plntzrNm = json_dtl_data["response"]["body"]["item"]["plntzrNm"]
    plntzrNm = stringCorrection(plntzrNm)
    postngplaceCodeNm = json_dtl_data["response"]["body"]["item"]["postngplaceCodeNm"]
    postngplaceCodeNm = stringCorrection(postngplaceCodeNm)
    prpgtEraInfo = json_dtl_data["response"]["body"]["item"]["prpgtEraInfo"]
    prpgtEraInfo = stringCorrection(prpgtEraInfo)
    prpgtmthCodeNm = json_dtl_data["response"]["body"]["item"]["prpgtmthCodeNm"]
    prpgtmthCodeNm = stringCorrection(prpgtmthCodeNm)
    smellCode = json_dtl_data["response"]["body"]["item"]["smellCode"]
    smellCode = stringCorrection(smellCode)
    smellCodeNm = json_dtl_data["response"]["body"]["item"]["smellCodeNm"]
    smellCodeNm = stringCorrection(smellCodeNm)
    soilInfo = json_dtl_data["response"]["body"]["item"]["soilInfo"]
    soilInfo = stringCorrection(soilInfo)
    speclmanageInfo = json_dtl_data["response"]["body"]["item"]["speclmanageInfo"]
    speclmanageInfo = stringCorrection(speclmanageInfo)
    toxctyInfo = json_dtl_data["response"]["body"]["item"]["toxctyInfo"]
    toxctyInfo = stringCorrection(toxctyInfo)
    volmeBigInfo = json_dtl_data["response"]["body"]["item"]["volmeBigInfo"]
    volmeBigInfo = stringCorrection(volmeBigInfo)
    volmeMddlInfo = json_dtl_data["response"]["body"]["item"]["volmeMddlInfo"]
    volmeMddlInfo = stringCorrection(volmeMddlInfo)
    volmeSmallInfo = json_dtl_data["response"]["body"]["item"]["volmeSmallInfo"]
    volmeSmallInfo = stringCorrection(volmeSmallInfo)
    vrticlBigInfo = json_dtl_data["response"]["body"]["item"]["vrticlBigInfo"]
    vrticlBigInfo = stringCorrection(vrticlBigInfo)
    vrticlMddlInfo = json_dtl_data["response"]["body"]["item"]["vrticlMddlInfo"]
    vrticlMddlInfo = stringCorrection(vrticlMddlInfo)
    vrticlSmallInfo = json_dtl_data["response"]["body"]["item"]["vrticlSmallInfo"]
    vrticlSmallInfo = stringCorrection(vrticlSmallInfo)
    watercycleAutumnCode = json_dtl_data["response"]["body"]["item"][
        "watercycleAutumnCode"
    ]
    watercycleAutumnCode = stringCorrection(watercycleAutumnCode)
    watercycleAutumnCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleAutumnCodeNm"
    ]
    watercycleAutumnCodeNm = stringCorrection(watercycleAutumnCodeNm)
    watercycleSprngCode = json_dtl_data["response"]["body"]["item"][
        "watercycleSprngCode"
    ]
    watercycleSprngCode = stringCorrection(watercycleSprngCode)
    watercycleSprngCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleSprngCodeNm"
    ]
    watercycleSprngCodeNm = stringCorrection(watercycleSprngCodeNm)
    watercycleSummerCode = json_dtl_data["response"]["body"]["item"][
        "watercycleSummerCode"
    ]
    watercycleSummerCode = stringCorrection(watercycleSummerCode)
    watercycleSummerCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleSummerCodeNm"
    ]
    watercycleSummerCodeNm = stringCorrection(watercycleSummerCodeNm)
    watercycleWinterCode = json_dtl_data["response"]["body"]["item"][
        "watercycleWinterCode"
    ]
    watercycleWinterCode = stringCorrection(watercycleWinterCode)
    watercycleWinterCodeNm = json_dtl_data["response"]["body"]["item"][
        "watercycleWinterCodeNm"
    ]
    watercycleWinterCodeNm = stringCorrection(watercycleWinterCodeNm)
    widthBigInfo = json_dtl_data["response"]["body"]["item"]["widthBigInfo"]
    widthBigInfo = stringCorrection(widthBigInfo)
    widthMddlInfo = json_dtl_data["response"]["body"]["item"]["widthMddlInfo"]
    widthMddlInfo = stringCorrection(widthMddlInfo)
    widthSmallInfo = json_dtl_data["response"]["body"]["item"]["widthSmallInfo"]
    widthSmallInfo = stringCorrection(widthSmallInfo)
    winterLwetTpCode = json_dtl_data["response"]["body"]["item"]["winterLwetTpCode"]
    winterLwetTpCode = stringCorrection(winterLwetTpCode)
    winterLwetTpCodeNm = json_dtl_data["response"]["body"]["item"]["winterLwetTpCodeNm"]
    winterLwetTpCodeNm = stringCorrection(winterLwetTpCodeNm)
    presentAdequacy = 0
    if(adviseInfo.__contains__("공기정화") or fncltyInfo.__contains__("공기정화") or speclmanageInfo.__contains__("공기정화") or adviseInfo.__contains__("공기 정화") or fncltyInfo.__contains__("공기 정화") or speclmanageInfo.__contains__("공기 정화")):
        airCleaning = "Yes"
    else:
        airCleaning = "No"
    if(adviseInfo.__contains__("미세먼지") or fncltyInfo.__contains__("미세먼지") or speclmanageInfo.__contains__("미세먼지")):
        particulateMatter = "Yes"
    else:
        particulateMatter = "No"
    if(adviseInfo.__contains__("애완동물") or fncltyInfo.__contains__("애완동물") or speclmanageInfo.__contains__("애완동물") or adviseInfo.__contains__("애완 동물") or fncltyInfo.__contains__("애완 동물") or speclmanageInfo.__contains__("애완 동물")):
        petSafety = -1
    else:
        petSafety = 0
    scent = 0
    humidify = 0
    allergy = 0
    imageURL = f"http://www.nongsaro.go.kr/cms_contents/301/{cntntsNo}_MF_ATTACH_01.jpg"

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
        hdCodeNm,
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
        winterLwetTpCodeNm,
        presentAdequacy,
        airCleaning,
        particulateMatter,
        petSafety,
        scent,
        humidify,
        allergy,
        imageURL,
    )
    plantDtlList.append(plantDtl)

# print(json_data['response']['body']['items']['item'][0]['cntntsNo'])

with open(
    "TIL/BSJ/dataProcess/plantDataXmltoJson/plantDtlList.txt", "w", encoding="utf-8"
) as f:
    j = 0
    for i in plantDtlList:
        # i.printDtl()
        i.filePrintDtl(f)
        if j == 0:
            j += 1
            continue
        i.dbinsert(j)
        j += 1

# for i in plantIdList:
#     i = int(i)
#     headers = {'Content-Type': 'application/json; charset=utf-8'}
#     params = {'apiKey' : '20220831J3W8AC80SV04RAAHSRCTPG', 'cntntsNo' : i}
#     response = requests.get('http://api.nongsaro.go.kr/service/garden/gardenDtl', headers=headers, params=params)
#     # with open("TIL/BSJ/dataProcess/plantDataXmltoJson/plantDtlData/plantDtl_{}.json".format(i), "w", encoding="utf-8") as f:
#     #     f.write(json.dumps(xmltodict.parse(response.content, encoding="utf-8"), ensure_ascii = False, indent=4))
