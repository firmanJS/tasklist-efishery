'use strict'
const express = require('express')
const router = express.Router()
const path = require('path')

router.get(`/`, (_req, res) => {
    res.sendFile(path.join(__dirname+'../../views/index.html'));
})

router.get(`/add`, (_req, res) => {
    res.sendFile(path.join(__dirname+'../../views/add.html'));
})

router.get(`/edit/:id`, (_req, res) => {
    res.sendFile(path.join(__dirname+'../../views/edit.html'));
})

module.exports = router