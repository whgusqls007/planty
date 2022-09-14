# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Plant(models.Model):
    cntntsno = models.CharField(db_column='cntntsNo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    cntntssj = models.CharField(db_column='cntntsSj', max_length=255, blank=True, null=True)  # Field name made lowercase.
    adviseinfo = models.CharField(db_column='adviseInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    clcodenm = models.CharField(db_column='clCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    dlthtscodenm = models.CharField(db_column='dlthtsCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    dlthtsmanageinfo = models.CharField(db_column='dlthtsManageInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    eclgycodenm = models.CharField(db_column='eclgyCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    etcerainfo = models.CharField(db_column='etcEraInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    flclrcodenm = models.CharField(db_column='flclrCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    fmlcodenm = models.CharField(db_column='fmlCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    fmldeseasoncodenm = models.CharField(db_column='fmldeSeasonCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    fmldecolrcodenm = models.CharField(db_column='fmldecolrCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    fncltyinfo = models.CharField(db_column='fncltyInfo', max_length=2000, blank=True, null=True)  # Field name made lowercase.
    frtlzrinfo = models.CharField(db_column='frtlzrInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    growtharainfo = models.CharField(db_column='growthAraInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    growthhginfo = models.CharField(db_column='growthHgInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    grwhtpcodenm = models.CharField(db_column='grwhTpCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    grwhstlecodenm = models.CharField(db_column='grwhstleCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    grwtvecodenm = models.CharField(db_column='grwtveCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    hdcodenm = models.CharField(db_column='hdCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    ignseasoncodenm = models.CharField(db_column='ignSeasonCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    lefstleinfo = models.CharField(db_column='lefStleInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    lefcolrcodenm = models.CharField(db_column='lefcolrCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    lefmrkcodenm = models.CharField(db_column='lefmrkCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    lighttdemanddocodenm = models.CharField(db_column='lighttdemanddoCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    managedemanddocodenm = models.CharField(db_column='managedemanddoCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    managelevelcodenm = models.CharField(db_column='managelevelCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    orgplceinfo = models.CharField(db_column='orgplceInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    postngplacecodenm = models.CharField(db_column='postngplaceCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    prpgterainfo = models.CharField(db_column='prpgtEraInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    prpgtmthcodenm = models.CharField(db_column='prpgtmthCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    smellcodenm = models.CharField(db_column='smellCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    soilinfo = models.CharField(db_column='soilInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    speclmanageinfo = models.CharField(db_column='speclmanageInfo', max_length=2000, blank=True, null=True)  # Field name made lowercase.
    toxctyinfo = models.CharField(db_column='toxctyInfo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    watercycleautumncodenm = models.CharField(db_column='watercycleAutumnCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    watercyclesprngcodenm = models.CharField(db_column='watercycleSprngCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    watercyclesummercodenm = models.CharField(db_column='watercycleSummerCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    watercyclewintercodenm = models.CharField(db_column='watercycleWinterCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.
    winterlwettpcodenm = models.CharField(db_column='winterLwetTpCodeNm', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'plant'


class Plantrecomm(models.Model):
    cntntsno = models.CharField(db_column='cntntsNo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    cntntssj = models.CharField(db_column='cntntsSj', max_length=255, blank=True, null=True)  # Field name made lowercase.
    presentadequacy = models.IntegerField(db_column='presentAdequacy', blank=True, null=True)  # Field name made lowercase.
    aircleaning = models.CharField(db_column='airCleaning', max_length=3, blank=True, null=True)  # Field name made lowercase.
    particulatematter = models.CharField(db_column='particulateMatter', max_length=3, blank=True, null=True)  # Field name made lowercase.
    petsafety = models.IntegerField(db_column='petSafety', blank=True, null=True)  # Field name made lowercase.
    scent = models.IntegerField(blank=True, null=True)
    humidify = models.IntegerField(blank=True, null=True)
    allergy = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'plantRecomm'
