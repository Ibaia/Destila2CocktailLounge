-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2020 a las 14:52:15
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `destilados`
--
CREATE DATABASE IF NOT EXISTS `destilados` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `destilados`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `selectAllCocteles` ()  NO SQL
SELECT * FROM bebidas WHERE bebidas.tipo=2$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `selectAllLicores` ()  NO SQL
SELECT * FROM bebidas WHERE bebidas.tipo=1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `selectAllPacks` ()  NO SQL
SELECT * FROM packs$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `selectAllReservas` ()  NO SQL
SELECT * FROM reservas$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spBebidas` ()  NO SQL
SELECT bebidas.idBebida, bebidas.nombre, bebidas.descripcion, bebidas.img, tipos.nombreTipo 
FROM bebidas
INNER JOIN tipos on bebidas.tipo= tipos.idTipo$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteReserva` (IN `pIdReserva` INT)  NO SQL
DELETE FROM reservas WHERE reservas.idReserva=pIdReserva$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spDeleteUser` (IN `idUser` INT)  NO SQL
DELETE FROM usuarios WHERE usuarios.idUsuario=idUser$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertReserva` (IN `pFecha` DATE, IN `pIdUsu` VARCHAR(50), IN `pPack` VARCHAR(50))  NO SQL
INSERT INTO reservas (reservas.fecha, reservas.idUsuario, reservas.idPack)
VALUES (pFecha, pIdUsu, pPack)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertUser` (IN `pNombre` VARCHAR(50), IN `pApellido` VARCHAR(50), IN `pUsuario` VARCHAR(50), IN `pContrasena` VARCHAR(50), IN `pNumTel` INT, IN `pEmail` VARCHAR(50), IN `pDni` VARCHAR(20))  NO SQL
INSERT INTO usuarios (usuarios.nombre, usuarios.apellido, usuarios.usuario, usuarios.pass, usuarios.telefono, usuarios.email, usuarios.dni, usuarios.tipo )
VALUES(pNombre, pApellido, pUsuario, pContrasena, pNumTel, pEmail, pDni, "0")$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spReservas` ()  NO SQL
SELECT reservas.idReserva, reservas.fecha, usuarios.usuario, packs.nombrePack 
FROM reservas
INNER JOIN usuarios on reservas.idUsuario=usuarios.idUsuario
INNER JOIN packs on reservas.idPack=packs.idPack$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateBebida` (IN `pId` INT, IN `pNombre` VARCHAR(50), IN `pDescipcion` VARCHAR(100))  NO SQL
UPDATE `bebidas` SET
bebidas.nombre=pNombre, bebidas.descripcion=pDescipcion
WHERE bebidas.idBebida=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spUpdateUser` (IN `pId` INT, IN `pNombre` VARCHAR(50), IN `pApellido` VARCHAR(50), IN `pUsuario` VARCHAR(50), IN `pPass` VARCHAR(50), IN `pNumtel` INT, IN `pEmail` VARCHAR(50), IN `pDni` VARCHAR(50))  NO SQL
UPDATE `usuarios` SET `nombre`=pNombre,`apellido`=pApellido,`usuario`=pUsuario, `pass`=pPass, `telefono`=pNumtel, `email`=pEmail, `dni`=pDni  WHERE `idUsuario`=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spUsuarios` ()  NO SQL
SELECT * FROM usuarios$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bebidas`
--

CREATE TABLE `bebidas` (
  `idBebida` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `bebidas`
--

INSERT INTO `bebidas` (`idBebida`, `nombre`, `descripcion`, `img`, `tipo`) VALUES
(1, 'Fuego Valyrio', 'Durante años los mejores alquimistas han trabajado sin descanso para destilar nuestro Fuego Valyrio.', 'img/fuegovalyrio.jpg', 1),
(2, 'Mr Black', 'MR BLACK fue creado para ofrecer el sabor más importante del genuino buen café en cócteles y bebidas mezcladas, sin la necesidad de café fresco. Utilizando el método de goteo en frío, Philip Moore y Tom Baker de MR BLACK han creado un rico e intenso licor de café que realmente sabe como café; No como caramelos, tequila u otros sabores añadidos. MR BLACK se hace en Australia.\r\n', 'img/mrblack.jpg', 1),
(3, 'Hennessy X.O.', 'Un cognac elegante y complejo, que combina una personalidad arrolladora con un estilo único. Este cognac extra añejado fue creado en 1870 por Maurice Hennessy para su íntimo círculo de amigos. Un centenar de años después, el peculiar assemblage con más de 100 aguardientes, algunos de ellos envejecidos durante 30 años, sigue siendo la referencia, el original Xtra Old. Es excepcionalmente refinado y con un equilibrio natural: delicado, estructurado y generoso. Es, indiscutiblemente, un Cognac para disfrutar en ocasiones muy especiales. \r\n', 'img/hennessy.jpg', 1),
(4, 'Tatratea', 'Licor Tatratea Original Tea consiste únicamente en ingredientes naturales: macerados de té, destilados de frutas, extractos de hierbas y frutas, el mejor espíritu y agua pura de montaña. Se presenta en una botella de moda única. El origen del Tatratea se puede encontrar desde hace muchos años en la historia eslovaca. La vida era difícil en aquella época. La gente apreciaba el momento y el encuentro entre amigos, quedando cada vez más animados junto a un vaso de algo bueno, algo fuerte.\r\n', 'img/tatratea.jpg', 1),
(5, 'Libellis Magic Gin', 'Descubre la magia de Libellis Magic Gin, la ginebra premium que dejará a tus visitas sin habla. Observa como esta ginebra cambia de color al mezclarse con tónica o limón, pasando de un azul intenso a un púrpura brillante gracias al colorante natural de la flor de clitoria.\r\n', 'img/libellis.jpg', 1),
(6, 'Kvass', 'Kvass es una bebida tradicional eslava y báltica. Cuando el kvas esta hecho como corresponde (fermentado por lactobacterias), confiere beneficios para la salud del consumidor. La bebida es dulce-acida y se elabora a base de harina y malta (centeno, cebada) o de pan de centeno seco, a veces con la adición de hierbas buenas, miel, especias; También se prepara con remolacha, fruta, flores, hierbas. El Kvas no sólo se utiliza como bebida, sino que también es la base de las sopas frías clásicas de la cocina rusa, conocidas como \"okroshka\". Kvas es muy popular en Rusia, Ucrania y otros países del Este de Europa. \r\n', 'img/kvass.jpg', 1),
(7, 'Becherovka', 'Becherovka 1L es un licor destilado a partir de 32 hierbas y raíces de sabor ligeramente amargo. Se fabrica en la ciudad norteña de Bohemia conocida como Karlovy Vary, en la República Checa. Se recomienda servirlo de aperitivo o de digestivo. Sabe mejor tomado solo, muy frío, casi congelado, o en todo caso mezclado con tónica.\r\n', 'img/becherovka.jpg', 1),
(8, 'Riga Black Basalm', 'El Bálsamo Negro de Riga es un licor de hierbas tradicional de Letonia hecho con muchos ingredientes naturales diferentes mezclados en vodka puro, resultando una bebida con un contenido de alcohol del 45% por volumen. Se puede beber solo, con hielo o mezclado con aguardiente, akvavit, o vodka; caliente, en té, café o jugo de grosellas; mezclado con soda o gaseosa, o en variedad de cócteles. En ocasiones se usa para cubrir helados. La bebida en sí es negra y muy amarga, pero con un dulzor característico.\r\n', 'img/rigablackbalsam.jpg', 1),
(9, 'Hibiki Suntory Whisky', 'La elaboración del whisky japonés empezó a fines del siglo XIX, por el año 1870, pero era realizada de manera artesanal, no es hasta el año 1924 en que se funda la primera destilería japonesa de whisky, Yamazaki. Pero si hablamos de whisky y Japón, no debemos dejar de mencionar a Shinjiro Torii y a Taketsuru Masataka, ambas figuras relevantes del whisky japonés. Torii era un farmacéutico, quien sería el fundador de Kotobukiya, la que luego se convertiría en la importante firma Suntory, él empezó como importador, centrándose en vinos traídos de Portugal, pero poco a poco se dio cuenta que no era suficiente, es ahí donde empezó a elaborar un whisky japonés para los japoneses. En el año 1923 funda Yamazaki, hecho que le valió en apelativo del “padre del whisky japonés”.', 'img/hibiki.jpg', 1),
(10, 'Calavera Absinthe Noir', 'Absenta es una bebida alcohólica de ligero sabor anisado, con un fondo amargo de tintes complejos debido a la contribución de las hierbas que contiene, principalmente Artemisia absinthium. Cuando se le añade agua fría y azúcar, la bebida se transforma en la esencia lechosa louche. Comenzó siendo un elixir en Suiza, pero donde se hizo popular fue en Francia debido a la asociación entre los artistas y escritores que tomaban esta bebida en el París de finales del siglo XIX hasta que se prohibió su producción en 1915. La marca más popular durante el siglo XIX fue Pernod Fils hasta su prohibición. Durante la Belle Époque el nombre se convirtió en sinónimo de la bebida y la marca representó el estándar de calidad de facto por el cual se juzgaba a todas las demás.', 'img/noir.jpg', 1),
(11, 'Long Island Iced Tea', 'Un Té Helado \'Long Island\' es un tipo de bebida alcohólica mezclada hecha típicamente con, entre otros, tequila, vodka, ron blanco, triple seco, y ginebra. Se llama así debido a su parecido con el color y el sabor del Té helado (Camellia sinensis).  Una versión popular mezcla partes iguales de vodka, ginebra, tequila, ron, y triple seco con 1½ partes de sour mix y un toque de refresco de cola, lo cual le da a la bebida el mismo color ámbar de su fundador.\r\n', 'img/LongIslandIcedTea.jpg', 2),
(12, 'Mai Tai', 'El Mai Tai es un cóctel supuestamente inventado en el restaurante Trader Vic, en Oakland, California, en 1944. El amigo y rival de Trader Vic, Don the Beachcomber, insistía en haber creado el trago primero en 1933 en su, entonces, pequeño bar recién abierto (hoy en día un famoso restaurante) en Hollywood. La receta del Beachcomber es mucho más complicada que la del Trader, y tiene un sabor muy diferente. \"Maita\'i\" es la palabra tahitiana para \"el mejor\". La historia del Trader Vic sobre su invención es que el trader (comerciante en inglés) Victor J.  Bergeron lo creó una tarde para unos amigos que lo visitaban de Tahití. Uno de ellos lo probó y dijo \"Maitai roa!\" (\"Lo mejor!\"), y de ahí el nombre.\r\n', 'img/maitai.jpg', 2),
(13, 'Sex On The Beach', 'Sex on the Beach (Sexo en la Playa) es un cóctel con múltiples variaciones. Hay dos tipos en general: \r\n-El primero se hace a base de vodka, licor de melocotón, zumo de naranja y zumo de arándanos. Este es el cocktail oficial de la International Bartenders Association.\r\n-El segundo está hecho a base de vodka, Chambord, Midori, zumo de piña y zumo de arándanos. Se creó en el restaurante TGI Friday\'s y está incluido en la Mr. Boston Official Bartender\'s Guide (Guía Oficial Mr. Boston para barmans). Los ingredientes se mezclan con hielo en una coctelera y se sirven en un vaso Highball. En ocasiones puede servirse en pequeñas cantidades como un chupito.\r\n', 'img/sexonthebeach.jpg', 2),
(14, 'Daiquiri', 'El daiquiri o daiquirí es un tipo de cóctel hecho a partir de ron blanco y zumo de limón criollo o lima. Existen muchas variantes. En su versión más antigua este cóctel se prepara con ron blanco y zumo de limón, pero hoy en día su gran difusión ha hecho que se puedan encontrar distintos tipos de este combinado. El Daiquiri tiene sus orígenes en Santiago de Cuba, por lo que suele ser preparado con ron cubano. En las inmediaciones de Santiago de Cuba existía una mina de hierro donde trabajaba un ingeniero estadounidense, llamado Jennings Cox, conocido por ser el padre del cóctel Daiquiri: ya que una vez que se acababa la ginebra, el ron era la bebida que se encontraba con facilidad en la zona. Cuando un día el ingeniero Cox recibió visitas de su país no encontró ginebra y entonces utilizó ro', 'img/daiquiri.jpeg', 2),
(15, 'Moscow Mule', 'El Moscow Mule («Mula de Moscú») es un cóctel hecho con vodka, cerveza de jengibre y jugo de lima, adornado con una rodaja de lima. Es un tipo de buck o mule, cócteles a base de lima, ginger ale o ginger beer y alguna bebida alcohólica. Por ello a veces se le llama vodka buck.El Moscow Mule se sirve popularmente en una taza de cobre, que toma la temperatura fría del líquido. Algunos avisos de salud pública recomiendan que las tazas de cobre estén chapadas con níquel o acero inoxidable en el interior y el labio, pero se ha discutido si el tiempo y la acidez involucrados en el consumo de Moscow Mule serían suficientes para lixiviar los 30 miligramos de cobre por litro necesarios para causar toxicidad por cobre.\r\n', 'img/moscowmule.jpg', 2),
(16, 'Whisky Sour', 'El Whisky Sour (o Whiskey Sour) es un famoso cóctel de origen en Iquique (Chile) sour que contiene Bourbon whisky, jugo de limón, azúcar y, opcionalmente, clara de huevo. Se agita y se sirve directamente o sobre hielo.Tradicionalmente se adorna con una rodaja de naranja y una cereza maraschino.La primera referencia historica del whiskey sour fue publicado en un diario estadosunidense de Wisconsin, el Waukesha Plain Dealer, en 1870.Según el diario peruano \"El Comercio de Iquique\", publicado entre 1874 y 1879, el nombre y la preparación fue una invención del mayordomo inglés Eliott Stubb.\r\n', 'img/whiskysour.jpg', 2),
(17, 'Manhattan', 'El Manhattan es un cóctel clásico a base de whiskey (de centeno o canadiense) y vermut rojo, que se suele tomar como aperitivo.El Manhattan seco (en inglés, Dry Manhattan) se prepara con vermut seco y se adorna con una rodaja de limón.El Manhattan medio (Medium Manhattan) o perfecto (Perfect Manhattan) se prepara a partes iguales con vermut rojo y seco, y se adorna con una cereza o guinda y una rodaja de limón.Por su parte, el Manhattan dulce (Sweet Manhattan) lleva un poco de marrasquino junto con el vermut rojo (en algunos casos se puede simplemente omitir el bitter angostura) y por su sabor dulce se suele tomar más bien como digestivo en lugar de como aperitivo.Lo más probable, según Difford, es que, aunque los primeros libros sobre bares sólo hablaban de whiskey a secas, la receta original se hiciera con whiskey de centeno, que era el más habitual en Nueva York. También señala que aunque actualmente es común usar bourbon los puristas comienzan a recuperar el whiskey de centeno.Relacionados con el Manhattan están el Rob Roy, en él se utiliza whisky escocés en vez del de centeno, y el Harvard, en el que se substituye por brandy.\r\nOtra variante puede ser el Manhattan cubano, el cual se prepara con ron añejo en lugar de whisky.\r\n', 'img/manhattan.jpg', 2),
(18, 'Margarita', 'La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa. La bebida se sirve sacudiendo el hielo (en las rocas), mezclado con hielo (margarita frozen), o sin hielo (hacia arriba). Aunque se ha vuelto aceptable servir una margarita en una amplia variedad de recipientes de vidrio, que van desde cócteles y copas de vino e incluso grandes goletas, la bebida se sirve tradicionalmente en el vaso de margarita del mismo nombre, una variante de diámetro escalonada de un cóctel vidrio o copa de champán, algo parecido a un sombrero invertido.\r\n', 'img/margarita.jpg', 1),
(19, 'Old Fashioned', 'El Old Fashioned (a la antigua o tradicional en inglés) es un cóctel a base de whiskey rye (de centeno) o bourbon (de maíz). El clásico vaso bajo de whisky (vaso Old Fashioned) lleva el nombre de este trago.El viejo libro del Bar Waldorf-Astoria de 1931 le da el crédito de su invención, o al menos su inspiración, al Coronel James Pepper, propietario del old 1776 whiskey. El coronel era miembro del club donde por primera vez se preparó la mezcla.\r\n', 'img/oldfashioned.jpg', 2),
(20, 'Negroni', 'El Negroni es un cóctel de origen italiano preparado a base de Gin, Campari y Vermú rojo. \r\nEs uno de los combinados más famosos del mundo que fue inventado en 1919 por el Conde Negroni, al añadir a su Americano un toque de ginebra en lugar de soda, en honor a su último viaje a Londres. Desde el año 2013 la revista Imbibe organiza junto a Campari la Negroni Week un evento solidario que celebra el nacimiento de uno de los mejores cócteles del mundo para donar los ingresos recaudados a organizaciones benéficas de todo el mundo.Durante una semana de junio, la barra de los bares y restaurantes que participan en la campaña sirven el negroni clásico y algunas variantes de este cóctel para donar una parte de los ingresos recaudados a alguno de los proyectos solidarios. De los 120 locales que participaron en la primera edición, durante la última se sumaron más de 7.700 bares que en su conjunto recaudaron más de 1,5 millones de dólares para causas benéficas.\r\n', 'img/negroni.jpg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `packs`
--

CREATE TABLE `packs` (
  `idPack` int(11) NOT NULL,
  `nombrePack` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `packs`
--

INSERT INTO `packs` (`idPack`, `nombrePack`, `precio`) VALUES
(1, 'Pack 5 Degustaciones', 25),
(2, 'Pack 10 Degustaciones', 40),
(3, 'Pack 10 Cocteles', 70);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `idReserva` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idPack` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`idReserva`, `fecha`, `idUsuario`, `idPack`) VALUES
(1, '2020-02-21', 1, 3),
(2, '2020-02-22', 2, 1),
(4, '2020-05-29', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos`
--

CREATE TABLE `tipos` (
  `idTipo` int(11) NOT NULL,
  `nombreTipo` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipos`
--

INSERT INTO `tipos` (`idTipo`, `nombreTipo`) VALUES
(1, 'Bebida Espirituosa'),
(2, 'Coctel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `usuario` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` int(9) NOT NULL,
  `dni` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` tinyint(4) NOT NULL,
  `pass` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `usuario`, `nombre`, `apellido`, `telefono`, `dni`, `email`, `tipo`, `pass`) VALUES
(1, 'aLopez', 'Adrian', 'Lopez', 123456789, '12345678A', 'aLopez@destila2.com', 1, '1234'),
(2, 'iAcha', 'Ibai', 'Acha', 123456789, '12345678A', 'iAcha@destila2.com', 0, '1234'),
(14, 'eAcha', 'Eneritz', 'Acha', 652145978, '51248632B', 'eAcha@gmail.com', 0, '1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bebidas`
--
ALTER TABLE `bebidas`
  ADD PRIMARY KEY (`idBebida`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `packs`
--
ALTER TABLE `packs`
  ADD PRIMARY KEY (`idPack`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`idReserva`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idPack` (`idPack`);

--
-- Indices de la tabla `tipos`
--
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`idTipo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bebidas`
--
ALTER TABLE `bebidas`
  MODIFY `idBebida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `packs`
--
ALTER TABLE `packs`
  MODIFY `idPack` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipos`
--
ALTER TABLE `tipos`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bebidas`
--
ALTER TABLE `bebidas`
  ADD CONSTRAINT `bebidas_ibfk_1` FOREIGN KEY (`tipo`) REFERENCES `tipos` (`idTipo`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`idPack`) REFERENCES `packs` (`idPack`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
