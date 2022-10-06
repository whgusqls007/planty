CREATE DATABASE  IF NOT EXISTS `homidu` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `homidu`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: j7e103.p.ssafy.io    Database: homidu
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_emailaddress`
--

DROP TABLE IF EXISTS `account_emailaddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_emailaddress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(254) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `primary` tinyint(1) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `account_emailaddress_user_id_2c513194_fk_accounts_user_id` (`user_id`),
  CONSTRAINT `account_emailaddress_user_id_2c513194_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `account_emailconfirmation`
--

DROP TABLE IF EXISTS `account_emailconfirmation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_emailconfirmation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created` datetime(6) NOT NULL,
  `sent` datetime(6) DEFAULT NULL,
  `key` varchar(64) NOT NULL,
  `email_address_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`key`),
  KEY `account_emailconfirm_email_address_id_5b7f8c58_fk_account_e` (`email_address_id`),
  CONSTRAINT `account_emailconfirm_email_address_id_5b7f8c58_fk_account_e` FOREIGN KEY (`email_address_id`) REFERENCES `account_emailaddress` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `accounts_follow`
--

DROP TABLE IF EXISTS `accounts_follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_follow` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) NOT NULL,
  `follow_user_id` bigint NOT NULL,
  `following_user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_follow_follow_user_id_a19eb11f_fk_accounts_user_id` (`follow_user_id`),
  KEY `accounts_follow_following_user_id_3a379419_fk_accounts_user_id` (`following_user_id`),
  CONSTRAINT `accounts_follow_follow_user_id_a19eb11f_fk_accounts_user_id` FOREIGN KEY (`follow_user_id`) REFERENCES `accounts_user` (`id`),
  CONSTRAINT `accounts_follow_following_user_id_3a379419_fk_accounts_user_id` FOREIGN KEY (`following_user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `accounts_level`
--

DROP TABLE IF EXISTS `accounts_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_level` (
  `level_code` int NOT NULL,
  `threshold` int NOT NULL,
  `level_name` varchar(10) NOT NULL,
  PRIMARY KEY (`level_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `accounts_user`
--

DROP TABLE IF EXISTS `accounts_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `exp` int NOT NULL,
  `profile_img` longtext NOT NULL,
  `is_editor` tinyint(1) NOT NULL,
  `is_private` tinyint(1) NOT NULL,
  `plants_count` int NOT NULL,
  `followers_count` int NOT NULL,
  `follows_count` int NOT NULL,
  `articles_count` int NOT NULL,
  `comments_count` int NOT NULL,
  `likes_count` int NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `age_group` varchar(10) DEFAULT NULL,
  `description` longtext NOT NULL DEFAULT (_utf8mb3'한줄 소개가 없습니다.'),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `accounts_user_groups`
--

DROP TABLE IF EXISTS `accounts_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accounts_user_groups_user_id_group_id_59c0b32f_uniq` (`user_id`,`group_id`),
  KEY `accounts_user_groups_group_id_bd11a704_fk_auth_group_id` (`group_id`),
  CONSTRAINT `accounts_user_groups_group_id_bd11a704_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `accounts_user_groups_user_id_52b62117_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `accounts_user_user_permissions`
--

DROP TABLE IF EXISTS `accounts_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accounts_user_user_permi_user_id_permission_id_2ab516c2_uniq` (`user_id`,`permission_id`),
  KEY `accounts_user_user_p_permission_id_113bb443_fk_auth_perm` (`permission_id`),
  CONSTRAINT `accounts_user_user_p_permission_id_113bb443_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `accounts_user_user_p_user_id_e4f0a161_fk_accounts_` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `authtoken_token`
--

DROP TABLE IF EXISTS `authtoken_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`key`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `authtoken_token_user_id_35299eff_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_accounts_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `django_site`
--

DROP TABLE IF EXISTS `django_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_site` (
  `id` int NOT NULL AUTO_INCREMENT,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_site_domain_a2e37b91_uniq` (`domain`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `feeds_feed`
--

DROP TABLE IF EXISTS `feeds_feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feeds_feed` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `img_url` longtext,
  `comments_count` int NOT NULL,
  `likes_count` int NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `feeds_feed_user_id_f07992c0_fk_accounts_user_id` (`user_id`),
  CONSTRAINT `feeds_feed_user_id_f07992c0_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `feeds_feedcomment`
--

DROP TABLE IF EXISTS `feeds_feedcomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feeds_feedcomment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `feed_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `feeds_feedcomment_feed_id_b3934e01_fk_feeds_feed_id` (`feed_id`),
  KEY `feeds_feedcomment_user_id_7bd0116b_fk_accounts_user_id` (`user_id`),
  CONSTRAINT `feeds_feedcomment_feed_id_b3934e01_fk_feeds_feed_id` FOREIGN KEY (`feed_id`) REFERENCES `feeds_feed` (`id`),
  CONSTRAINT `feeds_feedcomment_user_id_7bd0116b_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `feeds_feedlike`
--

DROP TABLE IF EXISTS `feeds_feedlike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feeds_feedlike` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) NOT NULL,
  `feed_id` bigint NOT NULL,
  `like_user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `feeds_feedlike_feed_id_5acbed08_fk_feeds_feed_id` (`feed_id`),
  KEY `feeds_feedlike_like_user_id_6fdc12a4_fk_accounts_user_id` (`like_user_id`),
  CONSTRAINT `feeds_feedlike_feed_id_5acbed08_fk_feeds_feed_id` FOREIGN KEY (`feed_id`) REFERENCES `feeds_feed` (`id`),
  CONSTRAINT `feeds_feedlike_like_user_id_6fdc12a4_fk_accounts_user_id` FOREIGN KEY (`like_user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `magazines_magazine`
--

DROP TABLE IF EXISTS `magazines_magazine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magazines_magazine` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(15) NOT NULL,
  `sub_title` varchar(25) NOT NULL,
  `content` longtext NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `comments_count` int NOT NULL,
  `likes_count` int NOT NULL,
  `img_url` longtext,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `magazines_magazine_user_id_e0a5d5c9_fk_accounts_user_id` (`user_id`),
  CONSTRAINT `magazines_magazine_user_id_e0a5d5c9_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `magazines_magazinecomment`
--

DROP TABLE IF EXISTS `magazines_magazinecomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magazines_magazinecomment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `magazine_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `magazines_magazineco_magazine_id_f61ff5bd_fk_magazines` (`magazine_id`),
  KEY `magazines_magazinecomment_user_id_4983cf1e_fk_accounts_user_id` (`user_id`),
  CONSTRAINT `magazines_magazineco_magazine_id_f61ff5bd_fk_magazines` FOREIGN KEY (`magazine_id`) REFERENCES `magazines_magazine` (`id`),
  CONSTRAINT `magazines_magazinecomment_user_id_4983cf1e_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `magazines_magazinelike`
--

DROP TABLE IF EXISTS `magazines_magazinelike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `magazines_magazinelike` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) NOT NULL,
  `like_user_id` bigint NOT NULL,
  `magazine_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `magazines_magazinelike_like_user_id_27595ced_fk_accounts_user_id` (`like_user_id`),
  KEY `magazines_magazineli_magazine_id_f97d9a34_fk_magazines` (`magazine_id`),
  CONSTRAINT `magazines_magazineli_magazine_id_f97d9a34_fk_magazines` FOREIGN KEY (`magazine_id`) REFERENCES `magazines_magazine` (`id`),
  CONSTRAINT `magazines_magazinelike_like_user_id_27595ced_fk_accounts_user_id` FOREIGN KEY (`like_user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mygardens_diary`
--

DROP TABLE IF EXISTS `mygardens_diary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mygardens_diary` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `date_created` datetime(6) NOT NULL,
  `diary_img` longtext,
  `my_garden_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mygardens_diary_my_garden_id_100a05ab_fk_mygardens_mygarden_id` (`my_garden_id`),
  CONSTRAINT `mygardens_diary_my_garden_id_100a05ab_fk_mygardens_mygarden_id` FOREIGN KEY (`my_garden_id`) REFERENCES `mygardens_mygarden` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mygardens_mygarden`
--

DROP TABLE IF EXISTS `mygardens_mygarden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mygardens_mygarden` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) NOT NULL,
  `date_grow` date DEFAULT NULL,
  `watering_schedule` int DEFAULT NULL,
  `recent_water` date DEFAULT NULL,
  `diaries_count` int NOT NULL,
  `img_url` longtext,
  `memo` longtext,
  `present` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  `plant_id` bigint NOT NULL,
  `preference` int NOT NULL,
  `keep` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mygardens_mygarden_user_id_e0d97be3_fk_accounts_user_id` (`user_id`),
  KEY `mygardens_mygarden_plant_id_bb606bf4_fk_plant_id` (`plant_id`),
  CONSTRAINT `mygardens_mygarden_plant_id_bb606bf4_fk_plant_id` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`),
  CONSTRAINT `mygardens_mygarden_user_id_e0d97be3_fk_accounts_user_id` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=247733 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plant`
--

DROP TABLE IF EXISTS `plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cntntsNo` varchar(255) DEFAULT NULL,
  `cntntsSj` varchar(255) DEFAULT NULL,
  `adviseInfo` varchar(255) DEFAULT NULL,
  `clCodeNm` varchar(255) DEFAULT NULL,
  `dlthtsCodeNm` varchar(255) DEFAULT NULL,
  `dlthtsManageInfo` varchar(255) DEFAULT NULL,
  `eclgyCodeNm` varchar(255) DEFAULT NULL,
  `etcEraInfo` varchar(255) DEFAULT NULL,
  `flclrCodeNm` varchar(255) DEFAULT NULL,
  `fmlCodeNm` varchar(255) DEFAULT NULL,
  `fmldeSeasonCodeNm` varchar(255) DEFAULT NULL,
  `fmldecolrCodeNm` varchar(255) DEFAULT NULL,
  `fncltyInfo` varchar(2000) DEFAULT NULL,
  `frtlzrInfo` varchar(255) DEFAULT NULL,
  `growthAraInfo` varchar(255) DEFAULT NULL,
  `growthHgInfo` varchar(255) DEFAULT NULL,
  `grwhTpCodeNm` varchar(255) DEFAULT NULL,
  `grwhstleCodeNm` varchar(255) DEFAULT NULL,
  `grwtveCodeNm` varchar(255) DEFAULT NULL,
  `hdCodeNm` varchar(255) DEFAULT NULL,
  `ignSeasonCodeNm` varchar(255) DEFAULT NULL,
  `lefStleInfo` varchar(255) DEFAULT NULL,
  `lefcolrCodeNm` varchar(255) DEFAULT NULL,
  `lefmrkCodeNm` varchar(255) DEFAULT NULL,
  `lighttdemanddoCodeNm` varchar(255) DEFAULT NULL,
  `managedemanddoCodeNm` varchar(255) DEFAULT NULL,
  `managelevelCodeNm` varchar(255) DEFAULT NULL,
  `orgplceInfo` varchar(255) DEFAULT NULL,
  `postngplaceCodeNm` varchar(255) DEFAULT NULL,
  `prpgtEraInfo` varchar(255) DEFAULT NULL,
  `prpgtmthCodeNm` varchar(255) DEFAULT NULL,
  `smellCodeNm` varchar(255) DEFAULT NULL,
  `soilInfo` varchar(255) DEFAULT NULL,
  `speclmanageInfo` varchar(2000) DEFAULT NULL,
  `toxctyInfo` varchar(255) DEFAULT NULL,
  `watercycleAutumnCodeNm` varchar(255) DEFAULT NULL,
  `watercycleSprngCodeNm` varchar(255) DEFAULT NULL,
  `watercycleSummerCodeNm` varchar(255) DEFAULT NULL,
  `watercycleWinterCodeNm` varchar(255) DEFAULT NULL,
  `winterLwetTpCodeNm` varchar(255) DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `popular` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plantlike`
--

DROP TABLE IF EXISTS `plantlike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantlike` (
  `user_id` bigint NOT NULL,
  `score` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `plantlike_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `accounts_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plants_plantkeyword`
--

DROP TABLE IF EXISTS `plants_plantkeyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plants_plantkeyword` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cntntsNo` varchar(255) DEFAULT NULL,
  `cntntsSj` varchar(255) DEFAULT NULL,
  `presentAdequacy` int DEFAULT NULL,
  `airCleaning` int DEFAULT '0',
  `particulateMatter` int DEFAULT '0',
  `petSafety` int DEFAULT NULL,
  `humidify` int DEFAULT NULL,
  `toxcty` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_plantKeyword_plant` FOREIGN KEY (`id`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `recommendations_userkeywordcount`
--

DROP TABLE IF EXISTS `recommendations_userkeywordcount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recommendations_userkeywordcount` (
  `user_id` bigint NOT NULL,
  `pet_safe` int DEFAULT NULL,
  `humidify` int DEFAULT NULL,
  `pm_cleaning` int DEFAULT NULL,
  `beginner` int DEFAULT NULL,
  `unscented` int DEFAULT NULL,
  `hydroponics` int DEFAULT NULL,
  `low_growth_demand` int DEFAULT NULL,
  `low_light_demand` int DEFAULT NULL,
  `low_temp` int DEFAULT NULL,
  `air_cleaning` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `update_table`
--

DROP TABLE IF EXISTS `update_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `update_table` (
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'homidu'
--

--
-- Dumping routines for database 'homidu'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-06 20:24:49
