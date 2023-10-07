import fs from 'fs'


const todoList = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'))


const titleChecker = (title) => {
    return (todoList.filter(e => e.title === title)).length > 0
}

export function list(status) {
    let counter = 1
    if (status) {
        console.log(`to-dos with status ${status}:`)
        for (let todo of todoList) {
            if (todo.status === status) {
                console.log(`${counter}- ${todo.title}`)
                counter++
            }
        }
    } else {
        for (let todo of todoList) {
            console.log(`${counter}- ${todo.title}   Status: ${todo.status}`)
            counter++
        }
    }
}

export function add(title) {
    if (titleChecker(title)) {
        console.log(`'${title}' is already in the list insert another title`)
    } else {
        todoList.push({
            title,
            status: 'to-do'
        })
        fs.writeFileSync('./data/data.json', JSON.stringify(todoList, null, 2))
        console.log('added')
        console.log('your status set to to-do')
    }
}

export function edit(title, newTitle, newStatus) {
    const todoElement = todoList.filter(e => e.title === title)
    if (todoElement.length === 0) {
        console.log('not found')
    } else {
        if (newTitle) {
            if (!titleChecker(newTitle)) {
                todoElement[0].title = newTitle
                console.log('edited')
            } else {
                console.log(`'${newTitle}' is already in the list insert another title`)
            }
        } else if (newStatus === 'to-do' || newStatus === 'in-progress' || newStatus === 'done') {
            todoElement[0].status = newStatus
            console.log('edited')
        } else {
            console.log('status must be \'to-do\' or \'in-progress\' or \' done\'')
        }
        todoList.splice(todoList.indexOf(todoElement), 1, todoElement[0])
        fs.writeFileSync('./data/data.json', JSON.stringify(todoList, null, 2), 'utf8')
    }
}


export function del(title) {
    const filteredList = todoList.filter(e => e.title !== title)
    fs.writeFileSync('./data/data.json', JSON.stringify(filteredList, null, 2), 'utf8')
    if (filteredList.length === todoList.length - 1) {
        console.log('deleted')
    } else {
        console.log('not found')
    }
}
