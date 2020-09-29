const input = require('readline-sync')

let list = [];
let validOptions = ['add', 'delete', 'mark', 'unmark', 'show'];
function whatTodo() {
    let what = input.question('What do you want to do? add / delete / mark / unmark/ show ').toLowerCase()
    if (!validOptions.includes(what)) {
        console.log('Invalid Option-Try Again!');
        whatTodo();
    }
    if (what === 'add') {
        add();
        whatTodo();
    }
    if (what === 'delete') {
        console.log(list);
        deleteTask();

    }
    if (what === 'mark') {
        mark();
        whatTodo();
    }
    if (what === 'unmark') {
        unmark();
        whatTodo();
    }
    if (what === 'show') {
        console.log(list);
        whatTodo();
    }
}

function add() {
    let add = input.question('Add your Task: ').toLowerCase()
    list.push(add)
    console.log(list);
}
function deleteTask() {
    console.log(list);
    let deleteTask = input.question('What do you want to remove? ').toLowerCase()
    for (let i = 0; i < list.length; i++) {
        if (list[i] == deleteTask) {
            list.splice(i, 1);
        }
       
        console.log((list));
        whatTodo()
    }
}
function mark() {
    console.log(list);
    let mark = input.question('What do you want to mark? ').toLowerCase()
    for (let i = 0; i < list.length; i++) {
        if (list[i] == mark) {
            list[i] = list[i] + '-DONE'
            list.push(list.splice(list.indexOf(list[i]), 1)[0]); 
        }
    }
}

function unmark() {
    console.log(list);
    let unmark = input.question('What do you want to unmark? ').toLowerCase()
    for (let i = 0; i < list.length; i++) {
        if (list[i]=== ( unmark +'-DONE')) {
            list[i] = list[i].replace('-DONE','');
        }
    }
}


whatTodo()