const express = require('express')
const router = express.Router()
const {addUser} = require('../controller/add')

router.post('/add-formulir', addUser)

module.exports = router