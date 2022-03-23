
const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const { apple } = require('color-convert')
const { userInfo } = require('os')
// const  bcrypt  = require('bcrypt')
// const  jwt  = require('jsonwebtoken')

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: '/ endpoint' }) // 이건 접속하자마자 뭐라도 보여야할것같아서 남김
})



// 음료 카테고리 조회 //
app.get('/products/categories', async (req, res) => {
    try {
        // res.json({ message: ' /categories ' })
        const Categories = await prisma.$queryRaw`select id, name from categories;`
        // return res.status(201).json({ message: "select success" })d
        return res.status(200).json(Categories)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message })
    }
})


// 음료 리스트 //
app.get('/products', async (req, res) => {
    try {
        // res.json({ message: ' /categories ' })
        const products = await prisma.$queryRaw`select id, koreanname, englishname from products;`
        // return res.status(201).json({ message: "select success" })
        return res.status(200).json(products)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message })
    }
})

// 음료 상세 정보 // 
// app.get('/products/2', async (req, res) => {
//     try {
//         // res.json({ message: ' /categories ' })
//         const products2 = await prisma.$queryRaw`
//         select id, name from categoriesSELECT products.id, products.korean_name AS "koreanName", products.english_name AS "englishName", 
//         product_images.image_url AS "imageURL", categories.name AS "category", categories.id AS "categoryId"
//         FROM products
//         JOIN product_images ON product_images.product_id = products.id 
//         JOIN categories ON categories.id = products.category_id;`
//         // return res.status(201).json({ message: "select success" })
//         return res.status(200).json(products2)
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ message: err.message })
//     }
// })


// 비번 변경 // 
app.post('/users', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log('email = ', email, 'password: ', password)

        const updatePassword = await prisma.$queryRaw`update users set password=${password} where email=${email};`

        return res.status(201).json({ message: "UPDATE SUCCESS" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
    }
})



// 유저 조회 //
app.get('/users', async (req, res) => {
    try {
        const Users = await prisma.$queryRaw`select * from users;`
        return res.status(200).json(Users)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message })
    }
})





// 회원 가입2 // 
// app.post('/user/signup', async (req, res) => {
//     try {
//         const { email, password } = req.body


// if (!email || !password) {
//     const error = new Error('KEY_ERROR')
//     error.statuscode = 400
//     throw error
// }

// if (password.length < 8) {
//     const error = new Error("PASSWORD_TOO_SHORT")
//     error.statuscode = 400
//     throw error
// }

// const Users = await prisma.$queryRaw`select id from users where email = ${email};`

// if (Users.length !== 0) {
//     const error = new Error("EXSITING_USER")
//     error.statuscode = 409
//     throw error
// }

// const encryptedPW = bcrypt.hashSync(password, bcrypt.genSaltSync())
// console.log('encrypted : ', encryptedPW)

// await prisma.$queryRaw`insert into users(email,password) VALUES (${email}, ${encryptedPW});`
// return res.status(201).json({ message: "SIGNUP_SUCCESS" })


//     } catch (err) {
//         console.log(err)
//         return res.status(error.statuscode || 500).json({ message: err.message })
//     }
// })



// // 로그인 // 
// app.post('/user/login', async (req, res) => {
//     try {
//         // const { email, pw } = req.body

//         if (!email || !pw) {
//             const error = new Error('KEY_ERROR')
//             error.statuscode = 400
//             throw error
//         }

//         const Users = await prisma.$queryRaw`select id, password from users where email = ${email};`

//         // console.log('user : ' , Users)

//         if (Users.length === 0) {
//             const error = new Error("INVALID_USER")
//             error.statuscode = 400
//             throw error
//         }

//         // console.log(' db password : ' Users[0].password)
//         // console.log('input password : ' ,pw)

//         const isCorrect = bcrypt.compareSync(pw, Users[0].password)

//         // console.log('isCorrect: ', isCorrect)

//         if (!isCorrect) {
//             const error = new Error('INVALID_USER')
//             error.statuscode = 400
//             throw error
//         }

//         // console.log('user: ', Users[0])
//         const token = jwt.sign({ userID: Users[0].id }, process.env.SECRET_KEY)

//         // console.log( 'token : ' , token)

//         return res.status(200).json({ messge: 'LOGIN_SUCESS', jwt: token })




//     } catch (err) {
//         console.log(err)
//         return res.status(error.statuscode || 500).json({ message: err.message })
//     }
// })




const server = http.createServer(app)

server.listen(8000, () => {
    console.log('server is listening on PORT 8000')
})