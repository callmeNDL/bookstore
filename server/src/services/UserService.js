import db from '../models/index';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let userIsExist = await checkUserEmail(email);
            if (userIsExist) {
                //user already exist ( da ton tai email nay)
                //compare password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
                    raw: true
                });
                if (user) {
                    if (password == user.password) {
                        userData.errCode = 0;
                        userData.errMessage = 'Login ok!;';// dang nhap dung
                        delete user.password;
                        userData.user = user
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'wrong password!'// dang nhap sai mat khau
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'Your not exist!'
                }
                resolve(userData);

            } else {
                userData.errCode = 1;
                userData.errMessage = 'Your Email not exist!'
                resolve(userData)
            }
        } catch (error) {
            reject(e);
        }
    })

}
let checkUserEmail = (InputEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: InputEmail }
            });
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(e);
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll();
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}
let getAllBooks = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = await db.Book.findAll();
            resolve(books);
        } catch (error) {
            reject(error);
        }
    })
}
let getAllLoais = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let loais = await db.Loai.findAll();
            resolve(loais);
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    getAllBooks: getAllBooks,
    getAllLoais: getAllLoais

}