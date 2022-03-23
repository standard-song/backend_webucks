const http = require('http')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const routes = require('./routes')

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(routes)


app.get('/', (req, res) => {
  res.json({ message: '/endpoint' })
})


const server = http.createServer(app)
const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`))
  } catch (err) {
    console.error(err)
    //    await prisma.$disconnect() // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
}
start()  