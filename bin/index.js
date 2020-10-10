#!/usr/bin/env node
const program = require('commander');
const { listTask } = require('../controllers/tasklist')

program
    .version('1.0.0')
    .description('Welcome to efishery tasklist command line')

program
    .command('Show existing task list')
    .alias('show')
    .description('Show existing task list.')
    .action( async () => {
        const lists = await listTask()
        console.log(lists);
    });

program
    .command('Completing/Done a task')
    .alias('complete')
    .description('Completing/Done a task.')
    .action( async () => {
        const lists = await listTask()
        let filterByCompleteTask
        if(lists.length > 0){
            filterByCompleteTask = lists.filter((res) => res.doc.is_completed === true)
        }else{
            filterByCompleteTask = lists
        }
        console.log(filterByCompleteTask)
    });


program.parse(process.argv);