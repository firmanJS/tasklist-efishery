const PouchDB = require("pouchdb")
const moment = require("moment")
const localDb = new PouchDB('efishery_task')

require('dotenv').config()
const dateNow = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
const config = { 
    live: true, 
    retry: true, 
    auth: { username: process.env.USERNAME, password:  process.env.PASSWORD }
}

const listTask = async () => {
    try {
        const save = await localDb.allDocs({ include_docs: true })
        return save
    } catch (error) {
        return error
    }
}

const createTask = async (req) => {
    const { body } = req
    body.createdAt = dateNow
    body.updatedAt = dateNow
    try {
        return await localDb.post(body);
    } catch (error) {
        return error
    }
}

const updateTask = async (req) => {
    const { id } = req.params
    const { body } = req
    body.updatedAt = dateNow
    try {
        const doc = await localDb.get(id)
        body._id = doc._id
        body._rev = doc._rev
        const response = await localDb.put(body)
        return response
     } catch (error) {
        return error
    }  
}

const taskById = async (req) => {
    const { id } = req.params
    try {
        const doc = await localDb.get(id)
        return doc
     } catch (error) {
        return error
    }  
}

const deleteTask = async (req) => {
    const { id } = req.params
    try {
        const doc = await localDb.get(id)
        const response = await localDb.remove(doc)
        return response
     } catch (error) {
        return error
    }  
}

localDb.replicate.to(process.env.COUCHDB_URL,config)
localDb.replicate.from(process.env.COUCHDB_URL,config)

module.exports = {
    listTask,
    createTask,
    updateTask,
    taskById,
    deleteTask
}