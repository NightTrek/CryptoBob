DROP DATABASE IF EXISTS users_db;

CREATE DATABASE users_db;

USE users_db;

CREATE TABLE Users(
    id INTEGER AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    birthday INTEGER(32) NOT NULL,
    secret VARCHAR(256) NOT NULL,
    Arcade_token INTEGER(10) NOT NULL,
    Raffle_ticket INTEGER(10) NOT NULL,
    game_stats_array = VARCHAR(256)
    PRIMARY KEY (id)
)

