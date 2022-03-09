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
    //api get all user
    router.get('/api/get-all-users', UserController.handleGetAllUsers)
    // api get all Book
    router.get('/api/get-all-books', UserController.handleGetAllBooks)
    //api get all Loai
    router.get('/api/get-all-loais', UserController.handleGetAllLoais)

    return app.use("/", router);
}

module.exports = initWebRouters;