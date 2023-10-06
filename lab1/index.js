import { Command } from 'commander';
import { add, del, edit, list } from './methods.js';


const todoApp = new Command()



todoApp.command('add')
    .argument('title', 'title')
    .action((str, _option) => {
        add(str)
    })
todoApp.command('ls')
    .option('--status, -s <string>', 'list by status')
    .action((_str, _options) => {
        list(_str.S)
    })
todoApp.command('remove')
    .argument('title')
    .action((str, _options) => {
        del(str)
    })
todoApp.command('edit')
    .description('es for edit-status')
    .argument('title')
    .option('--title, -t <string>')
    .option('--status, -s <string>')
    .action((str, options) => {
        edit(str, options.T, options.S)
    })
todoApp.parse(process.argv)