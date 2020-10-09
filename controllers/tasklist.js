const PouchDB = require("pouchdb")
const localDb = new PouchDB('efishery_task')

require('dotenv').config()

const config = { 
    live: true, 
    retry: true, 
    auth: { username: process.env.USERNAME, password:  process.env.PASSWORD }
}

const listTask = async () => {
    try {
        return await localDb.allDocs({ include_docs: true })
    } catch (error) {
        return error
    }
}

localDb.replicate.to(process.env.COUCHDB_URL,config)
localDb.replicate.from(process.env.COUCHDB_URL,config)

module.exports = {
    listTask,
    listTaskByParam
}