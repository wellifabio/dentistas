require('dotenv').config();
const mysql = require("mysql");

//Pattern Singleton (Ponto único de conexão com BD)
class Connect {
    static con = mysql.createConnection({
        host: 'localhost',
        database: process.env.MYSQL_DB || 'tratamentos',
        user: process.env.MYSQL_USER || 'root'
    });
}

const con = Connect.con;

module.exports = con;