'use strict'
const express = require('express')
const app = express()
const router = require('./routes')
require('dotenv').config()

app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(router)

app.listen(process.env.APP_PORT, () => {
    console.log(`efishery api running in port ${process.env.APP_PORT}`)
})