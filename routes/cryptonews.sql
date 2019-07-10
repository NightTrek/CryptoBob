USE crypto_db;

CREATE TABLE cryptoNews (
  id INT NOT NULL AUTO_INCREMENT,
  generalNews VARCHAR(45) NULL,
  blockchain VARCHAR(45) NULL,
  mining VARCHAR(45) NULL,
  ico VARCHAR(45) NULL,
  government VARCHAR(45) NULL,
  analysis VARCHAR(45) NULL,
  exchanges VARCHAR(45) NULL,
  currencyType VARCHAR(45) NULL,
 
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

INSERT INTO cryptoNews (category, currencyType, news) 
	VALUES ('generalnews', 'bitcoin', 'Know your "why" in any of your endeavors. That will push you through any wall you hit.');