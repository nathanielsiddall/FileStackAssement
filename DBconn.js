let mysql = require('mysql');

export function DBconn(sqlQuery) {

    let con = mysql.createConnection({
    host: "localhost",
    user: "filestack",
    password: "password"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
    });
}