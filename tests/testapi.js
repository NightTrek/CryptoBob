const mysql = require("mysql2/promise");
const sql = require('../controlers/mysql2ORMController');

async function main() {
    const connection = await sql.GetConnection();
    console.log("connection")
    // mysql.createConnection({
    //     host: "localhost",
    //     port: 3306,
    //     user: "root",
    //     password: "password",
    //     database: "crypto_db"
    // });

    const CryptoNewsAPI = require('crypto-news-api').default

    // Connect to the CryptoControl API
    const Api = new CryptoNewsAPI('350f0e147c4977f54bd43cd8c5b7f5a8')

    // how to reinstall
    // Node.js: npm install --save crypto-news-api

    // Connect to a self-hosted proxy server (to improve performance) that points to cryptocontrol.io
    // const ProxyApi = new CryptoNewsAPI('API_KEY_HERE', 'http://cryptocontrol_proxy/api/v1/public')


    // Enable the sentiment datapoints
    // Api.enableSentiment()

    // Get top news
    Api.getTopNews()
        .then(function (articles) {
            let index = 0
            console.log(articles[0])

            function next() {
                if (index === articles.length) {
                    index = 0
                    return
                }
                else {
                    doInsert()
                }
            }

            function doInsert() {
                console.log(articles[index].primaryCategory);
                connection.query("INSERT INTO cryptoNews (_id, category, title, description, url) VALUES (?,?,?,?,?)", [
                    articles[index]._id,
                    articles[index].primaryCategory,
                    articles[index].title,
                    articles[index].description.substring(0, 200),
                    articles[index].url,
                ]).then(function () {
                    index++
                    next()
                })
            }

            doInsert()
        })
        .catch(function (error) { console.log("error") })
}

main()
/*
+-------------+------------------------------------------------------------------------+------+-----+---------+----------------+
| Field       | Type                                                                   | Null | Key | Default | Extra          |
+-------------+------------------------------------------------------------------------+------+-----+---------+----------------+
| id          | int(11)                                                                | NO   | PRI | NULL    | auto_increment |
| _id         | varchar(255)                                                           | YES  |     | NULL    |                |
| category    | enum('Analysis','Blockchain','Exchanges','Government','Mining','ICOs') | YES  |     | NULL    |                |
| title       | varchar(255)                                                           | YES  |     | NULL    |                |
| description | tinytext                                                               | YES  |     | NULL    |                |
| url         | varchar(255)                                                           | YES  |     | NULL    |                |
+-------------+------------------------------------------------------------------------+------+-----+---------+----------------+

DROP TABLE cryptoNews;
CREATE TABLE cryptoNews (
    id INT NOT NULL AUTO_INCREMENT,
    _id VARCHAR(255),
    category ENUM('Analysis', 'Blockchain', 'Exchanges', 'Government', 'Mining', 'ICOs', 'General'),
    title VARCHAR(255),
    description TINYTEXT,
    url VARCHAR(255),
  PRIMARY KEY (id)
);
*/