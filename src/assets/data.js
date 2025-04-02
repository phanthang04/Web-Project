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

function getCategory() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM category", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

function getProducts() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
        });
    });
}

function getDetailProduct(){}



module.exports = {
    db,
    getCategory,
    getDetailProduct,
    getProducts
};
