-- MySQL dump 10.13  Distrib 8.0.32, for macos13.0 (x86_64)
--
-- Host: localhost    Database: bd_restaurante
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `clientes_rtn`
--

DROP TABLE IF EXISTS `clientes_rtn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes_rtn` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `RTN` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes_rtn`
--

LOCK TABLES `clientes_rtn` WRITE;
/*!40000 ALTER TABLE `clientes_rtn` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes_rtn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `RTN` varchar(15) NOT NULL,
  `Nombre_Restaurante` varchar(80) NOT NULL,
  `domicilio` varchar(200) NOT NULL,
  `celular` varchar(9) NOT NULL,
  `correo` varchar(80) NOT NULL,
  `cai` varchar(100) NOT NULL,
  `numero_factura` varchar(50) NOT NULL,
  `descripcion_restuarante` varchar(100) DEFAULT NULL,
  `fecha_limite_emision` date NOT NULL,
  `rango_documentos` varchar(200) NOT NULL,
  `nombre_cliente` varchar(50) NOT NULL,
  `rtn_cliente` varchar(15) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `subtotal` double NOT NULL,
  `total` double NOT NULL,
  `tarjeta-efectivo` tinyint NOT NULL,
  `cambio` double NOT NULL,
  `anular` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `producto` int NOT NULL,
  `N_factura` int NOT NULL,
  PRIMARY KEY (`producto`,`N_factura`),
  KEY `fk_idFacturas_idx` (`N_factura`),
  CONSTRAINT `fk_idFacturas` FOREIGN KEY (`N_factura`) REFERENCES `facturas` (`id`),
  CONSTRAINT `fk_idProductos` FOREIGN KEY (`producto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `N_Permiso` varchar(80) NOT NULL,
  `Desc_Permiso` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo_producto` varchar(15) NOT NULL,
  `nombre_producto` varchar(80) NOT NULL,
  `precio_producto` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Hola','Aguacate',123334),(2,'DSHO278','Agua de coco',1213),(3,'AS6162','asasas',123334),(4,'ASAS7438','asasasdsds',123334);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero_factura` varchar(20) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportes`
--

LOCK TABLES `reportes` WRITE;
/*!40000 ALTER TABLE `reportes` DISABLE KEYS */;
/*!40000 ALTER TABLE `reportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nomb_Rol` varchar(45) NOT NULL,
  `Fecha_Creacion` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador','2023-02-02');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_Usuarios` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `Nom_Usuario` varchar(30) NOT NULL,
  `id_Rol` int NOT NULL,
  `N_Identidad` varchar(14) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Lugar_Nacimiento` varchar(100) DEFAULT NULL,
  `N_Celular` varchar(9) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `Contraseña` varchar(200) NOT NULL,
  `Token` varchar(200) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id_Usuarios`,`Nom_Usuario`),
  UNIQUE KEY `Nom_Usuario_UNIQUE` (`Nom_Usuario`),
  UNIQUE KEY `N_Identidad_UNIQUE` (`N_Identidad`),
  KEY `fk_idroles_idx` (`id_Rol`),
  CONSTRAINT `fk_idroles` FOREIGN KEY (`id_Rol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'Juan','Arias','ddddd',1,'3','H','1995-01-28','La Lima','9393','pru@gmsail.com','coco','sssss',1),(4,'COCO','LOCO','KAKA2',1,'12345','','1995-09-22','LA lima','9383','j@gmail.com','Admin','hoiaoo',0),(7,'Juan','Arias','JsA',1,'22356780','H','1995-01-28','Choloma','9393','juan@gmail.com','Admin','hoiaoo',NULL),(8,'Juan','Arias','JssA',1,'223156780','H','1995-01-28','Choloma','9393','juan@gmail.com','Admin','hoiaoo',NULL),(9,'Juan','Arias','JssdA',1,'2231563780','H','1995-01-28','Choloma','9393','juan@gmail.com','Admin','hoiaoo',NULL),(11,'Juan','Arias','JsdA',1,'221563780','H','1995-01-28','Choloma','9393','juan@gmail.com','Admin','hoiaoo',NULL),(12,'Juan','Arias','JsdAa',1,'2215663780','H','1995-01-28','Choloma','9393','juan@gmail.com','Admin','hoiaoo',NULL),(13,'Juan','Arias','JsadAa',1,'22156637830','H','1995-01-28','Choloma','9393','juan@gmail.com','Admin','hoiaoo',NULL),(14,'Juan','Arias','JszdAa',1,'2637830','H','1995-01-28','Choloma','9393','juan@gmail.com','$2b$10$mDnJBBMq.d9vLP7H70uGVOwPWOByHIyfkhqVBQT51JXkiOV7rVGHe','hoiaoo',NULL),(17,'Juan','Arias','ssjk',1,'26371830','H','1995-01-28','Choloma','9393','juan@gmail.com','$2b$10$GOm8BP5e1X.Pq624ELtYZeszz.9karM/IHa88DBxp48uzJ9/sbCQO','hoiaoo',NULL),(18,'Juan','Arias','JUAR263',1,'263718130','H','1995-01-28','Choloma','9393','juan@gmail.com','$2b$10$b6cIG8zuiFf4rPArjPFkd.sHiIFjAPbhF3AR0Dt1f/RETdvjg4uzi','hoiaoo',NULL),(20,'Juan','Arias','JUAR633',1,'637128130','H','1995-01-28','Choloma','9393','juan@gmail.com','$2b$10$mvfe/v.kfSaKVyKMwbYMBuQjbjd7yWR5Q01XOBT2DjKK3IfwuOxIK','hoiaoo',1),(21,'Juan','Arias','JUAR993',1,'999','H','1995-01-28','Choloma','9393','juan@gmasil.com','$2b$10$y8TCRRc4P0bc6FcrdsKQ6e/tij23EV73fK/Jbx1lW7/OCSsbRMBqC','hoiaoo',1),(22,'Juan','Arias','JUAR093',1,'09878','H','1995-01-28','Choloma','9393','juan@gmil.com','$2b$10$YbuuRrhwMISnZT6dlBiX4.xkSc6pnbs5xfn3ozZn./SyZwu2ghvd6','hoiaoo',1),(24,'Juan','Arias','JUAR453',1,'458378','H','1995-01-28','Choloma','9393','juadn@gmil.com','$2b$10$wLUCmTDRBxTZqZgMvJF5EucH1Kv7jpD7/J7rBt6/LbxZ1VQ7CtMbe','hoiaoo',1),(25,'Juan','Arias','JUAR233',1,'2333','H','1995-01-28','Choloma','9393','juadddn@gmil.com','$2b$10$KYaIHJbvPEbkiD4BIIXbveNZb55PpK855rYTjyNzNM9SAMhixvjl.','hoiaoo',1),(26,'Juan','Arias','JUAR124',1,'1252','H','1995-01-28','Choloma','9393','juadddn@gmil.com','$2b$10$KMB8y3qbXW1RfEtrovW8tOtVjsBwmsrGInnQ206hzQPieqqdYCSZe','ohN6RiOikZoX',1),(28,'Juan','Arias','JUAR344',1,'344','H','1995-01-28','Choloma','9393','jdn@gmil.com','$2b$10$.ECo2Lqi2olcLYIyX8mVlOw2T80G1pYnGgTztgHKjPD7hXtBnHPA2','dAthJzdtAH1B',1),(30,'Juan','Arias','JUAR294',1,'456','H','1995-01-28','Choloma','9393','jdns@gmil.com','$2b$10$tQxDXydbgdoLhP.ajqDaZeZx2FzevZlqHoIXqIv/cGfuFE0LfSs2q','T2wTqX2jfNS2',1),(31,'Juan','Arias','JUAR264',1,'4566','H','1995-01-28','Choloma','9393','jdnst@gmil.com','$2b$10$9d4wco7t4CGSkYGlGaW6NeNUJ.72/g2DjJ1coF7J4S85O8FYbjwuG','7XLJhaDfZWHI',1),(32,'Juan','Arias','JUAR104',1,'45664','H','1995-01-28','Choloma','9393','jdncst@gmil.com','$2b$10$VKD6V15QPV3BtGq3W7DQwOumwZOKDSUv5Ji4kvrSSAwB1xOnC8qfe',NULL,1),(33,'Juan','Arias','JUAR444',1,'93939','H','1995-01-28','Choloma','9393','jdncst@gmil.com','$2b$10$F3VhIrl1rQBvlQaOfV/2heMOBq/a5m0yX0eZ2K8DpGBxr0.skYsRy','3aRyhETTD5b1',1),(34,'Juan','Arias','JUAR624',1,'3455','H','1995-01-28','Choloma','9393','jdncst@gmil.com','$2b$10$h1v1aXrN92EjyJFEfc4bG.oWMOjrjSUKCh8e2ZE0PsUxOQrriIrq2','XnQmedurEqdY',1),(35,'Juan','Arias','JUAR508',1,'34','H','1995-01-28','Choloma','9393','jdncst@gmil.com','$2b$10$Qmhx6JfuM0oBq8soDwuAFepmH/T7TAagz.V8yR332IyteUgQ0Ld6e','7X9RiYXpkqOu',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bd_restaurante'
--
/*!50003 DROP PROCEDURE IF EXISTS `edit_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_product`(productCode VARCHAR(15), productName VARCHAR(80), productPrice DOUBLE)
exit_proc:BEGIN
  DECLARE productCount INT;
  
  SELECT COUNT(*) INTO productCount
  FROM productos
  WHERE codigo_producto = productCode;
  
  IF productCount = 0 THEN
    SELECT 'No existe el producto en la base de datos' as msg, 0 as response;
	LEAVE exit_proc;
  ELSE
    SET productCode = IFNULL(productCode, (SELECT codigo_producto FROM productos WHERE codigo_producto = productCode));
    SET productName = IFNULL(productName, (SELECT nombre_producto FROM productos WHERE codigo_producto = productCode));
    SET productPrice = IFNULL(productPrice, (SELECT precio_producto FROM productos WHERE codigo_producto = productCode));
    UPDATE productos
    SET codigo_producto = productCode, nombre_producto = productName, precio_producto = productPrice
    WHERE codigo_producto = productCode;
	SELECT 'El producto se ha actualizado correctamente' as msg, 1 as response;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `edit_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_user`(id INT, userStatus TINYINT, userName VARCHAR(30), userLastName VARCHAR(30), userId VARCHAR(30), rol INT, userDni VARCHAR(14), userGender CHAR(1), userBirthday DATE, placeOfBirth VARCHAR(100), userPhone VARCHAR(9), userEmail VARCHAR(100))
proc_Exit:BEGIN
   	DECLARE existeDNI INT;
	DECLARE existeEmail INT;

	SELECT COUNT(*) INTO existeDNI FROM usuarios WHERE N_Identidad = userDni;
	SELECT COUNT(*) INTO existeEmail FROM usuarios WHERE Correo = userEmail;

	IF existeEmail > 0 && existeDNI > 0 THEN
		SELECT 'El correo y DNI ya existen en la base de datos' AS msg, 0 as response;
		LEAVE proc_Exit;

	ELSEIF existeDNI > 0 THEN
		SELECT 'Este DNI ya existe en la base de datos' AS msg, 0 as response;
		LEAVE proc_Exit;
	ELSEIF existeEmail > 0 THEN
		SELECT 'Este correo ya existe en la base de datos' AS msg, 0 as response;
		LEAVE proc_Exit;
	
	ELSE
        SET @userName = IFNULL(userName, (SELECT Nombre FROM usuarios WHERE id_Usuarios = id));
        SET @userLastName = IFNULL(userLastName, (SELECT Apellido FROM usuarios WHERE id_Usuarios = id));
        SET @userId = IFNULL(userId, (SELECT Nom_Usuario FROM usuarios WHERE id_Usuarios = id));
        SET @rol = IFNULL(rol, (SELECT id_Rol FROM usuarios WHERE id_Usuarios = id));
        SET @userDni = IFNULL(userDni, (SELECT N_Identidad FROM usuarios WHERE id_Usuarios = id));
        SET @userGender = IFNULL(userGender, (SELECT Genero FROM usuarios WHERE id_Usuarios = id));
        SET @userBirthday = IFNULL(userBirthday, (SELECT Fecha_Nacimiento FROM usuarios WHERE id_Usuarios = id));
        SET @placeOfBirth = IFNULL(placeOfBirth, (SELECT Lugar_Nacimiento FROM usuarios WHERE id_Usuarios = id));
        SET @userPhone = IFNULL(userPhone, (SELECT N_Celular FROM usuarios WHERE id_Usuarios = id));
        SET @userEmail = IFNULL(userEmail, (SELECT Correo FROM usuarios WHERE id_Usuarios = id));
        SET @userStatus = IFNULL(userStatus, (SELECT status FROM usuarios WHERE id_Usuarios = id));
        
        UPDATE usuarios
        SET Nombre = @userName, Apellido = @userLastName, Nom_Usuario = @userId, id_Rol = @rol, N_Identidad = @userDni, Genero = @userGender, Fecha_Nacimiento = @userBirthday, Lugar_Nacimiento = @placeOfBirth, N_Celular = @userPhone, Correo = @userEmail, status = @userStatus
        WHERE id_Usuarios = id;
	BEGIN
		SELECT 'Se ha editado la información del usuario correctamente' as msg, 1 as response;
	END;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `edit_user_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_user_status`(opt INT,userDni INT)
BEGIN
    DECLARE userExists INT;
    SELECT COUNT(*) INTO userExists FROM usuarios WHERE N_Identidad = userDni;
    IF userExists > 0 THEN
        BEGIN
            IF (opt = 0) THEN
                UPDATE usuarios SET status = 0 WHERE N_Identidad = userDni;
                SELECT 'Se ha desactivado el usuario correctamente' AS msg, 1 as response;
            ELSEIF (opt = 1) THEN
                UPDATE usuarios SET status = 1 WHERE N_Identidad = userDni;
                SELECT 'Se ha activado el usuario correctamente' AS msg, 1 as response;
            ELSE
                SELECT 'Opción invalida' AS msg, 0 as response;
            END IF;
        END;
    ELSE
        SELECT 'Este DNI no existe en nuestros registros' AS msg, 0 as response;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_products` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_products`()
BEGIN
	SELECT codigo_producto, nombre_producto, precio_producto FROM productos;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_users` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_users`()
BEGIN
	BEGIN
		SELECT CONCAT(Nombre, ' ', Apellido) as FullName, Nom_Usuario as UsernName, Nomb_Rol as Rol, N_Identidad as DNI, Genero as 	Gender, Fecha_Nacimiento as Birthday, Lugar_Nacimiento as PlaceofBirth, N_Celular as Phone, Correo as Email 
		FROM usuarios
		INNER JOIN roles ON usuarios.id_Rol = roles.id;
	END;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_product`(IN productCodeDesc VARCHAR(100))
BEGIN
  DECLARE product_found INT DEFAULT 0;
  SELECT COUNT(*) INTO product_found FROM productos WHERE nombre_producto LIKE concat('%', productCodeDesc, '%') OR codigo_producto LIKE concat('%', productCodeDesc, '%');

  IF product_found > 0 THEN
    SELECT * FROM productos WHERE nombre_producto LIKE concat('%', productCodeDesc, '%') OR codigo_producto LIKE concat('%', productCodeDesc, '%');
  ELSE
    SELECT 'El producto no existe en el menú' AS msg, 0 as response;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_user`(IN userID VARCHAR(30), IN opt TINYINT)
BEGIN
    DECLARE userExists INT DEFAULT 0;
    SELECT COUNT(*) INTO userExists FROM usuarios WHERE Nom_Usuario = userID;

    IF userExists <= 0 THEN
        SELECT 'No existen registros con este usuario' AS msg, 0 AS response;
    ELSEIF opt = 1 THEN
    	SELECT status FROM usuarios WHERE Nom_Usuario = userID;	
    ELSE
        SELECT CONCAT(Nombre, ' ', Apellido) AS FullName, Nom_Usuario AS UsernName, Nomb_Rol AS Rol, N_Identidad AS DNI, Genero AS		 Gender, Fecha_Nacimiento AS Birthday, Lugar_Nacimiento AS PlaceofBirth, N_Celular AS Phone, Correo AS Email 
        FROM usuarios
        INNER JOIN roles ON usuarios.id_Rol = roles.id
        WHERE Nom_Usuario = userID;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_product`(productId VARCHAR(15), productName VARCHAR(80), productPrice DOUBLE)
proc_Exit:BEGIN
	DECLARE existe INT DEFAULT 0;

	SELECT COUNT(*) INTO existe FROM productos WHERE nombre_producto = productName;

	IF existe > 0 THEN
		SELECT 'Este producto ya existe en la base de datos' AS msg, 0 as response;
		LEAVE proc_Exit;
	ELSE
		BEGIN
			INSERT INTO productos (codigo_producto, nombre_producto, precio_producto) 
			VALUES (productId, productName, productPrice);
		END;
	BEGIN
		SELECT 'Se ha registrado el producto correctamente' as msg, 1 as response;
	END;
	END IF;

	

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_user`(userName VARCHAR(30), userLastName VARCHAR(30), userId VARCHAR(30),rol INT, userDni VARCHAR(14), userGender CHAR(1), userBirthday DATE, placeOfBirth VARCHAR(100), userPhone VARCHAR(9), userEmail VARCHAR(100), userPass VARCHAR(200), userToken VARCHAR(200))
proc_Exit:BEGIN
	DECLARE existe INT DEFAULT 0;

	SELECT COUNT(*) INTO existe FROM usuarios WHERE (N_Identidad = userDni OR Correo = userEmail);

	IF existe > 0 THEN
		SELECT 'El usuario ya existe en la base de datos' AS msg, 0 as response;
		LEAVE proc_Exit;
	ELSE
		BEGIN
		DECLARE initialStatus TINYINT DEFAULT 1;

		INSERT INTO usuarios (Nombre, Apellido, Nom_Usuario, id_Rol, N_Identidad, Genero, Fecha_Nacimiento, Lugar_Nacimiento, N_Celular, Correo, Contraseña, Token, status) 
		VALUES (userName, userLastName, userId, rol, userDni, userGender, userBirthday, placeOfBirth, userPhone, userEmail, 	userPass, userToken, initialStatus);
		END;

	END IF;

	BEGIN
		SELECT 'Se ha creado un nuevo usuario correctamente' as msg, 1 as response;
	END;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_password` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_password`(userToken VARCHAR(30), updatedPassword VARCHAR(200))
BEGIN
  DECLARE existe INT DEFAULT 0;

  SELECT COUNT(*) INTO existe FROM usuarios WHERE Token = userToken;

  IF existe > 0 THEN
    UPDATE usuarios SET Contraseña = updatedPassword WHERE Token = userToken;
	UPDATE usuarios SET Token = NULL WHERE Token = userToken;
    SELECT 'Contraseña actualizada correctamente' AS msg, 1 as response;
  ELSE
    SELECT 'Token invalido. Por favor solicite uno nuevo' AS msg, 0 as response;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `user_authentication` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `user_authentication`(userName VARCHAR(30))
BEGIN
DECLARE userExists INT;
    SELECT COUNT(*) INTO userExists FROM usuarios WHERE  Nom_Usuario = userName;
    IF userExists > 0 THEN
    	SELECT Nombre as name, Contraseña as password, id_Rol as rol, Nom_Usuario as id, 1 as response from usuarios WHERE Nom_Usuario = userName;
	ELSE
		SELECT 'Usuario o contraseña invalidos' as msg, 0 as response;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-08 22:39:40
