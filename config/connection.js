const mysql = require("mysql2/promise");

const GetConnection = async function(){
    try{
        return await mysql.createConnection({
            host: "localhost",
    
            // Your port; if not 3306
            port: 3306,
    
            // Your username
            user: "root",
    
            // Your password
            password: "password",
            database: "wishes_db"
        });
    }
    catch(err){
     throw err;
    }
    
    }


    

module.exports = GetConnection;
