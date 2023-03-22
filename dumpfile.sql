-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_rest
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `categoria_permisos`
--

DROP TABLE IF EXISTS `categoria_permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_permisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_categoria` int NOT NULL,
  `id_permisos` int NOT NULL,
  `icono` varchar(100) DEFAULT NULL,
  `id_permiso` int DEFAULT NULL,
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
  `id_permiso` int DEFAULT NULL,
  `icono` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Configuracion del Sistema',1,'Gear'),(3,'Configuración del negocio',2,'Shop'),(4,'Reportes',3,'BarChartLineFill');
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
-- Table structure for table `configuracion_facturas`
--

DROP TABLE IF EXISTS `configuracion_facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configuracion_facturas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `RTN` varchar(15) NOT NULL,
  `Nombre_Restaurante` varchar(45) NOT NULL,
  `domicilio` varchar(200) NOT NULL,
  `celular` varchar(9) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `cai` varchar(100) NOT NULL,
  `numero_factura` varchar(50) NOT NULL,
  `descripcion_restaurante` varchar(100) DEFAULT NULL,
  `fecha_limite_emision` date NOT NULL,
  `rango_documentos` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracion_facturas`
--

LOCK TABLES `configuracion_facturas` WRITE;
/*!40000 ALTER TABLE `configuracion_facturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `configuracion_facturas` ENABLE KEYS */;
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
-- Table structure for table `facturas_yafacturadas`
--

DROP TABLE IF EXISTS `facturas_yafacturadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas_yafacturadas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Numero_factura` varchar(50) NOT NULL,
  `Nombre_cliente` varchar(50) NOT NULL,
  `RTN_cliente` varchar(15) NOT NULL,
  `Fecha_creacion` date NOT NULL,
  `Subtotal` double NOT NULL,
  `Total` double NOT NULL,
  `Tarjeta_efectivo` tinyint NOT NULL,
  `Cambio` double NOT NULL,
  `Anular` tinyint NOT NULL,
  `Pendiente` tinyint NOT NULL,
  `Pagado` tinyint NOT NULL,
  `id_configuracion_factura` int NOT NULL,
  `id_orden` int NOT NULL,
  `Usuario_atiende` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas_yafacturadas`
--

LOCK TABLES `facturas_yafacturadas` WRITE;
/*!40000 ALTER TABLE `facturas_yafacturadas` DISABLE KEYS */;
INSERT INTO `facturas_yafacturadas` VALUES (1,'03','Oscar Isaac Hernandez Estrada','0501200303803','2003-02-02',800,900,1,50,0,0,1,1,1,'Elkyn'),(2,'05','Michael Jordan 3','0501200409912','2002-06-03',12,31,1,2,0,0,0,1,1,'Juan');
/*!40000 ALTER TABLE `facturas_yafacturadas` ENABLE KEYS */;
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
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `editedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
INSERT INTO `ordenes` VALUES (1,'2023-03-08 18:09:38','2023-03-08 18:09:38'),(2,'2023-03-08 18:10:20','2023-03-08 18:10:20'),(3,'2023-03-09 14:42:49','2023-03-09 14:42:49');
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenxpedidos`
--

DROP TABLE IF EXISTS `ordenxpedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenxpedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idOrden` int DEFAULT NULL,
  `idPedidos` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenxpedidos`
--

LOCK TABLES `ordenxpedidos` WRITE;
/*!40000 ALTER TABLE `ordenxpedidos` DISABLE KEYS */;
INSERT INTO `ordenxpedidos` VALUES (1,4,3,'2023-03-08 16:06:09','2023-03-08 16:06:19'),(2,1,44,'2023-03-08 18:09:38','2023-03-08 18:09:38'),(3,2,44,'2023-03-08 18:10:20','2023-03-08 18:10:20'),(4,2,45,'2023-03-08 18:10:20','2023-03-08 18:10:20');
/*!40000 ALTER TABLE `ordenxpedidos` ENABLE KEYS */;
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
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idMesereos` (`idMeseros`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idMeseros`) REFERENCES `usuarios` (`id_Usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (43,8,0,37,0,0,'2023-03-09 21:07:57','2023-03-07 21:28:33'),(44,8,0,37,0,0,'2023-03-09 21:07:58','2023-03-07 21:30:37'),(45,5,0,37,0,0,'2023-03-09 21:07:56','2023-03-07 21:45:52'),(46,3,0,37,0,0,'2023-03-09 21:07:49','2023-03-09 18:27:28'),(47,11,1,37,0,0,'2023-03-09 18:36:59','2023-03-09 18:35:33');
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
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_idProducto_idx` (`idproducto`),
  KEY `fk_idPedido_idx` (`idPedido`),
  CONSTRAINT `fk_idPedido` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `fk_idProducto` FOREIGN KEY (`idproducto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidosproducto`
--

LOCK TABLES `pedidosproducto` WRITE;
/*!40000 ALTER TABLE `pedidosproducto` DISABLE KEYS */;
INSERT INTO `pedidosproducto` VALUES (59,43,5,1,'2023-03-07 21:28:33','2023-03-07 21:28:33'),(60,44,6,1,'2023-03-07 21:30:37','2023-03-07 21:30:37'),(61,44,5,2,'2023-03-07 21:30:37','2023-03-07 21:30:37'),(62,45,6,1,'2023-03-07 21:45:52','2023-03-07 21:45:52'),(63,45,5,3,'2023-03-07 21:45:52','2023-03-07 21:45:52'),(64,46,6,1,'2023-03-09 18:27:28','2023-03-09 18:27:28'),(65,47,5,5,'2023-03-09 18:35:33','2023-03-09 18:35:33');
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
  `icono` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (2,'Roles','R','/roles','BookmarkFill'),(3,'Pedidos','R','/orders','ListCheck'),(4,'Lista Pedidos','R','/orders-list','BookmarkFill'),(5,'Usuarios','R','/users','PeopleFill'),(6,'Recuperar Contraseña','R','/password-recovery','PeopleFill'),(7,'Menú','R','/products','LayoutTextSidebar'),(8,'Impuestos','R','/taxes','Percent'),(9,'Reportes','R','','FileEarmarkBarGraphFill'),(10,'Cocina','R','/kitchen','PeopleFill'),(11,'Lista Facturas','R','/bills','PeopleFill');
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos_xcategorias`
--

DROP TABLE IF EXISTS `permisos_xcategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos_xcategorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idpermiso` int NOT NULL,
  `idcategoria` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idPermiso_idx` (`idpermiso`),
  KEY `fk_idCategoria_idx` (`idcategoria`),
  CONSTRAINT `fk_idcategoria2` FOREIGN KEY (`idcategoria`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_idpermiso` FOREIGN KEY (`idpermiso`) REFERENCES `permisos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos_xcategorias`
--

LOCK TABLES `permisos_xcategorias` WRITE;
/*!40000 ALTER TABLE `permisos_xcategorias` DISABLE KEYS */;
INSERT INTO `permisos_xcategorias` VALUES (2,2,1),(4,8,3),(5,7,3),(6,3,3),(7,5,1),(8,6,1),(9,9,4),(10,4,3),(11,10,3),(12,11,3);
/*!40000 ALTER TABLE `permisos_xcategorias` ENABLE KEYS */;
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
  `tax_rate` int NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tax_rate` (`tax_rate`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`tax_rate`) REFERENCES `taxes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (5,'GE12','Tortilla',5.12,7,1),(6,'MA23','Coca Cola',15,16,1),(7,'GG21','Gatorad',22,17,1);
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
-- Table structure for table `rol_xpermisos`
--

DROP TABLE IF EXISTS `rol_xpermisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol_xpermisos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_rol` int NOT NULL,
  `id_permiso` int NOT NULL,
  PRIMARY KEY (`id`,`id_permiso`,`id_rol`),
  KEY `fk_idrol2_idx` (`id_rol`),
  KEY `fk_idpermisos2_idx` (`id_permiso`)
) ENGINE=InnoDB AUTO_INCREMENT=833 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol_xpermisos`
--

LOCK TABLES `rol_xpermisos` WRITE;
/*!40000 ALTER TABLE `rol_xpermisos` DISABLE KEYS */;
INSERT INTO `rol_xpermisos` VALUES (441,1,2),(442,1,3),(443,1,4),(444,1,5),(445,1,6),(446,1,7),(447,1,8),(448,1,9),(449,1,10),(450,1,11),(451,1,11),(452,1,11),(453,1,11),(454,1,11),(455,1,11),(456,1,11),(457,1,11),(458,1,11),(459,1,11),(460,1,11),(461,1,11),(560,2,11),(561,2,3),(562,2,11),(563,2,4),(564,2,11),(565,2,5),(566,2,11),(567,2,6),(568,2,7),(569,2,8),(570,2,8),(571,2,8),(572,2,8),(573,2,8),(574,2,8),(575,2,8),(576,2,8),(577,2,8),(578,2,8),(579,2,8),(580,2,8),(581,2,8),(582,2,8),(583,2,8),(584,2,8),(585,2,8),(586,2,8),(587,2,11),(588,2,11),(589,2,11),(590,2,11),(591,2,11),(592,2,11),(593,2,11),(594,2,11),(595,2,11),(596,2,11),(597,2,11),(598,2,11),(599,2,11),(600,2,11),(601,2,11),(602,2,11),(603,2,11),(604,2,11),(605,2,11),(606,2,11),(607,2,11),(608,2,11),(609,2,11),(610,2,11),(611,2,11),(612,2,11),(613,2,11),(614,2,11),(615,2,11),(616,2,11),(617,2,11),(618,2,11),(619,2,11),(620,2,11),(621,2,11),(622,2,11),(623,2,11),(624,2,11),(625,2,11),(626,2,11),(109,3,1),(110,3,2),(200,15,1),(136,17,1),(168,20,2),(134,23,1),(143,25,1),(146,26,1),(147,26,2),(150,27,1),(153,28,1),(154,29,2),(194,30,1),(156,31,1),(157,33,1),(159,35,1),(161,36,1),(165,37,1),(166,38,1),(167,39,1),(169,40,1),(182,41,1),(173,42,1),(174,44,1),(186,46,1),(187,46,2),(198,48,2),(199,48,1),(201,49,1),(301,50,11),(302,50,10),(303,50,9),(304,50,8),(305,50,7),(402,51,10),(403,51,11),(715,52,11),(716,52,3),(717,52,11),(718,52,4),(719,52,11),(720,52,5),(721,52,11),(722,52,6),(723,52,11),(724,52,7),(725,52,11),(726,52,8),(727,52,11),(728,52,9),(729,52,11),(730,52,10),(731,52,11),(732,52,11),(733,52,11),(734,52,11),(735,52,11),(736,52,11),(737,52,11),(738,52,11),(739,52,11),(740,52,11),(741,52,11),(742,52,11),(743,52,11),(744,52,11),(745,52,11),(746,52,11),(747,52,11),(748,52,11),(749,52,11),(750,52,11),(751,52,11),(752,52,11),(753,52,11),(754,52,11),(755,52,11),(756,52,11),(757,52,11),(758,52,11),(759,52,11),(760,52,11),(761,52,11),(762,52,11),(763,52,11),(764,52,11),(765,52,11),(766,52,11),(767,52,11),(768,52,11),(769,52,11),(770,52,11),(771,52,11),(772,52,11),(773,52,11),(774,52,11),(775,52,11),(776,52,11),(777,52,11),(778,52,11),(779,52,11),(780,52,11),(781,52,11),(782,52,11),(783,52,11),(784,52,11),(785,52,11),(786,52,11),(787,52,11),(788,52,11),(789,52,11),(790,52,11),(791,52,11),(792,52,11),(796,53,2),(797,53,3),(798,53,4),(799,53,5),(800,53,6),(801,53,7),(802,53,8),(803,53,9),(804,53,10),(805,53,11),(806,53,11),(807,53,11),(808,53,11),(809,53,11),(810,53,11),(811,53,11),(812,53,11),(813,53,11),(814,53,11),(815,53,11),(816,53,11),(793,54,9),(794,54,10),(795,54,11),(825,55,6),(826,55,5),(827,55,4),(828,55,10),(829,55,10),(830,55,10),(831,55,10),(832,55,10),(821,56,6),(822,56,5),(823,56,4),(824,56,10);
/*!40000 ALTER TABLE `rol_xpermisos` ENABLE KEYS */;
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
  `habilitado` tinyint DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador','2023-02-02',1,1),(2,'Facturador','2023-02-02',1,1),(13,'Cocina','2023-02-28',NULL,1),(14,'Mesero','2023-02-28',NULL,1),(15,'Gerente','2023-02-28',NULL,0),(49,'GG','2023-03-07',NULL,1),(50,'Obiwan','2023-03-09',NULL,1),(51,'Prueba','2023-03-09',NULL,1),(52,'Prueba3','2023-03-09',NULL,0),(53,'Prueba5','2023-03-09',NULL,1),(54,'Prueba4','2023-03-09',NULL,1),(55,'Prueba7','2023-03-09',NULL,1),(56,'Prueba6','2023-03-09',NULL,0);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxes`
--

DROP TABLE IF EXISTS `taxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxes`
--

LOCK TABLES `taxes` WRITE;
/*!40000 ALTER TABLE `taxes` DISABLE KEYS */;
INSERT INTO `taxes` VALUES (3,'Impuesto15',0.15,1),(7,'Impuesto18',0.18,1),(16,'Impuesto1',0.01,1),(17,'Impuesto22',0.22,1);
/*!40000 ALTER TABLE `taxes` ENABLE KEYS */;
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
INSERT INTO `usuarios` VALUES (36,'Juan','Arias','csssc',2,'10332','M','1995-01-28','La Lima','9393','pruxc@gmsail.com','$2b$10$do1XmzgK43LXuvBbWCEt4.0HePOwQGvnCyHO/JuZyVzLheO5qhC8W','hrhJQYqw3V2p',1),(37,'Juan','Arias','cc',1,'1032','H','1995-01-28','La Lima','9393','pruxcssx@gmsail.com','$2b$10$AWvqkhWBWLMGn1O5tiiyVekoipGHwL44tvV/SUB/91Srkj3P5aPv.',NULL,1),(38,'Juan','Arias','JUAR5219',1,'01','H','1995-01-28','Choloma','9393','t@gmil.com','$2b$10$q8qZ8RusbxGiOw4msrFRnuNLdUKUONAUyH8yFAnC81XckbmH25ECG','kn2o6ZUqOlHC',1),(39,'Juan','Arias','JUAR9423',1,'1234567891234','H','1995-01-28','Choloma','9393','2ssa@gmail.com','$2b$10$JNbsbAoHb8TC.J66A/27cetmdnKXOrR4x7esmgjG/ve6t0K196Wt2','sUxNFGZvC7ht',1),(40,'Juan','Arias','JUAR5923',1,'1804200001272','H','1995-01-28','Choloma','9393','2ss@gmail.com','$2b$10$ybrwRnGnvgeNexFjkvlZkuWrQeTipRXQpGrIJPS7D090JxHBEt1Sq','wcJauDN08i1x',0),(42,'Juan','Arias','JUAR2823',2,'1804202001272','H','1995-01-28','CholomaS','9393','2ssss@gmail.com','$2b$10$t7SDBCwYSSQHMykwYtCI.Ou3QGFds/1EbRiDeTNm9W0DU3zvBaL.6','OM9XXMnGMi0w',1),(43,'Juan','Arias','JUAR6823',1,'0502199600071','M','1998-02-01','San Pedro','98989898','jar@gmail.com','$2b$10$WPJAcJY5zqfG08/Itjii/.BD9uesTUCyAZDzp6rKfZyEJVFkn/WAK','plHvyAP58YgI',1),(44,'Josue','Romero','JORO7226',1,'0501200302608','M','2002-02-21','San Pedro Sula','87794832','josuepinro21@gmail.com','$2b$10$8gIp0m91pZKysodkMC3p2ODbED/LdasFRuFrlWt3o9qhqA12JkwX6','gaEX1UvqP75C',1),(45,'Ramiro','Ortega','RAOR779',2,'2342342342434','M','2002-02-21','Choloma','23423423','GG91@gmail.com','$2b$10$PH.zWoTu6cGGBseGFTHFkeGoS2wbS3wbQ5vr.No5FhjIYrh4i/Kwq','7MCDOwyxFviF',1),(46,'Andrea','Ariana','ANAR219',49,'4234234242342','M','2002-02-21','Cholo','56545645','GG2@gmail.com','$2b$10$On77NwqqdxFKdUuyQWnikus1.48/O4AT1xJ4die8awOwAYncnidri','HFhOiRI5T5bn',1),(47,'Fabian','Mauricio','FAMA069',14,'2342344244233','M','2002-01-21','Choloma','33424342','Josue@gmail.com','$2b$10$6BqKKsKbPWQwr2UWKdk1q.KEp/tkvKVsFGH1H6n0TOMUsYg0xT2bK','A8gcICJ9pfu1',1),(48,'Fabricio','Augusto','FAAU899',1,'2342423423432','M','2002-02-21','Cholo','34233424','Josue2@gmail.com','$2b$10$0M4gSdw7hLT3THiC5WbaieZHgtxA21xCA3ZGQIHZyU9tyWZAm18Hq','AYMcvzkDs7cV',1),(49,'Marcelo','Agatha','MAAG769',2,'2423424324243','M','2002-02-21','Cholo','21434243','Josue3@gmail.com','$2b$10$ZdSvSPDPx8FBlo3ZX6pa..svSPAQzoR/leIpCVnxuU27UVNlWOVH2','EiwTHCuityZ2',1),(50,'MARCELO','MARCELO','MAMA919',14,'4234232424234','M','2002-02-21','Cholo','23423423','josuepinro4@gmail.com','$2b$10$5OU.jhm0BHPpYb3DuvuqIeAD0rDnyhYFZq7aVjGX7EbNdAdALuzdm','IaOhx1pWJZgz',1),(51,'Josue','Josue','JOJO359',2,'2423434324322','M','2002-02-21','Cholo','23424242','GG93@gmail.com','$2b$10$j4rwvATx6eDFr9f277Ot/.3qy6duuBkF9dAAM.uQyIi7AT6Bih/bO','2kJhHiL0wc9K',1),(52,'Armando','PAredes','ARPA269',14,'3242423432432','M','2002-02-21','Cholo','34234234','Josue5@gmail.com','$2b$10$94i6x9cV8lHrRPf6Bp/TJOwBYTm6lWfy2CxdHeI1yc5EPgHpc6/NK','10OKDImhruBS',1),(53,'Prueba','Bayron','PRBA729',55,'0210323233232','M','2002-02-21','Cholo','34294839','josue6@gmail.com','$2b$10$IQhVPgOobwdWmszvQnzDfujGRr.LuIXb8XQMukohb/i4z4PXIo2sS','Ox7SWM88klc2',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_rest'
--

--
-- Dumping routines for database 'db_rest'
--
/*!50003 DROP PROCEDURE IF EXISTS `asignarPedidosAOrden` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`Josue`@`localhost` PROCEDURE `asignarPedidosAOrden`(IN listaPedidos VARCHAR(255), OUT idOrden INT)
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE idPedidos INT;
    DECLARE pedidosCursor CURSOR FOR SELECT id FROM pedidos WHERE FIND_IN_SET(id, listaPedidos);
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    INSERT INTO ordenes (createdAt) VALUES (NOW());
    SET idOrden = LAST_INSERT_ID();
    
    OPEN pedidosCursor;
    read_loop: LOOP
        FETCH pedidosCursor INTO idPedidos;
        IF done THEN
            LEAVE read_loop;
        END IF;
        INSERT INTO ordenxpedidos (idOrden, idPedidos) VALUES (idOrden, idPedidos);
    END LOOP;
    CLOSE pedidosCursor;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `asignar_permisos_a_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `asignar_permisos_a_rol`(
    IN p_id_rol INT,
    IN p_id_categoria INT,
    IN p_permisos JSON
)
BEGIN
    -- Eliminamos todos los permisos anteriores del rol en la categoría especificada
    DELETE FROM permisos_xcategorias
    WHERE id = p_id_rol AND idcategoria = p_id_categoria;
    
    -- Insertamos los nuevos permisos para el rol en la categoría especificada
    INSERT INTO permisos_xcategorias (id_permiso, id_categoria)
    SELECT p_id_rol, p_id_categoria, permisos.id
    FROM JSON_TABLE(p_permisos, "$[*]" COLUMNS (id INT PATH "$")) AS permisos
    INNER JOIN permisos_xcategorias ON permisos.id = permisos_xcategorias.idpermiso
    WHERE permisos_xcategorias.idcategoria = p_id_categoria;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `asignar_permisos_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `asignar_permisos_rol`(
  IN p_id_rol INT,
  IN p_permisos VARCHAR(200),
  OUT p_resultado VARCHAR(45)
)
BEGIN
    DECLARE i INT DEFAULT 1;
  DECLARE arr_permisos VARCHAR(200);
   DECLARE permiso_id INT;
    DECLARE count INT;
    
  -- Eliminar todos los permisos del rol
  DELETE FROM rol_xpermisos WHERE id_rol = p_id_rol;

 
  
  -- Separar la cadena de permisos en un array
  SET arr_permisos = p_permisos;
  
  -- Recorrer el array de permisos y asignarlos uno a uno al rol
 WHILE (i <= LENGTH(arr_permisos)) DO
        SET permiso_id = SUBSTRING_INDEX(SUBSTRING_INDEX(arr_permisos, ',', i), ',', -1);
        SELECT COUNT(*) INTO count FROM rol_xpermisos WHERE id_rol = rol_id AND id_permiso = permiso_id;
        IF count = 0 THEN
            INSERT INTO rol_xpermisos (id_rol, id_permiso) 
            VALUES (rol_id, permiso_id);
        END IF;
        SET i = i + 1;
    END WHILE;
  
  -- Actualizar el valor de la variable de resultado
  SET p_resultado = 'Permisos asignados correctamente al rol';
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `backOrderReady` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `backOrderReady`(   IN idParam INT)
BEGIN

UPDATE pedidos SET estadoCocina = 0 WHERE pedidos.id = idParam;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `change_product_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `change_product_status`(productId VARCHAR(15), newStatus INT)
BEGIN
    UPDATE productos SET status = newStatus WHERE codigo_producto LIKE concat('%', productId, '%');
    IF newStatus = 0 THEN
        SELECT CONCAT('El producto ha sido desactivado') as msg, 0 as response;
    ELSEIF newStatus = 1 THEN
        SELECT CONCAT('El producto ha sido activado') as msg, 1 as response;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `change_tax_status` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `change_tax_status`(IN tax_id INT, IN new_status INT)
BEGIN
  IF new_status = 0 AND EXISTS (SELECT 1 FROM productos WHERE tax_rate = tax_id) THEN
    SELECT 'No es posible deshabilitar un impuesto en uso' AS msg;
  ELSE
    UPDATE taxes SET status = new_status WHERE id = tax_id;
    SELECT CASE new_status
      WHEN 1 THEN 'Se ha activado el impuesto correctamente'
      WHEN 0 THEN 'Se ha desactivado el impuesto correctamente'
      ELSE 'Error: estado no válido'
    END AS msg;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `check_and_update_roles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `check_and_update_roles`(
    IN p_id_Rol INT
)
BEGIN
    DECLARE rol_count INT;
    DECLARE rol_enabled TINYINT;

    -- contar usuarios con el rol especificado
    SELECT COUNT(*) INTO rol_count FROM usuarios WHERE id_Rol = p_id_Rol;

    IF rol_count = 0 THEN
        -- si ningún usuario tiene el rol, deshabilitar el rol
        UPDATE roles SET habilitado = 0 WHERE id = p_id_Rol;
        SELECT true;
    ELSE
        SELECT false;
    END IF;

    -- comprobar si el rol estaba deshabilitado
    SELECT habilitado INTO rol_enabled FROM roles WHERE id = p_id_Rol;

    IF rol_enabled = 0 THEN
        -- habilitar el rol
        UPDATE roles SET habilitado = 1 WHERE id = p_id_Rol;
        SELECT true;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `crear_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crear_rol`(IN nomb_rol VARCHAR(45), IN permisos_ids VARCHAR(255))
BEGIN
    DECLARE rol_id INT;
    DECLARE i INT DEFAULT 1;
    DECLARE permiso_id INT;
    DECLARE count INT;
    
    INSERT INTO roles (Nomb_Rol, Fecha_Creacion) VALUES (nomb_rol, CURDATE());
    SET rol_id = LAST_INSERT_ID();
    
    WHILE (i <= LENGTH(permisos_ids)) DO
        SET permiso_id = SUBSTRING_INDEX(SUBSTRING_INDEX(permisos_ids, ',', i), ',', -1);
        SELECT COUNT(*) INTO count FROM rol_xpermisos WHERE id_rol = rol_id AND id_permiso = permiso_id;
        IF count = 0 THEN
            INSERT INTO rol_xpermisos (id_rol, id_permiso) 
            VALUES (rol_id, permiso_id);
        END IF;
        SET i = i + 1;
    END WHILE;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `editar_permisos_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `editar_permisos_rol`(
  IN p_id_rol INT,
  IN p_nombre_rol VARCHAR(45),
  IN p_permisos VARCHAR(200),
  OUT p_resultado VARCHAR(45)
)
BEGIN
 DECLARE i INT;
  DECLARE arr_permisos VARCHAR(200);
  
  -- Actualizar el nombre del rol
  UPDATE roles SET Nomb_Rol = p_nombre_rol WHERE id = p_id_rol;

  -- Eliminar todos los permisos del rol
  DELETE FROM rol_xpermisos WHERE id_rol = p_id_rol;

  -- Separar la cadena de permisos en un array
  SET arr_permisos = p_permisos;
  
  -- Recorrer el array de permisos y asignarlos uno a uno al rol
  SET i = 1;
  WHILE i <= LENGTH(arr_permisos) DO
    IF SUBSTRING_INDEX(SUBSTRING_INDEX(arr_permisos, ',', i), ',', -1) <> ',' THEN
      INSERT INTO rol_xpermisos (id_rol, id_permiso) VALUES (p_id_rol, SUBSTRING_INDEX(SUBSTRING_INDEX(arr_permisos, ',', i), ',', -1));
    END IF;
    SET i = i + 1;
  END WHILE;
  
  -- Actualizar el valor de la variable de resultado
  SET p_resultado = 'Permisos asignados correctamente al rol';
  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `edit_bills` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_bills`(IN p_id INT, IN p_rtn_cliente VARCHAR(15), IN p_nombre_cliente VARCHAR(50))
BEGIN
    UPDATE facturas_yafacturadas
    SET RTN_cliente = p_rtn_cliente, Nombre_cliente = p_nombre_cliente
    WHERE id = p_id;
    
     SELECT "Se ha editado la factura exitosamente" as msg, 1 as response;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_product`(IN productId int, IN productCode VARCHAR(15), IN productName VARCHAR(80), IN productPrice DOUBLE, In taxRate INT)
BEGIN
  DECLARE productCount INT;
  DECLARE codeCount INT;
  
  SELECT COUNT(*) INTO productCount
  FROM productos
  WHERE id = productId;
  
  IF productCount = 0 THEN
    SELECT 'No existe el producto en la base de datos' as msg, 0 as response;
  ELSE
    SET codeCount = (SELECT COUNT(*) FROM productos WHERE codigo_producto = productCode AND id <> productId);
    
    IF codeCount > 0 THEN
        SELECT 'El codigo_producto ya existe en otro producto' as msg, 0 as response;
    ELSE
        UPDATE productos
        SET codigo_producto = productCode, nombre_producto = productName, precio_producto = productPrice, tax_rate = taxRate
        WHERE id= productId;
        SELECT 'El producto se ha actualizado correctamente' as msg, 1 as response;
    END IF;
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
/*!50003 DROP PROCEDURE IF EXISTS `eliminar_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminar_rol`(IN p_id_rol INT)
BEGIN
    DELETE FROM rol_xpermisos WHERE id_rol = p_id_rol;
    DELETE FROM roles WHERE id = p_id_rol;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getallactive_products` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getallactive_products`()
BEGIN
select * from productos where status=1;
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
/*!50003 DROP PROCEDURE IF EXISTS `get_all_orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_orders`(IN estadoCocina INT, IN estadoFactura INT)
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
    WHERE p.estadoCocina = estadoCocina AND p.estadoFactura = estadoFactura
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
                'productos', productos,
                'estadoCocina', estadoCocina,
                'estadoFactura', estadoFactura,
                'createdAt', createdAt
            )
        ) AS orders
    FROM t2
    INNER JOIN pedidos ON t2.numero_pedido = pedidos.id
    WHERE pedidos.estadoCocina = estadoCocina AND pedidos.estadoFactura = estadoFactura;

    DROP TEMPORARY TABLE IF EXISTS t1;
    DROP TEMPORARY TABLE IF EXISTS t2;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_orders21` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_orders21`(IN estadoCocina INT, IN estadoFactura INT)
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
    WHERE p.estadoCocina = estadoCocina AND p.estadoFactura = estadoFactura AND DATE(p.createdAt) = CURDATE()
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
                'productos', productos,
                'estadoCocina', estadoCocina,
                'estadoFactura', estadoFactura,
                'createdAt', createdAt
            )
        ) AS orders
    FROM t2
    INNER JOIN pedidos ON t2.numero_pedido = pedidos.id
    WHERE pedidos.estadoCocina = estadoCocina AND pedidos.estadoFactura = estadoFactura AND DATE(pedidos.createdAt) = CURDATE();

    DROP TEMPORARY TABLE IF EXISTS t1;
    DROP TEMPORARY TABLE IF EXISTS t2;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_permits` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_permits`()
BEGIN
	SELECT id, N_Permiso, Desc_Permiso, link FROM permisos;
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_products`()
BEGIN
SELECT productos.id, codigo_producto, nombre_producto, precio_producto,productos.status, taxes.id as taxId, taxes.name
	FROM productos INNER JOIN taxes ON productos.tax_rate = taxes.id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_roles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_roles`()
BEGIN
	SELECT id, Nomb_Rol, Fecha_Creacion, id_categoria, habilitado FROM roles;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_all_taxes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_taxes`()
BEGIN
  SELECT id, name, amount*100 as amount, status FROM taxes;
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
/*!50003 DROP PROCEDURE IF EXISTS `get_bill` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_bill`(IN p_numeroFactura varchar (50))
BEGIN
 DECLARE facturaExists INT DEFAULT 0;
    SELECT COUNT(*) INTO facturaExists FROM facturas_yafacturadas WHERE (p_numeroFactura = Numero_factura) ;

    IF facturaExists <= 0 THEN
        SELECT 'No existen registros con este usuario' AS msg, 0 AS response;
    ELSE
		SELECT  id, Nombre_Cliente, RTN_cliente from facturas_yafacturadas where p_numeroFactura = Numero_factura;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_bills` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_bills`()
BEGIN
    SELECT * FROM facturas_yafacturadas;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_completed_orders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_completed_orders`()
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
    WHERE p.estadoCocina = 1
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
/*!50003 DROP PROCEDURE IF EXISTS `get_completed_orders();` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_completed_orders();`()
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
/*!50003 DROP PROCEDURE IF EXISTS `get_cookingOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_cookingOrders`()
BEGIN
    CREATE TEMPORARY TABLE IF NOT EXISTS t1 (
        mesaID INT,
        numero_pedido INT,
        id_producto INT,
        nombre_producto VARCHAR(255),
        cantidad INT,
          fecha datetime
    );

    INSERT INTO t1 (mesaID, numero_pedido, id_producto, nombre_producto, cantidad, fecha)
    SELECT 
        p.numeroMesa AS mesaID,
        p.id AS numero_pedido,
        pr.id AS id_producto,
        pr.nombre_producto AS nombre_producto,
        SUM(pp.cantidad) AS cantidad,
            p.createdAt AS fecha
    FROM pedidosproducto pp
    INNER JOIN pedidos p ON p.id = pp.idPedido
    INNER JOIN productos pr ON pp.idProducto = pr.id
    WHERE p.estadoCocina = 0
    GROUP BY p.numeroMesa, p.id, pp.idProducto;

    CREATE TEMPORARY TABLE IF NOT EXISTS t2 (
        mesaID INT,
        numero_pedido INT,
        productos JSON,
    fecha datetime
    );

    INSERT INTO t2 (mesaID, numero_pedido, fecha, productos)
    SELECT 
        mesaID,
        numero_pedido,
        fecha,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id_producto', id_producto,
                'nombre_producto', nombre_producto,
                'cantidad', cantidad
            )
        )
    FROM t1
    GROUP BY mesaID, numero_pedido, fecha;

    SELECT 
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'mesaID', mesaID,
                'numero_pedido', numero_pedido,
                  'fecha', fecha,
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
/*!50003 DROP PROCEDURE IF EXISTS `get_permissions_by_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_permissions_by_user`(username VARCHAR(30))
BEGIN
	DECLARE permissions JSON;
    
    SELECT JSON_ARRAYAGG(j.link) INTO permissions
	FROM (SELECT DISTINCT p.link 
		FROM usuarios u
			INNER JOIN rol_xpermisos rp
				ON u.id_Rol = rp.id_Rol
			INNER JOIN permisos p
				ON rp.id_permiso = p.id 
		WHERE u.Nom_Usuario = username) j;
    SELECT permissions;
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_product`(IN productCodeDesc VARCHAR(100))
BEGIN
  DECLARE product_found INT DEFAULT 0;
  SELECT COUNT(*) INTO product_found FROM productos WHERE nombre_producto LIKE concat('%', productCodeDesc, '%') OR codigo_producto LIKE concat('%', productCodeDesc, '%');

  IF product_found > 0 THEN
    SELECT * ,(select name from taxes where tax_rate=id) as name_tax FROM productos WHERE nombre_producto LIKE concat('%', productCodeDesc, '%') OR codigo_producto LIKE concat('%', productCodeDesc, '%');
  ELSE
    SELECT 'El producto no existe en el menú' AS msg, 0 as response;
  END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `get_readyOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_readyOrders`()
BEGIN
    CREATE TEMPORARY TABLE IF NOT EXISTS t1 (
        mesaID INT,
        numero_pedido INT,
        id_producto INT,
        nombre_producto VARCHAR(255),
        cantidad INT,
          fecha datetime
    );

    INSERT INTO t1 (mesaID, numero_pedido, id_producto, nombre_producto, cantidad, fecha)
    SELECT 
        p.numeroMesa AS mesaID,
        p.id AS numero_pedido,
        pr.id AS id_producto,
        pr.nombre_producto AS nombre_producto,
        SUM(pp.cantidad) AS cantidad,
            p.createdAt AS fecha
    FROM pedidosproducto pp
    INNER JOIN pedidos p ON p.id = pp.idPedido
    INNER JOIN productos pr ON pp.idProducto = pr.id
    WHERE p.estadoCocina = 1
    GROUP BY p.numeroMesa, p.id, pp.idProducto;

    CREATE TEMPORARY TABLE IF NOT EXISTS t2 (
        mesaID INT,
        numero_pedido INT,
        productos JSON,
    fecha datetime
    );

    INSERT INTO t2 (mesaID, numero_pedido, fecha, productos)
    SELECT 
        mesaID,
        numero_pedido,
        fecha,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id_producto', id_producto,
                'nombre_producto', nombre_producto,
                'cantidad', cantidad
            )
        )
    FROM t1
    GROUP BY mesaID, numero_pedido, fecha;

    SELECT 
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'mesaID', mesaID,
                'numero_pedido', numero_pedido,
                  'fecha', fecha,
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
/*!50003 DROP PROCEDURE IF EXISTS `get_readytoFactOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_readytoFactOrders`()
BEGIN
    CREATE TEMPORARY TABLE IF NOT EXISTS t1 (
        mesaID INT,
        numero_pedido INT,
        id_producto INT,
        nombre_producto VARCHAR(255),
        cantidad INT,
          fecha datetime
    );

    INSERT INTO t1 (mesaID, numero_pedido, id_producto, nombre_producto, cantidad, fecha)
    SELECT 
        p.numeroMesa AS mesaID,
        p.id AS numero_pedido,
        pr.id AS id_producto,
        pr.nombre_producto AS nombre_producto,
        SUM(pp.cantidad) AS cantidad,
            p.createdAt AS fecha
    FROM pedidosproducto pp
    INNER JOIN pedidos p ON p.id = pp.idPedido
    INNER JOIN productos pr ON pp.idProducto = pr.id
    WHERE p.estadoCocina = 1 and p.estadoFactura = 1
    GROUP BY p.numeroMesa, p.id, pp.idProducto;

    CREATE TEMPORARY TABLE IF NOT EXISTS t2 (
        mesaID INT,
        numero_pedido INT,
        productos JSON,
    fecha datetime
    );

    INSERT INTO t2 (mesaID, numero_pedido, fecha, productos)
    SELECT 
        mesaID,
        numero_pedido,
        fecha,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id_producto', id_producto,
                'nombre_producto', nombre_producto,
                'cantidad', cantidad
            )
        )
    FROM t1
    GROUP BY mesaID, numero_pedido, fecha;

    SELECT 
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'mesaID', mesaID,
                'numero_pedido', numero_pedido,
                  'fecha', fecha,
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
/*!50003 DROP PROCEDURE IF EXISTS `get_single_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_single_product`(IN productID INT)
BEGIN
    SELECT 'Se ha encontrado el producto' as msg, 1 as response, id, codigo_producto, nombre_producto, precio_producto, tax_rate as taxId, status 
    FROM productos
    WHERE id = productID;
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
/*!50003 DROP PROCEDURE IF EXISTS `new_bill` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_bill`(
    IN p_RTN VARCHAR(15),
    IN p_Nombre_Restaurante VARCHAR(80),
    IN p_domicilio VARCHAR(200),
    IN p_celular VARCHAR(9),
    IN p_correo VARCHAR(80),
    IN p_cai VARCHAR(100),
    IN p_numero_factura VARCHAR(50),
    IN p_descripcion_restaurante VARCHAR(100),
    IN p_fecha_limite_emision DATE,
    IN p_rango_documentos VARCHAR(200),
    IN p_nombre_cliente VARCHAR(50),
    IN p_rtn_cliente VARCHAR(15),
    IN p_fecha_creacion DATE,
    IN p_subtotal DOUBLE,
    IN p_total DOUBLE,
    IN p_tarjeta_efectivo TINYINT,
    IN p_cambio DOUBLE,
    IN p_anular TINYINT,
    IN p_usuario_atiende VARCHAR(30)
)
BEGIN
    INSERT INTO facturas (
        RTN, Nombre_Restaurante, domicilio, celular, correo, cai, numero_factura, descripcion_restaurante, 
        fecha_limite_emision, rango_documentos, nombre_cliente, rtn_cliente, fecha_creacion, subtotal, total, 
        tarjeta_efectivo, cambio, anular, usuario_atiende
    ) 
    VALUES (
        p_RTN, p_Nombre_Restaurante, p_domicilio, p_celular, p_correo, p_cai, p_numero_factura, p_descripcion_restaurante, 
        p_fecha_limite_emision, p_rango_documentos, p_nombre_cliente, p_rtn_cliente, p_fecha_creacion, p_subtotal, p_total, 
        p_tarjeta_efectivo, p_cambio, p_anular, p_usuario_atiende
    );
    SELECT "se ha creado la nueva factura exitosamente" as msg, 1 as response;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_bills` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_bills`(
    IN p_numero_factura VARCHAR(50),
    IN p_nombre_cliente VARCHAR(50),
    IN p_rtn_cliente VARCHAR(15),
    IN p_fecha_creacion DATE,
    IN p_subtotal DOUBLE,
    IN p_total DOUBLE,
    IN p_tarjeta_efectivo TINYINT,
    IN p_cambio DOUBLE,
    IN p_anular TINYINT,
    IN p_pendiente TINYINT,
    IN p_pagado TINYINT,
    IN p_configuracion_factura INT,
    IN p_id_orden INT,
    IN p_usuario_atiende VARCHAR(45)
)
BEGIN
    INSERT INTO facturas_yafacturadas (
		Numero_factura,Nombre_cliente, RTNn_cliente,Fecha_creacion, Subtotal, Total, Tarjeta_efectivo, Cambio, Anular,Pendiente,
        Pagado, id_configuracion_factura,id_orden,Usuario_atiende
    ) 
    VALUES (
        p_numero_factura,p_nombre_cliente,p_rtn_cliente,p_fecha_creacion,p_subtotal,
        p_total,p_tarjeta_efectivo, p_cambio, p_anular,p_pendiente,p_pagado,p_configuracion_facturada,p_id_orden,p_usuario_atiende
    );
    SELECT "se ha creado la nueva factura exitosamente" as msg, 1 as response;
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_product`(productId VARCHAR(15), productName VARCHAR(80), productPrice DOUBLE, taxtId INT)
proc_Exit:BEGIN
	DECLARE existe INT DEFAULT 0;

	SELECT COUNT(*) INTO existe FROM productos WHERE nombre_producto = productName;

	IF existe > 0 THEN
		SELECT 'Este producto ya existe en la base de datos' AS msg, 0 as response;
		LEAVE proc_Exit;
	ELSE
		BEGIN
			INSERT INTO productos (codigo_producto, nombre_producto, precio_producto, tax_rate, status) 
			VALUES (productId, productName, productPrice, taxtId, 1);
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
/*!50003 DROP PROCEDURE IF EXISTS `new_tax` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_tax`(
  IN tax_name VARCHAR(50),
  IN tax_amount DECIMAL(10,2)
)
BEGIN
  DECLARE tax_percent DECIMAL(10,2);
  DECLARE tax_id INT;
  DECLARE tax_status TINYINT(1) DEFAULT 1;
  
  SELECT COUNT(*) INTO tax_id FROM taxes WHERE name = tax_name;
  
  IF tax_id > 0 THEN
    SELECT 'El impuesto ya existe' as msg, 0 as response;
  ELSE
    SET tax_percent = tax_amount / 100;
    INSERT INTO taxes(name, amount, status) VALUES(tax_name, tax_percent, tax_status);
    SELECT 'Se ha creado el nuevo impuesto' as msg, 1 as response;
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
/*!50003 DROP PROCEDURE IF EXISTS `nuevaOrden_Pedidos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `nuevaOrden_Pedidos`(
  IN `pedidos` VARCHAR(255)
)
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE pedidos_id INT;
  DECLARE pedidos_cur CURSOR FOR SELECT id FROM pedidos WHERE FIND_IN_SET(id, pedidos);
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  START TRANSACTION;
  INSERT INTO ordenes () VALUES ();
  SET @orden_id = LAST_INSERT_ID();

  OPEN pedidos_cur;
  read_loop: LOOP
    FETCH pedidos_cur INTO pedidos_id;
    IF done THEN
      LEAVE read_loop;
    END IF;
    UPDATE pedidos SET estadoCocina = 1 WHERE id = pedidos_id;
    INSERT INTO ordenxpedidos (idOrden, idPedidos) VALUES (@orden_id, pedidos_id);
  END LOOP;
  CLOSE pedidos_cur;

  COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerPermisosde_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerPermisosde_rol`(IN rol_id INT)
BEGIN
    SELECT p.* FROM permisos p
    JOIN rol_xpermisos rxp ON rxp.id_permiso = p.id
    WHERE rxp.id_rol = rol_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ObtenerPermisoxCategoria` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerPermisoxCategoria`(IN id INT)
BEGIN
    SELECT JSON_OBJECT(
        'id', t1.id,
        'nombre', t1.nombre,
        'array', GROUP_CONCAT(t2.id SEPARATOR ',')
    ) as resultado
    FROM categorias t1
    JOIN permisos t2 ON t1.id = t2.id_tabla1
    WHERE t1.id = id
    GROUP BY t1.id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ObtenerRolYPermisos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerRolYPermisos`(IN p_Nom_Usuario varchar(30))
BEGIN
DECLARE v_Nombre varchar(60);
DECLARE v_Rol varchar(45);
DECLARE v_Permisos JSON;

SELECT CONCAT(u.Nombre, ' ', u.Apellido), r.Nomb_Rol INTO v_Nombre, v_Rol
FROM roles r
JOIN usuarios u ON r.id = u.id_Rol
WHERE u.Nom_Usuario = p_Nom_Usuario;

SELECT JSON_ARRAYAGG(
  JSON_OBJECT(
    'Categoria', c.nombre,
    'Icono', c.icono,
    'Permisos', (
      SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
          'N_Permiso', p.N_Permiso,
          'Desc_Permiso', p.Desc_Permiso,
          'link', p.link,
          'icono', p.icono
        )
      ) 
      FROM permisos p
      JOIN permisos_xcategorias pc ON p.id = pc.idpermiso
      WHERE pc.idcategoria = c.id
      AND p.id IN (
        SELECT rp.id_permiso
        FROM rol_xpermisos rp
        JOIN roles r ON r.id = rp.id_rol
        WHERE r.Nomb_Rol = v_Rol
      )
    )
  )
) INTO v_Permisos
FROM categorias c;

SELECT JSON_OBJECT('Nombre', v_Nombre, 'Rol', v_Rol, 'Categorias', v_Permisos) as ARRAY;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtener_fila_con_array` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_fila_con_array`(IN id INT)
BEGIN
    SELECT JSON_OBJECT(
        'id', t1.id,
        'columna1', t1.columna1,
        'columna2', t1.columna2,
        'array', GROUP_CONCAT(t2.columna SEPARATOR ',')
    ) as resultado
    FROM tabla1 t1
    JOIN tabla2 t2 ON t1.id = t2.id_tabla1
    WHERE t1.id = id
    GROUP BY t1.id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtener_permisos_categorias` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_permisos_categorias`()
BEGIN
    SELECT JSON_OBJECTAGG(categorias.nombre, (
    SELECT JSON_ARRAYAGG(JSON_OBJECT('id', permisos.id, 'N_Permiso', permisos.N_Permiso, 'Desc_Permiso', permisos.Desc_Permiso, 'link', permisos.link))
    FROM permisos_xcategorias
    INNER JOIN permisos ON permisos.id = permisos_xcategorias.idpermiso
    WHERE permisos_xcategorias.idcategoria = categorias.id
))
FROM categorias;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtener_roles_con_permisos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_roles_con_permisos`()
BEGIN
    SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', r.id,
            'Nomb_Rol', r.Nomb_Rol,
            'Fecha_Creacion', r.Fecha_Creacion,
            'categorias', (
                SELECT JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'id', c.id,
                        'nombre', c.nombre,
                        'permisos', (
                            SELECT JSON_ARRAYAGG(
                                JSON_OBJECT(
                                    'id', p.id,
                                    'N_Permiso', p.N_Permiso,
                                    'Desc_Permiso', p.Desc_Permiso,
                                    'link', p.link
                                )
                            )
                            FROM permisos_xcategorias pc
                            INNER JOIN permisos p ON pc.idpermiso = p.id
                            WHERE pc.idcategoria = c.id
                        )
                    )
                )
                FROM rol_categoria rc
                INNER JOIN categorias c ON rc.id_categoria = c.id
                WHERE rc.id_rol = r.id
            )
        )
    ) AS roles
    FROM roles r;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtener_roles_habilitados` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtener_roles_habilitados`()
BEGIN
    SELECT *
    FROM roles
    WHERE habilitado = 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pedido_detalle_json` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `pedido_detalle_json`(IN `pedido_id` INT)
BEGIN
  SELECT 
    JSON_OBJECT(
      'id', p.id,
      'numeroMesa', p.numeroMesa,
      'estadoCocina', p.estadoCocina,
      'idMeseros', p.idMeseros,
      'estadoFactura', p.estadoFactura,
      'delivery', p.delivery,
      'fecha', p.fecha,
      'productos', (
        SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', pp.idproducto,
            'cantidad', pp.cantidad
          )
        )
        FROM pedidosproducto pp
        WHERE pp.idPedido = p.id
      )
    ) AS json_output
  FROM pedidos p
  WHERE p.id = pedido_id;
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

  SELECT COUNT(*) INTO existe FROM usuarios WHERE Correo = userEmail AND status = 1;

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
/*!50003 DROP PROCEDURE IF EXISTS `salvador3` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `salvador3`()
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
    WHERE p.estadoCocina = 1
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
/*!50003 DROP PROCEDURE IF EXISTS `serOrderReady` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`local`@`localhost` PROCEDURE `serOrderReady`(   IN idParam INT)
BEGIN

UPDATE pedidos SET estadoCocina = 1 WHERE pedidos.id = idParam;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setOrderReady` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setOrderReady`(   IN idParam INT)
BEGIN

UPDATE pedidos SET estadoCocina = 1 WHERE pedidos.id = idParam;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UnEnableRol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UnEnableRol`(IN idRol INT)
BEGIN
    DECLARE habilitadoActual INT;
    DECLARE usuariosConRol INT;
    DECLARE resultado JSON;
    
    SELECT habilitado INTO habilitadoActual FROM roles WHERE id = idRol;
    
    IF habilitadoActual = 0 THEN
        UPDATE roles SET habilitado = 1 WHERE id = idRol;
        SET resultado = JSON_OBJECT('resultado', TRUE);
    ELSEIF habilitadoActual = 1 THEN
        -- Verificar si hay usuarios con el mismo id_Rol
        SELECT COUNT(*) INTO usuariosConRol FROM usuarios WHERE id_Rol = idRol;
        
        IF usuariosConRol > 0 THEN
            SET resultado = JSON_OBJECT('resultado', FALSE);
        ELSE
            UPDATE roles SET habilitado = 0 WHERE id = idRol;
            SET resultado = JSON_OBJECT('resultado', TRUE);
        END IF;
    ELSE 
        SET resultado = JSON_OBJECT('resultado', FALSE);
    END IF;
    
    SELECT resultado;
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
/*!50003 DROP PROCEDURE IF EXISTS `update_tax` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_tax`(
  IN tax_id INT,
  IN tax_name VARCHAR(10),
  IN tax_amount DECIMAL(10,2)
)
BEGIN
  DECLARE tax_count INT;
	DECLARE tax_percent DECIMAL(10,2);
  SELECT COUNT(*) INTO tax_count FROM taxes WHERE name = tax_name AND id != tax_id;
  IF tax_count > 0 THEN
    SELECT 'El nombre de impuesto ya existe' as msg, 0 as response;
  ELSE
  	SET tax_percent = tax_amount / 100;
    UPDATE taxes SET name = tax_name, amount = tax_percent WHERE id = tax_id;
    SELECT 'Se ha actualizado el impuesto' as msg, 1 as response;
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
    	SELECT Nombre as name, Contraseña as password, id_Rol as rol, Nom_Usuario as id, 1 as response, status from usuarios WHERE Nom_Usuario = userName;
	ELSE
		SELECT 'Usuario o contraseña invalidos' as msg, 0 as response;
	END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `VerificarRolAsignado` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`Josue`@`localhost` PROCEDURE `VerificarRolAsignado`(IN idRol INT, OUT resultado BOOLEAN)
BEGIN
    DECLARE contador INT;
    SELECT COUNT(*) INTO contador FROM usuarios WHERE id_Rol = idRol;
    IF contador = 0 THEN
        UPDATE roles SET habilitado = 0 WHERE id = idRol;
        SET resultado = TRUE;
    ELSE
        SET resultado = FALSE;
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

-- Dump completed on 2023-03-09 15:11:12
