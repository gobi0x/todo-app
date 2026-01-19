const input=document.getElementById("taskInput")
const list=document.getElementById("taskList")
const addBtn=document.getElementById("addBtn")

function loadTasks(){
const tasks=JSON.parse(localStorage.getItem("tasks"))||[]
tasks.forEach(t=>createTask(t.text,t.completed))
}

function saveTasks(){
const tasks=[]
document.querySelectorAll("li").forEach(li=>{
tasks.push({
text:li.querySelector("span").innerText,
completed:li.classList.contains("completed")
})
})
localStorage.setItem("tasks",JSON.stringify(tasks))
}

function createTask(text,completed){
const li=document.createElement("li")
const span=document.createElement("span")
span.innerText=text
span.onclick=()=>{li.classList.toggle("completed");saveTasks()}
const del=document.createElement("button")
del.innerText="X"
del.onclick=()=>{li.remove();saveTasks()}
li.append(span,del)
if(completed)li.classList.add("completed")
list.appendChild(li)
}

addBtn.onclick=()=>{
if(input.value.trim()==="")return
createTask(input.value,false)
input.value=""
saveTasks()
}

loadTasks()
