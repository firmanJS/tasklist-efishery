'use strict'
const express = require('express')
const routing = express()
const views = require('./views')
routing.use(views)

module.exports = routing