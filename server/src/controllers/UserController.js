import UserService from '../services/UserService'


let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'

        })
    }
    let userData = await UserService.handleUserLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
let handleGetAllUsers = async (req, res) => {
    //let id = req.body.id;// Truyền ALL để lấy tất cả || id để lấy cụ thể
    let users = await UserService.getAllUsers();
    return res.status(200).json({
        errCode: 0,
        message: 'GET ALL USER SUCCESS',
        users
    })
}
let handleGetAllBooks = async (req, res) => {
    let books = await UserService.getAllBooks();
    return res.status(200).json({
        errCode: 0,
        message: 'GET ALL BOOK SUCCESS',
        books
    })
}
let handleGetAllLoais = async (req, res) => {
    let loais = await UserService.getAllLoais();
    return res.status(200).json({
        errCode: 0,
        message: 'GET ALL LOAI SUCCESS',
        loais
    })
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleGetAllBooks: handleGetAllBooks,
    handleGetAllLoais: handleGetAllLoais,
}