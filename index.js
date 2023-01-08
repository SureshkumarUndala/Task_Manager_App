const inputEl = document.querySelector("#input")
const button = document.querySelector("#submit")
const outputEl = document.querySelector("#list-container")
const form = document.querySelector("form")



//getTasks

const getTasks = () => {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = []

    }
    else{
       
        tasks = JSON.parse(localStorage.getItem("tasks"))
    
    }
   
    //display to DOM
    const allTasks = tasks.map((task) => {
        return`
        <li id="item">
            <span>${task.title}</span>
            <button onclick="removeTask('${task.id}')" id="delete">X</button>
        </li>`
    })
    let output;
    output =allTasks.join("")

    outputEl.innerHTML = output
    inputEl.value = ""
}



//Add tasks and save into localstorage
const addTask = (e) => {
    e.preventDefault()
    if (inputEl.value == "") {
        alert("Please Enter task")
    }
    // get the item
    const taskitem = inputEl.value
    if (taskitem) {
        let tasks;
        if (localStorage.getItem("tasks") === null) {
            tasks = []
        
        }
        else {
            tasks = JSON.parse(localStorage.getItem("tasks"))   // JSON.parse used to get actual object
            console.log(tasks)
        }
       

        tasks.unshift({
            id: Date.now(),
            title: taskitem
        })
       
        // // save to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks))

    }

    getTasks()
}



//Delete Task
const removeTask = (id)=>{
    console.log(id)
    let tasks;
    if(localStorage.getItem("tasks")== null){
        tasks = [] 
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks",tasks))

    }

    tasks = tasks.filter((task) =>{
        return task.id !== +id
    })
    localStorage.setItem("tasks",JSON.stringify(tasks))
    getTasks()
   
}




form.addEventListener("submit", addTask)