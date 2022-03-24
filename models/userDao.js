
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

 

const getUserByEmail = async (email) => {
	return await prisma.$queryRaw`
		SELECT id FROM users WHERE email = ${email}
	`
}


const getUserByEmailPassword = async (email) => {
    console.log('dao :2  ', 2)
    return await prisma.$queryRaw`
    select id, password from users where email = ${email};`
}


const createUser = async (email, encryptedPW) => {
    console.log('dao :3  ', 3)
    return await prisma.$queryRaw`
    insert into users(email,password) VALUES (${email}, ${encryptedPW});`
}



module.exports = { getUserByEmail, getUserByEmailPassword, createUser }