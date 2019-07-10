const mysql = require("mysql2/promise");

async function main() {


    const connection = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "crypto_db"
    });

    const CryptoNewsAPI = require('crypto-news-api').default

    // Connect to the CryptoControl API
    const Api = new CryptoNewsAPI('350f0e147c4977f54bd43cd8c5b7f5a8')

    // Connect to a self-hosted proxy server (to improve performance) that points to cryptocontrol.io
    // const ProxyApi = new CryptoNewsAPI('API_KEY_HERE', 'http://cryptocontrol_proxy/api/v1/public')


    // Enable the sentiment datapoints
    // Api.enableSentiment()

    // Get top news
    Api.getTopNews()
        .then(function (articles) {
            // console.log(articles[0])
            // console.log(articles[0].primaryCategory)
            // console.log(articles[0].title)
            // console.log(articles[0].description.length)
            // console.log(articles[0].url)

            articles.forEach(async (article) => {
                try {
                    await connection.query(
                        "INSERT INTO cryptoNews(_id, category, title, description, url) VALUES (?,?,?,?,?)",
                        [
                            article._id,
                            article.primaryCategory,
                            article.title,
                            article.description.slice(0, 255),
                            article.url
                        ]
                    )

                } catch (error) {
                    console.log(error)
                }
            })
        })
        .catch(function (error) { console.log(error) })

}

main()