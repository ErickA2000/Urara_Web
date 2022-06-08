CREATE TABLE `categoria` (
  `id` int (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar (11) NOT NULL
  `descripcion` varchar (200) NULL,
  `estado` varchar (10) NULL

) 

CREATE TABLE `coleccion` (
  `id` int (11) NOT NULL AUTO_INCREMENT,
  `nombre` int (11) DEFAULT NULL,
  `descripcion` varchar (200) NULL,
  `estado` varchar (10) NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `persona` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` int(10) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `telefono` int(10) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedula` (`cedula`)
)

CREATE TABLE `prenda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombrePrenda` varchar(100) NOT NULL,
  `referencia` varchar(15) NOT NULL UNIQUE	,
  `imagen` varchar(100) DEFAULT NULL,
  `descripcion` varchar(256) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `disponibilidad` varchar(15) DEFAULT NULL,
  `fecha_creacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  `idCategoria` int(11) NOT NULL,
  `idColeccion` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_prenda_categoria` (`idCategoria`),
  KEY `fk_prenda_coleccion` (`idColeccion`),
  CONSTRAINT `fk_prenda_categoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`),
  CONSTRAINT `fk_prenda_coleccion` FOREIGN KEY (`idColeccion`) REFERENCES `coleccion` (`id`)
) 


CREATE TABLE `talla` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero_talla` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `prenda_talla` (
  `idprenda_talla` int(11) NOT NULL AUTO_INCREMENT,
  `idprenda` int(11) NOT NULL,
  `idtalla` int(11) NOT NULL,
  PRIMARY KEY (`idprenda_talla`),
  KEY `f_prendaTalla_prenda` (`idprenda`),
  KEY `fk_prendaTalla_talla` (`idtalla`),
  CONSTRAINT `f_prendaTalla_prenda` FOREIGN KEY (`idprenda`) REFERENCES `prenda` (`id`),
  CONSTRAINT `fk_prendaTalla_talla` FOREIGN KEY (`idtalla`) REFERENCES `talla` (`id`)
) 

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `clave` varchar(40) NOT NULL,
  `fecha_creacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  `idPersona` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `fk_usuario_persona` (`idPersona`),
  CONSTRAINT `fk_usuario_persona` FOREIGN KEY (`idPersona`) REFERENCES `persona` (`cedula`)
) 

CREATE TABLE `prenda_usuario` (
  `idprenda_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `idprenda` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  PRIMARY KEY (`idprenda_usuario`),
  KEY `f_prendaUsuario_usuario` (`idusuario`),
  KEY `fk_prendaUsuario_prenda` (`idprenda`),
  CONSTRAINT `f_prendaUsuario_usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `fk_prendaUsuario_prenda` FOREIGN KEY (`idprenda`) REFERENCES `prenda` (`id`)
) 



