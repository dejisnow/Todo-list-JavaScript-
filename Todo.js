window.onload=()=>{
var list = document.querySelector(".list")

//Tasks div
var comtask = document.querySelector(".completedTasks")
var uncomtask = document.querySelector(".uncompTasks")
var deleTask = document.querySelector(".delet")


var input= document.querySelector(".input")
var btn = document.querySelector(".btn")
var deleted = document.querySelector(".deleted")
var complete = document.querySelector(".comp")
var uncomp = document.querySelector(".uncomp")
var result = document.querySelector(".result")
//Events 

btn.addEventListener("click",()=>{

var newDiv = document.createElement("div")
newDiv.classList.add("newDiv")
var todo = document.createElement("li")
todo.innerHTML = input.value
//Date Div
let dateDiv = document.createElement("div")
dateDiv.classList.add("date")
let date = new Date().toString().substring(0,21)
dateDiv.innerHTML = date
todo.classList.add("todo")
newDiv.appendChild(todo)
newDiv.appendChild(dateDiv)
input.value = ""

var tick = document.createElement("button")
tick.innerHTML = "finish"
tick.classList.add("tick")
newDiv.appendChild(tick)

var can = document.createElement("button")
can.innerHTML = "delete"
can.classList.add("can")
newDiv.appendChild(can)

list.appendChild(newDiv)

})

list.addEventListener("click",(e)=>{
var star 
    var target = e.target
    if(target.classList[0]=== "tick"){
    var parent = target.parentElement
    parent.classList.toggle("strike")
    
}         
    if(target.classList[0] === "can"){
    var parent = target.parentElement
    deleTask.innerHTML = parent.firstChild.innerHTML 
    parent.remove()

    }

})


//completed button
 
 
complete.addEventListener("click",()=>{
var children = list.childNodes
for(child of children){
     if(child.classList.contains("strike")){
     var completedLists = document.createElement("li")
  comtask.appendChild(completedLists)
    completedLists.innerHTML = child.firstChild.innerHTML
     }     
}
    
})

//uncompleted
uncomp.addEventListener("click",()=>{
var children = list.childNodes
for(child of children){
    var statusList = child.classList.contains("strike")
    if(statusList === false ){
        var uncompletedLists = document.createElement("li")
  uncomtask.appendChild(uncompletedLists)
    uncompletedLists.innerHTML = child.firstChild.innerHTML
    }
    
    }
}) 
 
 
//deleted Tasks btn
deleted.addEventListener("click",()=>{
   var trove =  deleTask.classList.toggle("tasks")
   if(trove){
        deleted.innerHTML = "Clear"
    }else{
        deleted.innerHTML = "Deleted Tasks"
    }
    return trove
})

    }
    
    
    
