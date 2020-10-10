'use strict'
const express = require('express')
const router = express.Router()
const { listTask, createTask, 
    deleteTask, updateTask, taskById
} = require('../controllers/tasklist')

router.get(`/api/v1/tasklist`, async (_req, res) => {
    const result = await listTask()
    res.json({ data: result })
})

router.get(`/api/v1/tasklist/:id`, async (req, res) => {
    const result = await taskById(req)
    res.json({ data: result })
})


router.post(`/api/v1/tasklist`, async (req, res) => {
    const result = await createTask(req)
    res.json({ data: result })
})

router.put(`/api/v1/tasklist/:id`, async (req, res) => {
    const result = await updateTask(req)
    res.json({ data: result })
})

router.delete(`/api/v1/tasklist/:id`, async (req, res) => {
    const result = await deleteTask(req)
    res.json({ data: result })
})



module.exports = router