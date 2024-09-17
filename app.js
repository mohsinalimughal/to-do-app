var input1 = document.querySelector("#input") 
var submitbtn = document.querySelector("#submit-btn") 
var output1 = document.querySelector("#output") 
var globalArray = []
var additeminput = document.querySelector("#inputcss") 

// var newElement = document.createElement(div);
// newElement.id = 'input';

function addTodo(){
    output1.innerHTML = ""
      globalArray.push(additeminput.value)
      for( var i = 0; i < globalArray.length; i++){
      output1.innerHTML = output1.innerHTML +  `<div id="outputcss"><p >${globalArray[i]}</p><div> <i class="fa-solid fa-trash" onclick="deleteTodo(${i})"></i> <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i></div></div>`
      }
      additeminput.value = ""
      
}
function deleteTodo(index){
    output1.innerHTML = ""
    globalArray.splice(index,1)
    for( var i = 0; i < globalArray.length; i++){
        output1.innerHTML = output1.innerHTML +  `<div id="outputcss"><p >${globalArray[i]}</p><div> <i class="fa-solid fa-trash" onclick="deleteTodo(${i})"></i> <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i></div></div>`
        }
        additeminput.value = ""

}
function editTodo(index){
    output1.innerHTML = ""
    // globalArray.splice(index,1)
    var input2 = prompt("Enter edited text")
    globalArray.splice(index,1,input2)
    for( var i = 0; i < globalArray.length; i++){
        output1.innerHTML = output1.innerHTML +  `<div id="outputcss"><p >${globalArray[i]}</p><div> <i class="fa-solid fa-trash" onclick="deleteTodo(${i})"></i> <i class="fa-solid fa-pen-to-square" onclick="editTodo(${i})"></i></div></div>`
        }
        additeminput.value = ""

}