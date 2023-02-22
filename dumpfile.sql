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
  `id` int NOT NULL AUTO_INCREMENT,
  `numeroMesa` int NOT NULL,
  PRIMARY KEY (`id`)
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
-- Table structure for table `pedidosProducto`
--

DROP TABLE IF EXISTS `pedidosProducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidosProducto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPedido` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidosProducto`
--

LOCK TABLES `pedidosProducto` WRITE;
/*!40000 ALTER TABLE `pedidosProducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidosProducto` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (36,'Juan','Arias','csssc',1,'10332','M','1995-01-28','La Lima','9393','pruxc@gmsail.com','$2b$10$o/Dxae4oUwjmlxBNCC9oN.TinQkPV28RqH6Fkya7PBZQsi4/IDkke','qtX2HKHr7pvw',1),(37,'Juan','Arias','cc',1,'1032','H','1995-01-28','La Lima','9393','pruxcssx@gmsail.com','$2b$10$AWvqkhWBWLMGn1O5tiiyVekoipGHwL44tvV/SUB/91Srkj3P5aPv.',NULL,1),(38,'Juan','Arias','JUAR5219',1,'01','H','1995-01-28','Choloma','9393','t@gmil.com','$2b$10$q8qZ8RusbxGiOw4msrFRnuNLdUKUONAUyH8yFAnC81XckbmH25ECG','kn2o6ZUqOlHC',1),(39,'John','Doe','jdoe',1,'12345678A','M','1990-01-01','New York','123456789','jdoe@example.com','password123','token123',1),(40,'Juan','Arias','JUAR4819',1,'03','H','1995-01-28','Choloma','9393','te@gmil.com','$2b$10$bs/jImrxYHHazjqmReZzVO.BuCDv4RJEKUjx9YrCiZAO7XGr6IqTO','Dxxj2i67TZiP',1),(41,'Juan','Arias','JUAR0719',1,'99090','H','1995-01-28','Choloma','9393','tessss@gmil.com','$2b$10$puS9YfYe3YLNkoW3XvUFFuh15/rMLSB.HQgEAoOrCBwDMP3bjNS4m','4jthUvz19575',1),(42,'Juan','Arias','JUAR2119',1,'990490','H','1995-01-28','Choloma','9393','tess5ss@gmil.com','$2b$10$dZQq5Ccr/TArFRzjxrDpB.XuXtlx7b4YETQXX4lPlYZ3EvBaFKgFi','QhiZ126o31tQ',1),(43,'Juan','Arias','JUAR3319',1,'9990','H','1995-01-28','Choloma','9393','tesss5ss@gmil.com','$2b$10$3kW7Q9UECIneBFVgcMHs4urWQeeBPRgubNIOo1e7HERnA.bY6WfAu','KAbqIjDHRHFu',1),(44,'Juan','Arias','JUAR7819',1,'9908980','H','1995-01-28','Choloma','9393','tessssdd@gmil.com','$2b$10$okCnrhSHC60rEkGi5nO.k.S4x0wXImP4CCK10SYeYIJpXvh6A76oi','1dFrgoEyNL6J',1),(52,'Juan','Arias','JUAR1619',1,'982939','H','1995-01-28','Choloma','9393','2sa@gmail.com','$2b$10$qjS/H8MDfYDHFxa4.MGkq.mluOiWjj826Q6sztF0Dcu40FrFLGMvC','WxIpoRKUNdBZ',1),(53,'Juan','Arias','JUAR9219',1,'9822939','H','1995-01-28','Choloma','9393','2ssa@gmail.com','$2b$10$p4/yJr4Kl/YbZ0tsjHj7veuE/kJppQcUWyop36RsL7suz4eUFc1WG','o34r5N4Gc0ST',1);
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_user`(
    IN `id` INT, 
    IN `userStatus` TINYINT, 
    IN `userName` VARCHAR(30), 
    IN `userLastName` VARCHAR(30), 
    IN `userId` VARCHAR(30), 
    IN `rol` INT, 
    IN `userDni` VARCHAR(14), 
    IN `userGender` CHAR(1), 
    IN `userBirthday` DATE, 
    IN `placeOfBirth` VARCHAR(100), 
    IN `userPhone` VARCHAR(9), 
    IN `userEmail` VARCHAR(100)
)
BEGIN
    DECLARE existeDNI INT;
    DECLARE existeEmail INT;
    DECLARE existeUserName INT;

    SELECT COUNT(*) INTO existeDNI FROM usuarios WHERE N_Identidad = userDni AND id_Usuarios <> id;
    SELECT COUNT(*) INTO existeEmail FROM usuarios WHERE Correo = userEmail AND id_Usuarios <> id;
    SELECT COUNT(*) INTO existeUserName FROM usuarios WHERE Nom_Usuario = userId AND id_Usuarios <> id;

    IF existeUserName > 0 THEN
        SELECT 'Este nombre de usuario ya existe en la base de datos' AS msg, 0 AS response;
    ELSEIF existeEmail > 0 AND existeDNI > 0 THEN
        SELECT 'El correo y DNI ya existen en la base de datos' AS msg, 0 AS response;
    ELSEIF existeDNI > 0 THEN
        SELECT 'Este DNI ya existe en la base de datos' AS msg, 0 AS response;
    ELSEIF existeEmail > 0 THEN
        SELECT 'Este correo ya existe en la base de datos' AS msg, 0 AS response;
    ELSE
        UPDATE usuarios
        SET 
            Nombre = IFNULL(userName, Nombre), 
            Apellido = IFNULL(userLastName, Apellido), 
            Nom_Usuario = IFNULL(userId, Nom_Usuario), 
            id_Rol = IFNULL(rol, id_Rol), 
            N_Identidad = IFNULL(userDni, N_Identidad), 
            Genero = IFNULL(userGender, Genero), 
            Fecha_Nacimiento = IFNULL(userBirthday, Fecha_Nacimiento), 
            Lugar_Nacimiento = IFNULL(placeOfBirth, Lugar_Nacimiento), 
            N_Celular = IFNULL(userPhone, N_Celular), 
            Correo = IFNULL(userEmail, Correo), 
            status = IFNULL(userStatus, status)
        WHERE id_Usuarios = id;
            SELECT 'Se ha editado la información del usuario correctamente' AS msg, 1 AS response;
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
		SELECT CONCAT(Nombre, ' ', Apellido) as FullName, Nom_Usuario as UserName, Nomb_Rol as Rol, N_Identidad as DNI, Genero as 	Gender, Fecha_Nacimiento as Birthday, Lugar_Nacimiento as PlaceofBirth, N_Celular as Phone, Correo as Email, status 
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
    SELECT COUNT(*) INTO userExists FROM usuarios WHERE (Nom_Usuario = userID OR N_Identidad = userID) ;

    IF userExists <= 0 THEN
        SELECT 'No existen registros con este usuario' AS msg, 0 AS response;
    ELSEIF opt = 0 THEN
    	SELECT status FROM usuarios WHERE Nom_Usuario = userID;
    ELSE
        SELECT CONCAT(Nombre, ' ', Apellido) AS FullName, Nom_Usuario AS UsernName, Nomb_Rol AS Rol, N_Identidad AS DNI, Genero AS		 Gender, Fecha_Nacimiento AS Birthday, Lugar_Nacimiento AS PlaceofBirth, N_Celular AS Phone, Correo AS Email 
        FROM usuarios
        INNER JOIN roles ON usuarios.id_Rol = roles.id
        WHERE (Nom_Usuario = userID OR N_Identidad = userID);
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_user`(
    userName VARCHAR(30),
    userLastName VARCHAR(30),
    userId VARCHAR(30),
    rol INT,
    userDni VARCHAR(14),
    userGender CHAR(1),
    userBirthday DATE,
    placeOfBirth VARCHAR(100),
    userPhone VARCHAR(9),
    userEmail VARCHAR(100),
    userPass VARCHAR(200),
    userToken VARCHAR(200)
)
proc_Exit:BEGIN
    DECLARE existe INT DEFAULT 0;

    SELECT COUNT(*) INTO existe FROM usuarios WHERE (N_Identidad = userDni OR Correo = userEmail);

    IF existe > 0 THEN
        SELECT 'El usuario ya existe en la base de datos' AS msg, 0 as response;
        LEAVE proc_Exit;
    ELSE
        SET @initialStatus = 1;

        INSERT INTO usuarios (
            Nombre,
            Apellido,
            Nom_Usuario,
            id_Rol,
            N_Identidad,
            Genero,
            Fecha_Nacimiento,
            Lugar_Nacimiento,
            N_Celular,
            Correo,
            Contraseña,
            Token,
            status
        ) 
        VALUES (
            userName,
            userLastName,
            userId,
            rol,
            userDni,
            userGender,
            userBirthday,
            placeOfBirth,
            userPhone,
            userEmail,
            userPass,
            userToken,
            @initialStatus
        );
    END IF;
	BEGIN

    	SELECT Nombre,
            Apellido,
            Nom_Usuario,
            id_Rol,
            N_Identidad,
            Genero,
            Fecha_Nacimiento,
            Lugar_Nacimiento,
            N_Celular,
            Correo,
            status
             FROM usuarios WHERE id_Usuarios = LAST_INSERT_ID();
	END;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reset_password_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `reset_password_email`(IN userEmail VARCHAR(255), IN userToken VARCHAR(255))
BEGIN
  DECLARE existe INT DEFAULT 0;

  SELECT COUNT(*) INTO existe FROM usuarios WHERE Correo = userEmail;

  IF existe > 0 THEN
    UPDATE usuarios SET `Token` = userToken WHERE Correo = userEmail;
    SELECT Correo as email, Nombre as name, 'Se ha enviado un correo para recuperar su contraseña' AS msg, 1 as response FROM usuarios WHERE Correo = userEmail;
  ELSE
    SELECT 'Usuario no encontrado' AS msg, 0 as response;
  END IF;
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

-- Dump completed on 2023-02-19 16:45:26
