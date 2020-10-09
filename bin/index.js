#!/usr/bin/env node
const program = require('commander');
const { listTask } = require('../controllers/tasklist')

program
    .version('1.0.0')
    .description('Welcome to efishery tasklist command line')

program
    .command('Show existing task list')
    .alias('show')
    .description('Get newest data from server.')
    .action( async () => {
        const lists = await listTask()
        console.log(lists.rows);
    });

program
    .command('Completing/Done a task')
    .alias('complete')
    .description('Get newest data from server.')
    .action( async () => {
        const lists = await listTask()
        const filterByCompleteTask = lists.rows.filter((res) => res.doc.is_completed === true)
        console.log(filterByCompleteTask)
    });


program.parse(process.argv);