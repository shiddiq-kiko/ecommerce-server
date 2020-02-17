if(process.env.NODE_ENV === 'development') require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(routes)

module.exports = app