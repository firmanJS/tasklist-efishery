'use strict'
require('dotenv').config()
process.env.NODE_ENV = 'test'
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = 'http://localhost:2020/api/v1/'
const assert = require('chai').assert
chai.should()

chai.use(chaiHttp)

// Our parent block
describe('Taslist', () => {
    describe('/GET show task list', () => {
        it('it should list task', (done) => {
            chai.request(server).get('tasklist')
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .then((res) => {
                    res.status.should.be.equal(200)
                    res.body.should.be.a('object')
                    res.body.data.rows.should.be.a('array')
                    res.body.data.should.have.property('rows');
                    done()
                }).catch(function (err) {
                    throw err
                })
        })
    })

    describe('/POST Tasklist', () => {
        it('it should post tasklist', (done) => {
            const task = {
                "task_name": "example names",
                "task_content": "example contents",
                "task_tag": ["abc", "efd"],
                "is_completed": true
            }
            assert.typeOf(task.task_name, 'string')
            assert.typeOf(task.task_content, 'string')
            assert.typeOf(task.task_tag, 'array')
            assert.typeOf(task.is_completed, 'boolean')
            chai.request(server).post('tasklist')
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .send(task).then((res) => {
                    res.status.should.be.equal(200)
                    res.body.should.be.a('object')
                    done()
                }).catch(function (err) {
                    throw err
                })
        })
    })

    describe('/PUT update task list', () => {
        it('it should update task', (done) => {
            chai.request(server).get('tasklist')
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .then((res) => {
                    const getId = res.body.data.rows[0]._id
                    const createdAt = res.body.data.rows[0].createdAt
                    const task = {
                        "task_name": "update example names",
                        "task_content": "update example contents",
                        "task_tag": ["abc", "efd"],
                        "is_completed": false,
                        "createdAt": createdAt
                    }
                    assert.typeOf(task.task_name, 'string')
                    assert.typeOf(task.task_content, 'string')
                    assert.typeOf(task.task_tag, 'array')
                    assert.typeOf(task.is_completed, 'boolean')
                    chai.request(server).put(`tasklist/${getId}`)
                        .set('Accept', 'application/json')
                        .set('Content-Type', 'application/json')
                        .send(task).then((res) => {
                            res.status.should.be.equal(200)
                            res.body.should.be.a('object')
                        }).catch(function (err) {
                            throw err
                        })
                    done()
                }).catch(function (err) {
                    throw err
                })
        })
    })

    describe('/DELETE update task list', () => {
        it('it should delete task', (done) => {
            chai.request(server).get('tasklist')
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .then((res) => {
                    const getId = res.body.data.rows[0]._id
                    chai.request(server).delete(`tasklist/${getId}`)
                        .set('Accept', 'application/json')
                        .set('Content-Type', 'application/json')
                        .then((res) => {
                            res.status.should.be.equal(200)
                            res.body.should.be.a('object')
                        }).catch(function (err) {
                            throw err
                        })
                    done()
                }).catch(function (err) {
                    throw err
                })
        })
    })
})
