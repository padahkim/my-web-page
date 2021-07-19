const toDoForm = document.querySelector(".todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".todo-list");

let toDos = [];
const TODOS_KEY = "todos"


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todos)=>todos.id !== parseInt(li.id))
    saveToDo();
}


function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.addEventListener("click",deleteTodo)
    button.innerHTML= 'Delete';
    li.appendChild(span);
    li.insertBefore(button,span);
    toDoList.appendChild(li);
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //localStorage.setItem("todo", toDoInput.value) 바로하는게 아니라 변수에 저장해야함 항상
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now(),
    }
    //toDoInput="";
    //console.log(toDos)//잘모르겠다이부분콘솔1
    toDos.push(newTodoObj)
    //console.log(toDos)//잘모르겠다이부분콘솔2
    paintToDo(newTodoObj);
    saveToDo();
}



const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if(savedToDos!== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);









/*
const TODOS_LS = 'toDos';
const toDos = [];


function delToDo(event) {
    const btn = event.target.parentNode
    toDoList.removeChild(btn)
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}




function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const newId = toDos.length + 1
    delBtn.innerHTML = "";
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span)
    li.appendChild(delBtn)
    delBtn.addEventListener("click", delToDo)
    li.id = newId
    toDoList.appendChild(li)
    toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj)
    saveToDos()
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = ""
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {

        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text)
        }
        );


    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();

/*
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}*/