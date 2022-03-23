// const http = require('http')
// const express = require('express')
// const { PrismaClient } = require('@prisma/client')
// const res = require('express/lib/response')


// const prisma = new PrismaClient()

// const app = express()
// app.use(express.json())


// async (req, res) => {
//     prisma.$queryRaw(`select id, name from categories`, 
//         function (err, results) {
//         res.send(results))
//         }
//     }






//         // const select = prisma.$queryRaw(`select id,name from categories`, {
//         //     if (!err) {
//         //         res.send(rows);
//         //     } else {
//         //         console.log ("err : " + err);
//         //         res.send(err);
//         //     }
//         // })



//         // async function Categori(sql) {


//         //          const =  await prisma.$queryRaw`
//         //                 select id,name from categories
//         //                 `

//         //     } 




//         //     let sql = await prisma.$queryRaw
//         //     `SELECT id,name from categories`

//         //     if (err) throw err;

//         //     console.log(result);

//         // };



//         //     try {
//         //         const res = await prisma.$queryRaw`
//         //         select id,name from categories 
//         //         `
//         //         console.log(res);
//         //     } catch (err) {
//         //         console.log(err);
//         //     } finally {
//         //         async () => {
//         //             await prisma.$disconnect();
//         //         }
//         //     }
//         // }






//         // const Categori = async (req,res) => {

//         //         res.json =  await prisma.$queryRaw`
//         //             select id,name from categories
//         //             `

//         // } 




//         //     ({
//         //         select : {
//         //             id : true,
//         //             name : true,
//         //         },
//         //     })

//         // }



//         // app.get('/Categori', async (req, res) => {
//         //     try {

//         //         console.log('id = ', id, 'name = ', name)

//         //         const selectCategori = await prisma.$queryRaw`
//         //         select id,name from categories;
//         //         `      
//         //         // console.log('body : ', res.body)
//         //         // const { id , name } = res.body

//         //         console.log('id = ', id, 'name = ', name)

//         //         return res.status(200).json({ message: "Response OK" })
//         //     } catch (err) {
//         //         console.log(err)
//         //         return res.status(500).json({ message: err.message })
//         //     }
//         // })

//         module.exports = { Categori }
