-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2024 a las 03:25:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `atlas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_secciones`
--

CREATE TABLE `archivos_secciones` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `file` longtext NOT NULL,
  `id_elemento` int(11) DEFAULT NULL,
  `ubicacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos_subsecciones`
--

CREATE TABLE `archivos_subsecciones` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `file` longtext NOT NULL,
  `id_elemento` int(11) DEFAULT NULL,
  `ubicacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `tipo` text NOT NULL,
  `url` text NOT NULL,
  `area` text NOT NULL,
  `mostrar_inicio` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `empresa` text NOT NULL,
  `fijo` text NOT NULL,
  `celular` text NOT NULL,
  `correo` text NOT NULL,
  `estadoIN` text NOT NULL,
  `opcion` text NOT NULL,
  `curso` text DEFAULT NULL,
  `numPersonas` int(11) DEFAULT NULL,
  `infoComplementaria` longtext DEFAULT NULL,
  `estadoOUT` text DEFAULT NULL,
  `requerimientos` longtext DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `duda` longtext DEFAULT NULL,
  `filename` text DEFAULT NULL,
  `area` text NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_secciones`
--

CREATE TABLE `imagenes_secciones` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `file` longtext NOT NULL,
  `id_seccion` int(11) DEFAULT NULL,
  `ubicacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_subsecciones`
--

CREATE TABLE `imagenes_subsecciones` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `file` longtext NOT NULL,
  `id_subseccion` int(11) DEFAULT NULL,
  `ubicacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `url` text DEFAULT NULL,
  `descripcion` longtext NOT NULL,
  `mostrar_inicio` tinyint(1) DEFAULT NULL,
  `imagen_inicio` longtext DEFAULT NULL,
  `btn_pdf` tinyint(1) DEFAULT NULL,
  `btn_contacto` tinyint(1) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `escolaridad` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `division` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subsecciones`
--

CREATE TABLE `subsecciones` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `url` text NOT NULL,
  `descripcion` longtext NOT NULL,
  `btn_pdf` tinyint(1) DEFAULT NULL,
  `btn_contacto` tinyint(1) DEFAULT NULL,
  `seccion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos_secciones`
--
ALTER TABLE `archivos_secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_elemento` (`id_elemento`);

--
-- Indices de la tabla `archivos_subsecciones`
--
ALTER TABLE `archivos_subsecciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_elemento` (`id_elemento`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes_secciones`
--
ALTER TABLE `imagenes_secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_seccion` (`id_seccion`);

--
-- Indices de la tabla `imagenes_subsecciones`
--
ALTER TABLE `imagenes_subsecciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_subseccion` (`id_subseccion`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria` (`categoria`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subsecciones`
--
ALTER TABLE `subsecciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seccion` (`seccion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivos_secciones`
--
ALTER TABLE `archivos_secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `archivos_subsecciones`
--
ALTER TABLE `archivos_subsecciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagenes_secciones`
--
ALTER TABLE `imagenes_secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagenes_subsecciones`
--
ALTER TABLE `imagenes_subsecciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subsecciones`
--
ALTER TABLE `subsecciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivos_secciones`
--
ALTER TABLE `archivos_secciones`
  ADD CONSTRAINT `archivos_secciones_ibfk_1` FOREIGN KEY (`id_elemento`) REFERENCES `secciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `archivos_subsecciones`
--
ALTER TABLE `archivos_subsecciones`
  ADD CONSTRAINT `archivos_subsecciones_ibfk_1` FOREIGN KEY (`id_elemento`) REFERENCES `subsecciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagenes_secciones`
--
ALTER TABLE `imagenes_secciones`
  ADD CONSTRAINT `imagenes_secciones_ibfk_1` FOREIGN KEY (`id_seccion`) REFERENCES `secciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `imagenes_subsecciones`
--
ALTER TABLE `imagenes_subsecciones`
  ADD CONSTRAINT `imagenes_subsecciones_ibfk_1` FOREIGN KEY (`id_subseccion`) REFERENCES `subsecciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD CONSTRAINT `secciones_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subsecciones`
--
ALTER TABLE `subsecciones`
  ADD CONSTRAINT `subsecciones_ibfk_1` FOREIGN KEY (`seccion`) REFERENCES `secciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
