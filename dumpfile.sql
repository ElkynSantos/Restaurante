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
-- Table structure for table `categoria_permisos`
--

DROP TABLE IF EXISTS `categoria_permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_categoria` int NOT NULL,
  `id_permisos` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idcategoria_idx` (`id_categoria`),
  KEY `fk_idpermisos_idx` (`id_permisos`),
  CONSTRAINT `fk_idcategoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_idpermisos` FOREIGN KEY (`id_permisos`) REFERENCES `permisos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_permisos`
--

LOCK TABLES `categoria_permisos` WRITE;
/*!40000 ALTER TABLE `categoria_permisos` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria_permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Table structure for table `mesas`
--

DROP TABLE IF EXISTS `mesas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mesas` (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mesas`
--

LOCK TABLES `mesas` WRITE;
/*!40000 ALTER TABLE `mesas` DISABLE KEYS */;
/*!40000 ALTER TABLE `mesas` ENABLE KEYS */;
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
  `estadoCocina` tinyint(1) NOT NULL,
  `idMeseros` int NOT NULL,
  `estadoFactura` tinyint(1) NOT NULL,
  `delivery` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idMesereos` (`idMeseros`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idMeseros`) REFERENCES `usuarios` (`id_Usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (14,1,1,36,1,0),(15,1,1,36,1,0),(16,1,1,36,1,0),(17,1,1,36,1,0),(18,1,1,36,1,0),(19,1,1,36,1,0),(20,1,1,36,1,0),(21,1,1,36,1,0),(22,1,1,36,1,0),(24,1,1,37,1,0),(25,1,0,37,0,0),(26,1,0,37,1,0),(27,1,0,37,1,0),(28,1,0,37,1,0),(29,1,0,37,1,0),(30,1,0,37,1,0),(31,2,0,37,1,0),(32,2,0,37,1,0),(33,2,0,37,1,0),(34,2,0,37,1,0),(35,2,0,37,1,0),(36,2,0,37,0,0),(37,2,0,37,0,0),(38,2,0,37,0,0),(39,2,0,37,0,0);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidosproducto`
--

DROP TABLE IF EXISTS `pedidosproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidosproducto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idPedido` int NOT NULL,
  `idproducto` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idProducto_idx` (`idproducto`),
  KEY `fk_idPedido_idx` (`idPedido`),
  CONSTRAINT `fk_idPedido` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `fk_idProducto` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidosproducto`
--

LOCK TABLES `pedidosproducto` WRITE;
/*!40000 ALTER TABLE `pedidosproducto` DISABLE KEYS */;
INSERT INTO `pedidosproducto` VALUES (1,25,1,2),(3,25,4,4),(4,26,1,2),(5,26,2,1),(6,26,4,3),(7,27,1,2),(8,27,2,1),(9,27,4,3),(10,28,1,2),(11,28,2,1),(12,28,4,3),(13,29,1,2),(14,29,2,1),(15,29,4,3),(16,30,1,2),(17,30,2,1),(18,30,4,3),(19,31,1,2),(20,31,2,2),(21,31,3,4),(22,32,1,2),(23,32,2,2),(24,32,3,4),(25,33,1,2),(26,33,2,2),(28,34,1,2),(29,34,2,2),(30,34,3,4),(31,35,1,2),(32,35,2,2),(33,35,3,4),(34,36,1,2),(35,36,2,2),(36,36,3,4),(37,37,1,2),(38,37,2,2),(39,37,3,4),(40,38,1,2),(41,38,2,2),(42,38,3,4),(43,39,1,2),(44,39,2,9),(45,39,3,1),(46,25,2,3);
/*!40000 ALTER TABLE `pedidosproducto` ENABLE KEYS */;
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
  `link` varchar(45) DEFAULT NULL,
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
-- Table structure for table `rol_categoria`
--

DROP TABLE IF EXISTS `rol_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol_categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_rol` int NOT NULL,
  `id_categoria` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idrol_idx` (`id_rol`),
  KEY `fk_categoria_idx` (`id_categoria`),
  CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_idrol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol_categoria`
--

LOCK TABLES `rol_categoria` WRITE;
/*!40000 ALTER TABLE `rol_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `rol_categoria` ENABLE KEYS */;
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
  `id_categoria` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador','2023-02-02',NULL),(2,'Facturador','2023-02-02',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (36,'Juan','Arias','csssc',2,'10332','M','1995-01-28','La Lima','9393','pruxc@gmsail.com','$2b$10$do1XmzgK43LXuvBbWCEt4.0HePOwQGvnCyHO/JuZyVzLheO5qhC8W',NULL,1),(37,'Juan','Arias','cc',1,'1032','H','1995-01-28','La Lima','9393','pruxcssx@gmsail.com','$2b$10$AWvqkhWBWLMGn1O5tiiyVekoipGHwL44tvV/SUB/91Srkj3P5aPv.',NULL,1),(38,'Juan','Arias','JUAR5219',1,'01','H','1995-01-28','Choloma','9393','t@gmil.com','$2b$10$q8qZ8RusbxGiOw4msrFRnuNLdUKUONAUyH8yFAnC81XckbmH25ECG','kn2o6ZUqOlHC',1),(39,'Juan','Arias','JUAR9423',1,'1234567891234','H','1995-01-28','Choloma','9393','2ssa@gmail.com','$2b$10$JNbsbAoHb8TC.J66A/27cetmdnKXOrR4x7esmgjG/ve6t0K196Wt2','sUxNFGZvC7ht',1),(40,'Juan','Arias','JUAR5923',1,'1804200001272','H','1995-01-28','Choloma','9393','2ss@gmail.com','$2b$10$ybrwRnGnvgeNexFjkvlZkuWrQeTipRXQpGrIJPS7D090JxHBEt1Sq','wcJauDN08i1x',0),(42,'Juan','Arias','JUAR2823',2,'1804202001272','H','1995-01-28','Choloma','9393','2ssss@gmail.com','$2b$10$t7SDBCwYSSQHMykwYtCI.Ou3QGFds/1EbRiDeTNm9W0DU3zvBaL.6','IWDSQF5cBTFZ',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bd_restaurante'
--
/*!50003 DROP PROCEDURE IF EXISTS `edit_order_products` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_order_products`(
    IN order_id INT,
    IN products_list JSON
)
BEGIN
    DECLARE finished BOOLEAN DEFAULT FALSE;
    DECLARE i INT DEFAULT 0;
    DECLARE product_id INT;
    DECLARE new_quantity INT;
    
    -- Comprobar que la orden existe y su estado de cocina y factura sea 0
    IF NOT EXISTS (SELECT * FROM pedidos WHERE id = order_id AND estadoCocina = 0 AND estadoFactura = 0) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La orden no existe o ya ha sido cocinada o facturada.';
    END IF;

    -- Iterar sobre la lista de productos y actualizar las cantidades correspondientes
    WHILE NOT finished DO
        SET product_id = JSON_EXTRACT(products_list, CONCAT('$[', i, '].id'));
        SET new_quantity = JSON_EXTRACT(products_list, CONCAT('$[', i, '].quantity'));
        
        IF product_id IS NULL OR new_quantity IS NULL THEN
            SET finished = TRUE;
        ELSE
            -- Si el producto existe en la orden, actualizar su cantidad
            IF EXISTS (SELECT * FROM pedidosproducto WHERE idPedido = order_id AND idProducto = product_id) THEN
                UPDATE pedidosproducto SET cantidad = new_quantity WHERE idPedido = order_id AND idProducto = product_id;
            ELSE -- Si el producto no existe en la orden, agregarlo con su cantidad
                INSERT INTO pedidosproducto (idPedido, idProducto, cantidad) VALUES (order_id, product_id, new_quantity);
            END IF;
            
            -- Comprobar si la cantidad de algún producto es 0 y eliminarlo
            IF new_quantity = 0 THEN
                DELETE FROM pedidosproducto WHERE idPedido = order_id AND idProducto = product_id;
            END IF;
            
            SET i = i + 1;
        END IF;
    END WHILE;
    

    SELECT 'Orden actualizada correctamente.' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_user_status`(opt INT, userDni BIGINT)
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
/*!50003 DROP PROCEDURE IF EXISTS `get_active_orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_active_orders`()
BEGIN
    CREATE TEMPORARY TABLE IF NOT EXISTS t1 (
        mesaID INT,
        numero_pedido INT,
        id_producto INT,
        nombre_producto VARCHAR(255),
        cantidad INT
    );

    INSERT INTO t1 (mesaID, numero_pedido, id_producto, nombre_producto, cantidad)
    SELECT 
        p.numeroMesa AS mesaID,
        p.id AS numero_pedido,
        pr.id AS id_producto,
        pr.nombre_producto AS nombre_producto,
        SUM(pp.cantidad) AS cantidad
    FROM pedidosproducto pp
    INNER JOIN pedidos p ON p.id = pp.idPedido
    INNER JOIN productos pr ON pp.idProducto = pr.id
    WHERE p.estadoCocina = 0
    GROUP BY p.numeroMesa, p.id, pp.idProducto;

    CREATE TEMPORARY TABLE IF NOT EXISTS t2 (
        mesaID INT,
        numero_pedido INT,
        productos JSON
    );

    INSERT INTO t2 (mesaID, numero_pedido, productos)
    SELECT 
        mesaID,
        numero_pedido,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id_producto', id_producto,
                'nombre_producto', nombre_producto,
                'cantidad', cantidad
            )
        )
    FROM t1
    GROUP BY mesaID, numero_pedido;

    SELECT 
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'mesaID', mesaID,
                'numero_pedido', numero_pedido,
                'productos', productos
            )
        ) AS orders
    FROM t2;

    DROP TEMPORARY TABLE IF EXISTS t1;
    DROP TEMPORARY TABLE IF EXISTS t2;
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
        SELECT id_Usuarios as userIdDb, Nombre as Name, Apellido as LastName,Nom_Usuario AS UserName, Nomb_Rol AS RolName, id as Rol, N_Identidad AS DNI, Genero AS Gender, Fecha_Nacimiento AS Birthday, Lugar_Nacimiento AS PlaceofBirth, N_Celular AS Phone, Correo AS Email, status as userStatus
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
/*!50003 DROP PROCEDURE IF EXISTS `new_order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_order`(
    IN p_numeroMesa INT,
    IN p_idMesero INT,
    IN p_productos JSON,
    IN p_delivery TINYINT
)
BEGIN
    DECLARE v_idPedido INT;
    DECLARE v_idProducto INT;
    DECLARE v_cantidad INT;
    
    START TRANSACTION;
    
    -- Insertar un nuevo registro en la tabla `pedidos`
    INSERT INTO pedidos(numeroMesa, estadoCocina, idMeseros, estadoFactura, delivery)
    VALUES(p_numeroMesa, 0, p_idMesero, 0, p_delivery);
    
    -- Obtener el ID generado para el nuevo pedido
    SET v_idPedido = LAST_INSERT_ID();
    
    -- Recorrer la lista de productos y cantidades
    WHILE JSON_VALID(p_productos) AND JSON_LENGTH(p_productos) > 0 DO
        -- Obtener el primer elemento de la lista
        SET v_idProducto = JSON_EXTRACT(p_productos, '$[0].idProducto');
        SET v_cantidad = JSON_EXTRACT(p_productos, '$[0].cantidad');
        
        -- Insertar un nuevo registro en la tabla `pedidosproducto`
        INSERT INTO pedidosproducto(idPedido, idProducto, cantidad)
        VALUES(v_idPedido, v_idProducto, v_cantidad);
        
        -- Eliminar el primer elemento de la lista
        SET p_productos = JSON_REMOVE(p_productos, '$[0]');

    END WHILE;
    
    COMMIT;
	SELECT 'Se ha creado la orden exitosamente' as msg, 1 as response;
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

-- Dump completed on 2023-02-23 14:17:55
