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
module.exports = {
    handleUserLogin: handleUserLogin
}