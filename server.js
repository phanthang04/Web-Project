const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require("./src/routes/web");
const { getCategory } = require('./src/assets/data');
const { getProducts } = require('./src/assets/data');

app.use(morgan('combined'));

// Dữ liệu bất đồng bộ
app.use(async (req, res, next) => {
    try {
        // Đảm bảo lấy dữ liệu bất đồng bộ
        const category = await getCategory();
        const product = await getProducts();
        res.locals.category = category;
        res.locals.product = product;
        next();  // Chuyển đến middleware tiếp theo
    } catch (error) {
        next(error);  // Chuyển lỗi tới middleware xử lý lỗi
    }
});

// Đặt view engine là ejs
app.set('view engine', 'ejs');

// Đảm bảo rằng express sẽ phục vụ tất cả các tệp trong thư mục 'assets'
app.use('/assets', express.static(path.join(__dirname, './src/assets')));  // Thư mục chứa image và css

// Đặt thư mục views
app.set('views', path.join(__dirname, './src/views'));

// Gọi các route
route(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Open http://localhost:3000');
});
