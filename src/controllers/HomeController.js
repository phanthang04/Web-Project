// controllers/HomeController.js
class HomeController {
    
    index(req, res) {  // Thứ tự đúng: req là tham số đầu tiên, res là tham số thứ hai
        res.render('index');  // Render view 'index.ejs'
    }
    infor(req, res){
        res.render('infor-about-tatapple')
    }
    search(req, res) {
        const keyword = req.query.keyword; 
        
        if (keyword) {
            res.render('searchResults', { keyword })
        } else {
            res.send('Không có từ khóa tìm kiếm');
        }
    }
}

module.exports = new HomeController();  // Khởi tạo đối tượng và xuất khẩu
