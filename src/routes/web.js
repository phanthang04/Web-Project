const homeController = require("./homeRoutes")

function router(app){
    app.use("/", homeController)
    // app.use("/login", accountController)
    // app.use()
}

module.exports = router;
