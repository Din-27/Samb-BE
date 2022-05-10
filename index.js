const express = require('express')
const router = require('./src/routes/index')
require('dotenv').config()

const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api', router)


app.listen(port, ()=>console.log(`Running${port}`))