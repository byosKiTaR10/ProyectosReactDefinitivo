const db = require('./db')
const helper = require('../helper')
const config = require('../config')
const { json } = require('body-parser')

async function getUserData (user, password) {
    return {
        'user':user,
        'password': password
    }
}

module.exports = {
    getUserData
}
