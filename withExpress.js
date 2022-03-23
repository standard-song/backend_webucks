const http = require('http')
const express = require('express')
// const { CategoriAPI } = require('./CategoriAPI')
// const { ListAPI } = require ('./ListAPI')
// const { DetailAPI } = require ('./DetailAPI')


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' }) // 이건 접속하자마자 뭐라도 보여야할것같아서 남김
})

app.get('/products/categories', CategoriAPI)
app.get('/products', ListAPI) 
app.get('/products/2', DetailAPI)

const server = http.createServer(app)

server.listen(8000, () => {
  console.log('server is listening on PORT 8000')
})