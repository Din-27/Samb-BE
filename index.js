const express = require('express')
const cors = require('cors')
const router = require('./src/routes/index')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.get('/', async(req, res)=>{
    res.send('hello world')
})

app.listen(port, ()=>console.log(`Running${port}`))