
DROP DATABASE IF EXISTS cryptobob_db;

CREATE DATABASE cryptobob_db;

USE cryptobob_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT,
    userName VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    default_currency VARCHAR(100) NOT NULL,
    watchlistArray VARCHAR(100) NOT NULL,
    exchangeSecret VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE currencies (
    id INTEGER AUTO_INCREMENT,
    currency VARCHAR(100) NOT NULL,
    currencyLong VARCHAR(100) NOT NULL,
    txfee VARCHAR(100) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE eth (
    id INTEGER AUTO_INCREMENT,
    foreignId INTEGER,
    high FLOAT NOT NULL,
    low FLOAT NOT NULL,
    Volume FLOAT NOT NULL,
    last FLOAT NOT NULL,
    unixTimestamp INTEGER NOT NULL,
    bid FLOAT NOT NULL, 
    ask FLOAT NOT NULL,
    openBuys FLOAT NOT NULL,
    openSells FLOAT NOT NULL,
    prevDay FLOAT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE btc (
    id INTEGER AUTO_INCREMENT,
    foreignId INTEGER,
    high FLOAT NOT NULL,
    low FLOAT NOT NULL,
    Volume FLOAT NOT NULL,
    last FLOAT NOT NULL,
    unixTimestamp INTEGER NOT NULL,
    bid FLOAT NOT NULL, 
    ask FLOAT NOT NULL,
    openBuys FLOAT NOT NULL,
    openSells FLOAT NOT NULL,
    prevDay FLOAT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE usd (
    id INTEGER AUTO_INCREMENT,
    foreignId INTEGER,
    high FLOAT NOT NULL,
    low FLOAT NOT NULL,
    Volume FLOAT NOT NULL,
    last FLOAT NOT NULL,
    unixTimestamp INTEGER NOT NULL,
    bid FLOAT NOT NULL, 
    ask FLOAT NOT NULL,
    openBuys FLOAT NOT NULL,
    openSells FLOAT NOT NULL,
    prevDay FLOAT NOT NULL,
    PRIMARY KEY (id)
);

