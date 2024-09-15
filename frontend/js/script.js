const tbody = document.querySelector('tbody')
const addForm = document.querySelector('.add-form')
const inputTask = document.querySelector('.input-task')

//connectar com banco de dados e converter para Json

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3336/tasks');
    const tasks = await response.json()
    return tasks
}

const addTask = async (event) => {
    event.preventDefault()

    const task = { title: inputTask.value }


    await fetch('http://localhost:3336/tasks', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(task)
    })

    loadTask()
    inputTask.value = ''
}
//const task = {
   // id: 1,
  //  title: 'olaaaaa',
   // created_at: '00 dejaneiro de 2022 00:22',
   // status: 'em andamento'
//}

const formatDate = (dateUTC) => {
    const options = { dateStyle: 'short', timeStyle: 'short' }
    const date = new Date(dateUTC).toLocaleString('pt-BR', options)
    return date
}

const createElement = (tag, innerText = '', innerHTML= '') => {
    const element = document.createElement(tag)

    if (innerText){ 
        element.innerText = innerText;
    }

    if (innerHTML){
        element.innerHTML = innerHTML;
    }
    return element
}

const createSelect = (value) => {
    const options = `
    <option value="pendente"> Pendente</option>
    <option value="em andamento">Em Andamento</option>
    <option value="concluida">Concluida</option>
    `;
    const select = createElement('select', '', options)

    select.value = value

    return select
}

const createRow = (task) => {
    const { id, title, created_at, status} = task
    const tr = createElement('tr')
    const tdTitle = createElement('td', title)
    const tdCreatedAt = createElement('td', formatDate(created_at))
    const tdStatus = createElement('td')
    const tdActions = createElement('td')

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>')
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>')

    tdStatus.appendChild(select)

    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')

    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)
    
    tr.appendChild(tdTitle)
    tr.appendChild(tdCreatedAt)
    tr.appendChild(tdStatus)
    tr.appendChild(tdActions)

    return tr

}

const loadTask = async () => {
    const tasks = await fetchTasks()
    tbody.innerHTML = ''

    tasks.forEach((task) => {
        const tr = createRow(task)
        tbody.appendChild(tr)
    })
}

addForm.addEventListener('submit', addTask)

loadTask()

