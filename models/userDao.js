
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getUserByEmail = async (email) => {
    console.log('dao :1 ', 1)
    return await prisma.$queryRaw`
    select id from users where email = ${email};`
}



const createUser = async (email, encryptedPW) => {
    console.log('dao :2  ', 2)
    return await prisma.$queryRaw`
    insert into users(email,password) VALUES (${email}, ${encryptedPW});`
}

const getUserByEmailPassword = async (email, password) => {
    console.log('dao :3  ', 3)
    return await prisma.$queryRaw`
    select id, password from users where email = ${email};`
}


module.exports = { getUserByEmail, getUserByEmailPassword, createUser }
// module.exports = { getUserByEmail, createUser }