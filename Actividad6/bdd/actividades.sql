-- Crear la base de datos
CREATE DATABASE basededatos;
USE basededatos;

-- Crear la tabla actividades
CREATE TABLE actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    actividad VARCHAR(255),
    fecha DATE
);
