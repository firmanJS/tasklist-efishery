'use strict'
const express = require('express')
const routing = express()
const views = require('./views')
const tasks = require('./tasklist')

routing.use(views)
routing.use(tasks)

module.exports = routing