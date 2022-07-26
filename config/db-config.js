const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    multipleStatements: true
});


connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    let createUserTable = `create table if not exists users(
        id int primary key auto_increment,
        uid varchar(13) not null,
        first_name varchar(50) not null,
        last_name varchar(50) not null,
        email varchar(100) not null,
        mobile int(10) not null,
        password varchar(50) not null,
        role varchar(20) not null DEFAULT 'admin',
        status varchar(20) not null DEFAULT 'active',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`;
    connection.query(createUserTable, function (error, result) {
        if (error) return console.log(error + "error while creating table...");
        console.log("user table created");
    })
    console.log('Connected to the MySQL server.');
});


module.exports = connection;