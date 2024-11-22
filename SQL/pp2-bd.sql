-- Crea la base de datos
CREATE DATABASE RegisterLoginApp;
GO

-- Seleccionar la base de datos
USE RegisterLoginApp;
GO

-- Crea la tabla Users
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fullname NVARCHAR(255) NOT NULL,
    username NVARCHAR(255) NOT NULL,
    password NVARCHAR(255) NOT NULL
);
GO