const express = require('express')
const router = express.Router()

const userRoute = require('./userRoute')
console.log('1 : ', 1)
router.use('/user', userRoute)


module.exports = router