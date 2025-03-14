const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const db = require("../assets/data");
const port = 3000;

app.use(morgan('combined'));

app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, '../assets/image')));

app.set('views', path.join(__dirname, '../views')); // Chỉnh lại đường dẫn views

app.use('/assets', express.static(path.join(__dirname, '../assets')));

const router = express.Router();

let products = [];

db.query("SELECT * FROM category;", (err, results) => {
    if (err) {
        console.error("Lỗi truy vấn DB:", err);
    } else {
        products = results; // Gán giá trị cố định cho products
        console.log("Products đã được load:", products);
    }
});

// Gán products vào res.locals để dùng ở tất cả EJS
app.use((req, res, next) => {
    res.locals.products = products;
    next();
});

router.get('/', function (req, res) {
    res.render('index');
}); 

router.get('/shopping-cart', function (req, res) {
    res.render('shopping-cart');
});

router.get('/category/iPhone', function (req, res) {
        res.render("iPhone")
});



app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Open http://localhost:3000');
