const btn = document.querySelector('#todo-btn')




btn.addEventListener('click', fetchTodo)



function fetchTodo(){
    //input value



    
    let inputValue = document.querySelector('.todo-input').value


    if(inputValue === ""){
        alert("please enter a todo")
   
    } else {

           //set inputvalue to empty
clearFields()
  //todo value Object
    const todo = {
        todo: inputValue
    }
    // console.log(todo)

    //Todo list array
let todoList = []


// set to Localstorage
if(localStorage.getItem('todo') === null){
todoList.push(todo)
localStorage.setItem('todo',JSON.stringify(todoList))


} else {
 todoList = JSON.parse(localStorage.getItem('todo'))
todoList.push(todo)
localStorage.setItem('todo',JSON.stringify(todoList))
}

displayTodo()
    }

 

}

function displayTodo(){
    const todoList = JSON.parse(localStorage.getItem('todo')) || []
    //console.log(bookList)

let todoListContainer = document.querySelector('.todo-list')


todoListContainer.innerHTML = ""

    todoList.forEach(element => {
        const todo = element.todo
       todoListContainer.innerHTML += `<div class="todo">
          <p>${todo}</p>
          <button><i onclick="deleteTodo('${todo}')" class="fas fa-times delete"></i></button>
       </div>`
     
      // deletebutton()

    });
}

function deleteTodo(myCheck){
    
//const deleteBtn =  document.querySelectorAll('.delete')

let todoList = JSON.parse(localStorage.getItem("todo"))

todoList.forEach((myTodo,index) => {
 if(myTodo.todo == myCheck){
      todoList.splice(index, 1)
 }
})

localStorage.setItem("todo", JSON.stringify(todoList))

displayTodo()

// deleteBtn.forEach(btn=>{
//     btn.addEventListener('click', function(e){
//         let todoList = JSON.parse(localStorage.getItem('todo'))
        
//         console.log(e.target.parentELement)
//     })
// })


       
}




//display to UI when the page Loads
window.addEventListener('DOMContentLoaded', displayTodo)



//Clear input function
function clearFields(){
    let value = document.querySelector('.todo-input')
    value.value = ""
}