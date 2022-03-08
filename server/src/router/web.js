import express from "express";
import HomeController from "../controllers/homeController";
import UserController from "../controllers/UserController"

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', HomeController.getHomePage)


    router.get('/ndl', (req, res) => {
        return res.send('rest api ndl ')
    })


    //api get user with login
    router.post('/api/login', UserController.handleLogin)




    return app.use("/", router);
}

module.exports = initWebRouters;