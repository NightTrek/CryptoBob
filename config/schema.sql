
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
    foreignId VARCHAR(100),
    high VARCHAR(100) NOT NULL,
    low VARCHAR(100) NOT NULL,
    Volume VARCHAR(100) NOT NULL,
    last VARCHAR(100) NOT NULL,
    unixTimestamp VARCHAR(100) NOT NULL,
    bid VARCHAR(100) NOT NULL, 
    ask VARCHAR(100) NOT NULL,
    openBuys VARCHAR(100) NOT NULL,
    openSells VARCHAR(100) NOT NULL,
    prevDay VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE btc (
    id INTEGER AUTO_INCREMENT,
    foreignId VARCHAR(100),
    high VARCHAR(100) NOT NULL,
    low VARCHAR(100) NOT NULL,
    Volume VARCHAR(100) NOT NULL,
    last VARCHAR(100) NOT NULL,
    unixTimestamp VARCHAR(100) NOT NULL,
    bid VARCHAR(100) NOT NULL, 
    ask VARCHAR(100) NOT NULL,
    openBuys VARCHAR(100) NOT NULL,
    openSells VARCHAR(100) NOT NULL,
    prevDay VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE usd (
    id INTEGER AUTO_INCREMENT,
    foreignId VARCHAR(100),
    high VARCHAR(100) NOT NULL,
    low VARCHAR(100) NOT NULL,
    Volume VARCHAR(100) NOT NULL,
    last VARCHAR(100) NOT NULL,
    unixTimestamp VARCHAR(100) NOT NULL,
    bid VARCHAR(100) NOT NULL, 
    ask VARCHAR(100) NOT NULL,
    openBuys VARCHAR(100) NOT NULL,
    openSells VARCHAR(100) NOT NULL,
    prevDay VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

