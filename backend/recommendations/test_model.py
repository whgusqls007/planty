# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AccountEmailaddress(models.Model):
    email = models.CharField(unique=True, max_length=254)
    verified = models.IntegerField()
    primary = models.IntegerField()
    user = models.ForeignKey('AccountsUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'account_emailaddress'


class AccountEmailconfirmation(models.Model):
    created = models.DateTimeField()
    sent = models.DateTimeField(blank=True, null=True)
    key = models.CharField(unique=True, max_length=64)
    email_address = models.ForeignKey(AccountEmailaddress, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'account_emailconfirmation'


class AccountsFollow(models.Model):
    id = models.BigAutoField(primary_key=True)
    date_created = models.DateTimeField()
    follow_user = models.ForeignKey('AccountsUser', models.DO_NOTHING)
    following_user = models.ForeignKey('AccountsUser', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'accounts_follow'


class AccountsLevel(models.Model):
    level_code = models.IntegerField(primary_key=True)
    threshold = models.IntegerField()
    level_name = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'accounts_level'


class AccountsUser(models.Model):
    id = models.BigAutoField(primary_key=True)
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()
    exp = models.IntegerField()
    point = models.IntegerField()
    profile_img = models.TextField()
    is_editor = models.IntegerField()
    is_private = models.IntegerField()
    plants_count = models.IntegerField()
    followers_count = models.IntegerField()
    follows_count = models.IntegerField()
    articles_count = models.IntegerField()
    comments_count = models.IntegerField()
    likes_count = models.IntegerField()
    date_of_birth = models.DateField(blank=True, null=True)
    age_group = models.CharField(max_length=10, blank=True, null=True)
    description = models.TextField()

    class Meta:
        managed = False
        db_table = 'accounts_user'


class AccountsUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)
    group = models.ForeignKey('AuthGroup', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'accounts_user_groups'
        unique_together = (('user', 'group'),)


class AccountsUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'accounts_user_user_permissions'
        unique_together = (('user', 'permission'),)


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.OneToOneField(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class DjangoSite(models.Model):
    domain = models.CharField(unique=True, max_length=100)
    name = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'django_site'


class FeedsFeed(models.Model):
    id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    date_created = models.DateTimeField()
    img_url = models.TextField(blank=True, null=True)
    comments_count = models.IntegerField()
    likes_count = models.IntegerField()
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'feeds_feed'


class FeedsFeedcomment(models.Model):
    id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    date_created = models.DateTimeField()
    feed = models.ForeignKey(FeedsFeed, models.DO_NOTHING)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'feeds_feedcomment'


class FeedsFeedlike(models.Model):
    id = models.BigAutoField(primary_key=True)
    date_created = models.DateTimeField()
    feed = models.ForeignKey(FeedsFeed, models.DO_NOTHING)
    like_user = models.ForeignKey(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'feeds_feedlike'


class MagazinesMagazine(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=15)
    sub_title = models.CharField(max_length=25)
    content = models.TextField()
    date_created = models.DateTimeField()
    comments_count = models.IntegerField()
    likes_count = models.IntegerField()
    img_url = models.TextField(blank=True, null=True)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'magazines_magazine'


class MagazinesMagazinecomment(models.Model):
    id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    date_created = models.DateTimeField()
    magazine = models.ForeignKey(MagazinesMagazine, models.DO_NOTHING)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'magazines_magazinecomment'


class MagazinesMagazinelike(models.Model):
    id = models.BigAutoField(primary_key=True)
    date_created = models.DateTimeField()
    like_user = models.ForeignKey(AccountsUser, models.DO_NOTHING)
    magazine = models.ForeignKey(MagazinesMagazine, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'magazines_magazinelike'


class MygardensDiary(models.Model):
    id = models.BigAutoField(primary_key=True)
    content = models.TextField()
    date_created = models.DateTimeField()
    diary_img = models.TextField(blank=True, null=True)
    my_garden = models.ForeignKey('MygardensMygarden', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'mygardens_diary'


class MygardensMygarden(models.Model):
    id = models.BigAutoField(primary_key=True)
    date_created = models.DateTimeField()
    date_grow = models.DateField(blank=True, null=True)
    watering_schedule = models.IntegerField(blank=True, null=True)
    recent_water = models.DateField(blank=True, null=True)
    diaries_count = models.IntegerField()
    img_url = models.TextField(blank=True, null=True)
    memo = models.TextField(blank=True, null=True)
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)
    plant = models.ForeignKey('Plant', models.DO_NOTHING)
    present = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'mygardens_mygarden'


class Plant(models.Model):
    id = models.BigAutoField(primary_key=True)
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
    imageurl = models.CharField(db_column='imageURL', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'plant'


class Plantkeyword(models.Model):
    id = models.OneToOneField(Plant, models.DO_NOTHING, db_column='id', primary_key=True)
    cntntsno = models.CharField(db_column='cntntsNo', max_length=255, blank=True, null=True)  # Field name made lowercase.
    cntntssj = models.CharField(db_column='cntntsSj', max_length=255, blank=True, null=True)  # Field name made lowercase.
    presentadequacy = models.IntegerField(db_column='presentAdequacy', blank=True, null=True)  # Field name made lowercase.
    aircleaning = models.IntegerField(db_column='airCleaning', blank=True, null=True)  # Field name made lowercase.
    particulatematter = models.IntegerField(db_column='particulateMatter', blank=True, null=True)  # Field name made lowercase.
    petsafety = models.IntegerField(db_column='petSafety', blank=True, null=True)  # Field name made lowercase.
    humidify = models.IntegerField(blank=True, null=True)
    toxcty = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'plantKeyword'


class Plantlike(models.Model):
    user = models.OneToOneField(AccountsUser, models.DO_NOTHING, primary_key=True)
    score = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'plantLike'


class RecommendationsUserkeywordcount(models.Model):
    id = models.BigAutoField(primary_key=True)
    pet_safe = models.IntegerField()
    humidify = models.IntegerField()
    pm_cleaning = models.IntegerField()
    beginner = models.IntegerField()
    unscented = models.IntegerField()
    hydroponics = models.IntegerField()
    low_growth_demand = models.IntegerField()
    low_light_demand = models.IntegerField()
    low_temp = models.IntegerField()
    user = models.ForeignKey(AccountsUser, models.DO_NOTHING)
    air_cleaning = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'recommendations_userkeywordcount'


class UpdateTable(models.Model):
    user_id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'update_table'
