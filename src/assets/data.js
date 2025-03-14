const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tat_applestore"
});

db.connect((err) => {
    if (err) {
        console.error("❌ Lỗi kết nối DB: ", err);
    } else {
        console.log("✅ Kết nối DB thành công!");
    }
});

module.exports = db;
