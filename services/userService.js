const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userDao = require('../models/userDao')


const signUp = async (email, password) => {
    
    try {
        console.log('6 : ', 6)
        if (password.length < 8) {
            const error = new Error('PASSWORD_TOO_SHORT')
            error.statusCode = 400
            throw error
        }
    
        const user = await userDao.getUserByEmail(email)
        console.log('7: ', 7)
    
        if (user.length !== 0) {
            console.log('8: ', 8)
            const error = new Error('EXISTING_USER')
            error.statusCode = 409
            throw error
        }
    
        const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())
    
        const newUser = await userDao.createUser(email, encryptedPW)
    
        return newUser
    } catch (err) {
        console.log(err)
        next(err)
    }

}


// module.exports = { signUp }


const login = async (email, pw ) => {
    try {
        console.log('6 : ', 6)
        const user = userDao.getUserByEmailPassword(email)
        if (user.length === 0) {
            const error = new Error("INVALID_USER")
            error.statuscode = 400
            throw error
        }


        console.log('7: ', 7)
        const user = userDao.getUserByEmailPassword(password)
        console.log('8: ', 8)
        const isCorrect = bcrypt.compareSync(pw, user[0].password)
        console.log('9: ', 9)

        if (!isCorrect) {
            console.log('10: ', 10)
            const error = new Error('INVALID_USER')
            error.statuscode = 400
            throw error
        }

        const token = jwt.sign({ userID: user[0].id }, process.env.SECRET_KEY)
        return res.status(200).json({ messge: 'LOGIN_SUCESS', jwt: token })
    } catch (err) {
        console.log(err)
        next(err)
    }
}


module.exports = { signUp, login }