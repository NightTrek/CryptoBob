
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
    tradingpair VARCHAR(100) NOT NULL,
    txfee INTEGER NOT NULL,
    basepair BOOLEAN NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE historicalData (
    id INTEGER AUTO_INCREMENT,
    time VARCHAR(100) NOT NULL,
    tradingpair VARCHAR(100) NOT NULL,
    average INTEGER NOT NULL,
    high INTEGER NOT NULL,
    low INTEGER NOT NULL,
    buys INTEGER NOT NULL,
    sells INTEGER NOT NULL,
    volume INTEGER NOT NULL,
    PRIMARY KEY (id) 
);



