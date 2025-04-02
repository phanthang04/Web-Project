const express = require("express");
const router = express.Router();

const homeController = require("../controllers/HomeController")

router.get("/infor-about-tatapple", homeController.infor);
router.get('/search', homeController.search);
router.get("/", homeController.index);

module.exports = router;
