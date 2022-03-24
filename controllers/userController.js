
const jwt = require('jsonwebtoken')

const userService = require('../services/userService')


const signUp = async (req, res, next) => {

  try {
    const { email, password } = req.body

    if (!email || !password) {
      const error = new Error('KEY_ERROR')
      error.statusCode = 400
      throw error
    }

    const user = await userService.signUp(email, password)

    res.status(201).json({
      message: 'SIGNUP_SUCESS',
      user_id: user.id,
    })
  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}

// module.exports = {
// 	signUp
// } 

const login = async (req, res, next) => {

  try {
    const { email, password } = req.body
    console.log('3 : ', 3)
    if (!email || !password) {
      const error = new Error('KEY_ERROR')
      error.statusCode = 400
      throw error
    }

    console.log('email : ', email)
    console.log('password : ', password)

    const user = await userService.login(email, password)

    console.log('5 : ', 5)

    const token = userService.login(email, password)
    console.log('11: ', 11)
    return res.status(200).json({ messge: 'LOGIN_SUCESS', jwt: token })

  } catch (err) {
    console.log(err)
    return res.status(err.statusCode || 500).json({ message: err.message })
  }
}



module.exports = { signUp, login }

