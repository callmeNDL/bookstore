import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.Book.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getHomePage: getHomePage,
}