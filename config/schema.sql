
DROP DATABASE IF EXISTS cryptobob_db;

CREATE DATABASE cryptobob_db;

USE cryptobob_db;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT,
    userName VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(1000) NOT NULL,
    default_currency VARCHAR(100),
    watchlistArray VARCHAR(500),
    notificationsArray VARCHAR(500),
    exchangeSecret VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE notifications (
    id INTEGER AUTO_INCREMENT,
    data VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
)

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
    exchageId VARCHAR(100),
    high VARCHAR(100),
    low VARCHAR(100),
    Volume VARCHAR(100),
    last VARCHAR(100),
    unixTimestamp VARCHAR(100),
    bid VARCHAR(100), 
    ask VARCHAR(100),
    openBuys VARCHAR(100),
    openSells VARCHAR(100),
    prevDay VARCHAR(100),
    2dayMAVG VARCHAR(100),
    3dayMAVG VARCHAR(100),
    5dayMAVG VARCHAR(100),
    8dayMAVG VARCHAR(100),
    13dayMAVG VARCHAR(100),
    21dayMAVG VARCHAR(100),
    34dayMAVG VARCHAR(100),
    55dayMAVG VARCHAR(100),
    89dayMAVG VARCHAR(100),
    144dayMAVG VARCHAR(100),
    233dayMAVG VARCHAR(100),
    377dayMAVG VARCHAR(100),
    610dayMAVG VARCHAR(100),

    PRIMARY KEY (id)
);

CREATE TABLE btc (
    id INTEGER AUTO_INCREMENT,
    foreignId VARCHAR(100),
    exchageId VARCHAR(100),
    high VARCHAR(100),
    low VARCHAR(100),
    Volume VARCHAR(100),
    last VARCHAR(100),
    unixTimestamp VARCHAR(100),
    bid VARCHAR(100), 
    ask VARCHAR(100),
    openBuys VARCHAR(100),
    openSells VARCHAR(100),
    prevDay VARCHAR(100),
    2dayMAVG VARCHAR(100),
    3dayMAVG VARCHAR(100),
    5dayMAVG VARCHAR(100),
    8dayMAVG VARCHAR(100),
    13dayMAVG VARCHAR(100),
    21dayMAVG VARCHAR(100),
    34dayMAVG VARCHAR(100),
    55dayMAVG VARCHAR(100),
    89dayMAVG VARCHAR(100),
    144dayMAVG VARCHAR(100),
    233dayMAVG VARCHAR(100),
    377dayMAVG VARCHAR(100),
    610dayMAVG VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE usd (
    id INTEGER AUTO_INCREMENT,
    foreignId VARCHAR(100),
    exchageId VARCHAR(100),
    high VARCHAR(100),
    low VARCHAR(100),
    Volume VARCHAR(100),
    last VARCHAR(100),
    unixTimestamp VARCHAR(100),
    bid VARCHAR(100), 
    ask VARCHAR(100),
    openBuys VARCHAR(100),
    openSells VARCHAR(100),
    prevDay VARCHAR(100),
    2dayMAVG VARCHAR(100),
    3dayMAVG VARCHAR(100),
    5dayMAVG VARCHAR(100),
    8dayMAVG VARCHAR(100),
    13dayMAVG VARCHAR(100),
    21dayMAVG VARCHAR(100),
    34dayMAVG VARCHAR(100),
    55dayMAVG VARCHAR(100),
    89dayMAVG VARCHAR(100),
    144dayMAVG VARCHAR(100),
    233dayMAVG VARCHAR(100),
    377dayMAVG VARCHAR(100),
    610dayMAVG VARCHAR(100),
    PRIMARY KEY (id)
);


DROP TABLE cryptoNews;
CREATE TABLE cryptoNews (
    id INT NOT NULL AUTO_INCREMENT,
    _id VARCHAR(255),
    category ENUM('Analysis', 'Blockchain', 'Exchanges', 'Government', 'Mining', 'ICOs'),
    title VARCHAR(255),
    description TINYTEXT,
    url VARCHAR(255),
  PRIMARY KEY (id)
);

