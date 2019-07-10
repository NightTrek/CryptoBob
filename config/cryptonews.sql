USE crypto_db;


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

INSERT INTO cryptoNews (category, currencyType, news) 
	VALUES ('generalnews', 'bitcoin', 'Know your "why" in any of your endeavors. That will push you through any wall you hit.');