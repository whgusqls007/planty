# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Plant(models.Model):
    cntntsno = models.CharField(
        db_column='cntntsNo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='식물 번호'
    )  
    cntntssj = models.CharField(
        db_column='cntntsSj', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='식물 이름'
    )  
    adviseinfo = models.CharField(
        db_column='adviseInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='조언 정보'
    )  
    clcodenm = models.CharField(
        db_column='clCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='식물 분류'
    )  
    dlthtscodenm = models.CharField(
        db_column='dlthtsCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='병충해'
    )  
    dlthtsmanageinfo = models.CharField(
        db_column='dlthtsManageInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='병충해 관리법'
    )  
    eclgycodenm = models.CharField(
        db_column='eclgyCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생태 코드'
    )  
    etcerainfo = models.CharField(
        db_column='etcEraInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='기타 시기'
    )  
    flclrcodenm = models.CharField(
        db_column='flclrCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='꽃 색상'
    )  
    fmlcodenm = models.CharField(
        db_column='fmlCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과 코드명'
    )  
    fmldeseasoncodenm = models.CharField(
        db_column='fmldeSeasonCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과일 열리는 계절'
    )  
    fmldecolrcodenm = models.CharField(
        db_column='fmldecolrCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과일 색'
    )  
    fncltyinfo = models.CharField(
        db_column='fncltyInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='과일 '
    )  
    frtlzrinfo = models.CharField(
        db_column='frtlzrInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='비료 요구 여부'
    )  
    growtharainfo = models.CharField(
        db_column='growthAraInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='성장 넓이 정보'
    )  
    growthhginfo = models.CharField(
        db_column='growthHgInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='성장 높이 정보'
    )  
    grwhtpcodenm = models.CharField(
        db_column='grwhTpCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생육 온도'
    )  
    grwhstlecodenm = models.CharField(
        db_column='grwhstleCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생육 형태'
    )  
    grwtvecodenm = models.CharField(
        db_column='grwtveCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='생장 속도'
    )  
    hdcodenm = models.CharField(
        db_column='hdCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='적정 습도'
    )  
    ignseasoncodenm = models.CharField(
        db_column='ignSeasonCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='꽃 피는 계절'
    )  
    lefstleinfo = models.CharField(
        db_column='lefStleInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='잎 모양새'
    )  
    lefcolrcodenm = models.CharField(
        db_column='lefcolrCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='잎 색상'
    )  
    lefmrkcodenm = models.CharField(
        db_column='lefmrkCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='잎 무늬'
    )  
    lighttdemanddocodenm = models.CharField(
        db_column='lighttdemanddoCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='광도'
    )  
    managedemanddocodenm = models.CharField(
        db_column='managedemanddoCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='관리 요구도'
    )  
    managelevelcodenm = models.CharField(
        db_column='managelevelCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='키우기 난이도'
    )  
    orgplceinfo = models.CharField(
        db_column='orgplceInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='원산지'
    )  
    postngplacecodenm = models.CharField(
        db_column='postngplaceCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='추천 배치 장소'
    )  
    prpgterainfo = models.CharField(
        db_column='prpgtEraInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='번식 시기'
    )  
    prpgtmthcodenm = models.CharField(
        db_column='prpgtmthCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='번식 방법'
    )  
    smellcodenm = models.CharField(
        db_column='smellCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='냄새 정도'
    )  
    soilinfo = models.CharField(
        db_column='soilInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='추천 토양'
    )  
    speclmanageinfo = models.CharField(
        db_column='speclmanageInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='특별 관리 정보'
    )  
    toxctyinfo = models.CharField(
        db_column='toxctyInfo', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='독성'
    )  
    watercycleautumncodenm = models.CharField(
        db_column='watercycleAutumnCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='가을 물주기'
    )  
    watercyclesprngcodenm = models.CharField(
        db_column='watercycleSprngCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='봄 물주기'
    )  
    watercyclesummercodenm = models.CharField(
        db_column='watercycleSummerCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='여름 물주기'
    )  
    watercyclewintercodenm = models.CharField(
        db_column='watercycleWinterCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='겨울 물주기'
    )  
    winterlwettpcodenm = models.CharField(
        db_column='winterLwetTpCodeNm', 
        max_length=255, 
        blank=True, 
        null=True,
        verbose_name='겨울 최저 온도'
    ) 
    imgurl = models.CharField(
        db_column='imageurl',
        max_length=255,
        blank=True,
        null=True,
        verbose_name='식물 사진'
    )

    class Meta:
        managed = False
        db_table = 'plant'


class Plantrecomm(models.Model):
    cntntsno = models.CharField(db_column='cntntsNo', max_length=255, blank=True, null=True)  
    cntntssj = models.CharField(db_column='cntntsSj', max_length=255, blank=True, null=True)  
    presentadequacy = models.IntegerField(db_column='presentAdequacy', blank=True, null=True)  
    aircleaning = models.CharField(db_column='airCleaning', max_length=3, blank=True, null=True)  
    particulatematter = models.CharField(db_column='particulateMatter', max_length=3, blank=True, null=True)  
    petsafety = models.IntegerField(db_column='petSafety', blank=True, null=True)  
    scent = models.IntegerField(blank=True, null=True)
    humidify = models.IntegerField(blank=True, null=True)
    allergy = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'plantRecomm'
