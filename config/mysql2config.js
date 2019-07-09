const mysql = require('mysql2/promise');

// all of the methods available 
module.exports = {
    // to get connection, database, password to sql
    GetConnection: async function(db, pass = "password") {
        try {
            return await mysql.createConnection({
                host: "localhost",

                // Your port; if not 3306
                port: 3306,

                // Your username
                user: "root",

                // Your password
                password: password,
                database: db
            });
        } catch (err) {
            throw err;
        }

    },

    // to select all data from a specific table
    selectAllFromTable: async function(con, table) {
        let queryString = "SELECT * FROM ?"
        try {
            // 
            let response = await con.query(queryString, table);
            return new Promise((resolve, reject) => {
                if (response) {
                    resolve(response[0]);
                } else {
                    reject({ err: "MYSQL SERVER ERROR Code:500 in SelectAllFromTable()" })
                }
            })
        } catch (err) {
            throw err;
        }
    },

    // may have to change this depending how the trading pairs look after pulled out of sql
    selectWhere: async function(con, tableInput, colToSearch, valOfCol) {
        let queryString = "SELECT * FROM ?? WHERE ?? = ?";
        try {
            let response = await con.query(queryString, [tableInput, colToSearch, valOfCol]);
            return new Promise((resolve, reject) => {
                if (response) {
                    resolve(response[0]);
                } else {
                    reject({ err: "SQL Sever error code:500 in method selectWhere()" })
                }
            });
        } catch (err) {
            throw err;
        }
    },

    // orders by descending like selecting the tickers by price or volume
    selectAndOrder: function(con, whatToSelect, table, orderCol) {
        let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        try {
            let response = await con.query(queryString, [whatToSelect, table, orderCol]);
            return new Promise((resolve, reject) => {
                if (response) {
                    resolve(response[0]);
                } else {
                    reject({ err: "SQL server response error code:500 in method SelectAndOrder()" })
                }
            });
        } catch (err) {
            throw err;
        }
    },

    findWhoHasMost: function(con, tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
            let queryString =
                "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
            try {
                let response = await con.query(
                    queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol]);
                return new Promise((resolve, reject) => {
                    if (response) {
                        resolve(response[0]);
                    } else {
                        reject({ err: "SQL server Response Error code:500 in method findWhoHasMost()" });
                    }
                });

            } catch (err) {
                throw err;
            }
        }
        //end of methods
}