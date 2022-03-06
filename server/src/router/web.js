import express from "express";
import HomeController from "../controllers/homeController";


let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', HomeController.getHomePage)


    router.get('/ndl', (req, res) => {
        return res.send('rest api ndl ')
    })




    return app.use("/", router);
}

module.exports = initWebRouters;