-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: hinga_heza
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `hinga_heza`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `hinga_heza` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `hinga_heza`;

--
-- Table structure for table `land_listings`
--

DROP TABLE IF EXISTS `land_listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `land_listings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` float NOT NULL,
  `status` enum('available','sold','pending') DEFAULT 'available',
  `dateListed` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `land_listings`
--

LOCK TABLES `land_listings` WRITE;
/*!40000 ALTER TABLE `land_listings` DISABLE KEYS */;
/*!40000 ALTER TABLE `land_listings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landlistings`
--

DROP TABLE IF EXISTS `landlistings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landlistings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` float NOT NULL,
  `status` enum('available','sold','pending') DEFAULT 'available',
  `dateListed` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `LandId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `LandId` (`LandId`),
  CONSTRAINT `landlistings_ibfk_1` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_10` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_11` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_12` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_13` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_14` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_15` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_16` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_17` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_18` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_19` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_2` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_20` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_21` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_22` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_23` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_24` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_25` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_26` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_27` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_28` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_29` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_3` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_30` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_31` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_32` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_33` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_34` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_35` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_36` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_37` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_38` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_39` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_4` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_40` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_41` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_42` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_43` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_44` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_45` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_5` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_6` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_7` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_8` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `landlistings_ibfk_9` FOREIGN KEY (`LandId`) REFERENCES `lands` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landlistings`
--

LOCK TABLES `landlistings` WRITE;
/*!40000 ALTER TABLE `landlistings` DISABLE KEYS */;
/*!40000 ALTER TABLE `landlistings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lands`
--

DROP TABLE IF EXISTS `lands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` float NOT NULL,
  `soilQuality` varchar(255) NOT NULL,
  `waterAvailability` varchar(255) NOT NULL,
  `climate` varchar(255) NOT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lands`
--

LOCK TABLES `lands` WRITE;
/*!40000 ALTER TABLE `lands` DISABLE KEYS */;
INSERT INTO `lands` VALUES (1,250.5,'Fertile','High','Temperate','This is a prime piece of agricultural land.','2024-11-22 09:08:13','2024-11-22 09:08:13',NULL),(2,10,'High','Good','Tropical','A great piece of farmland with fertile soil.','2024-11-22 13:02:11','2024-11-22 13:02:11',NULL),(3,10,'High','Good','Tropical','A great piece of farmland with fertile soil.','2024-11-22 14:42:18','2024-11-22 14:42:18',NULL);
/*!40000 ALTER TABLE `lands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('buyer','seller','admin') DEFAULT 'buyer',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `email_32` (`email`),
  UNIQUE KEY `email_33` (`email`),
  UNIQUE KEY `email_34` (`email`),
  UNIQUE KEY `email_35` (`email`),
  UNIQUE KEY `email_36` (`email`),
  UNIQUE KEY `email_37` (`email`),
  UNIQUE KEY `email_38` (`email`),
  UNIQUE KEY `email_39` (`email`),
  UNIQUE KEY `email_40` (`email`),
  UNIQUE KEY `email_41` (`email`),
  UNIQUE KEY `email_42` (`email`),
  UNIQUE KEY `email_43` (`email`),
  UNIQUE KEY `email_44` (`email`),
  UNIQUE KEY `email_45` (`email`),
  UNIQUE KEY `email_46` (`email`),
  UNIQUE KEY `email_47` (`email`),
  UNIQUE KEY `email_48` (`email`),
  UNIQUE KEY `email_49` (`email`),
  UNIQUE KEY `email_50` (`email`),
  UNIQUE KEY `email_51` (`email`),
  UNIQUE KEY `email_52` (`email`),
  UNIQUE KEY `email_53` (`email`),
  UNIQUE KEY `email_54` (`email`),
  UNIQUE KEY `email_55` (`email`),
  UNIQUE KEY `email_56` (`email`),
  UNIQUE KEY `email_57` (`email`),
  UNIQUE KEY `email_58` (`email`),
  UNIQUE KEY `email_59` (`email`),
  UNIQUE KEY `email_60` (`email`),
  UNIQUE KEY `email_61` (`email`),
  UNIQUE KEY `email_62` (`email`),
  UNIQUE KEY `email_63` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'topherBrillant@gmail.com','$2b$10$EBb4OAhJBOjRIACMuC0JaOulTF6rnRV3ZlBbcidTRsyWcg4hW5d6G','buyer','2024-11-12 11:51:24','2024-11-12 11:51:24'),(2,'justinkalisa@gmail.com','$2b$10$c9e2lTa1MRkeFJqkDuCiYeFkkEiPg/a5FLxo8xPEVk8.8nrDte8Y6','buyer','2024-11-14 17:13:03','2024-11-14 17:13:03'),(6,'moisekwizera@gmail.com','$2b$10$mKWqvqxKGVbo83YmO4hjteNBI/8HgkSD07yckL6XckZMi4W2v07tm','buyer','2024-11-14 18:24:09','2024-11-14 18:24:09'),(7,'kyrieirving@gmail.com','$2b$10$/ACL5qhrudk68CZZ.i0NiOmwnAgMzwvotYNLMVMJcbatJJfxWeNpa','buyer','2024-11-14 21:11:00','2024-11-14 21:11:00'),(8,'ndizeyelesley@gmail.com','$2b$10$lNeEIjnjeqIdMylkuLB0cOuiOpj.khkhXMa0CEPw1mIph.7lnIaQ.','buyer','2024-11-15 08:39:43','2024-11-15 08:39:43'),(9,'neymarjunior@gmail.com','$2b$10$0bAYiXGK74D6dARYoKF8XeV54VwoZOIdkHbXC1swpZNlzzaxaPjx.','buyer','2024-11-17 17:50:14','2024-11-17 17:50:14'),(10,'brillantfoundation@gmail.com','$2b$10$It7vvGv5S06Xo1gxEW5HMuTaN4ImeosyimLQMkZaPaJVMQlFcAgQS','buyer','2024-11-17 17:54:59','2024-11-17 17:54:59'),(11,'traeyoung@gmail.com','$2b$10$aw3IFlRsfU.XcRJAJKtY8OWk2WskcVj11A.PlubH4jDUsF0/J3aDi','buyer','2024-11-17 22:47:25','2024-11-17 22:47:25'),(12,'johncollins@gmail.com','$2b$10$0naDaxByjz7/R/vNxn3P0.3EovBIFbgbHN1H1ajawfHswy5iHHcmW','buyer','2024-11-17 23:42:14','2024-11-17 23:42:14'),(13,'deronfox@gmail.com','$2b$10$UL9JnLxkd3U9Zxwcrevql.nH75ZadNxb6HhMpjExm2pGvV28blhLa','buyer','2024-11-18 10:35:46','2024-11-18 10:35:46'),(14,'Gay@gm.com','$2b$10$JTFb8uRCKl.cvjv9bJGczOHi6w34LgCh/V9LWzbY2enBCp/xtMBYu','buyer','2024-11-22 16:14:23','2024-11-22 16:14:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-27 10:26:31
