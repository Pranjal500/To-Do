
  //  ............ TODO LIST...............................
//   Selectors
 const todoInput = document.querySelector('.todo_input');
 const todoButton = document.querySelector('.todo_btn');
 const todoList = document.querySelector('.todo_list');
 const filterOption = document.querySelector('.filter_todo');
 



//   Event Listeners
 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click',deleteCheck);
 filterOption.addEventListener('click', filterTodo);


//   Functions
function addTodo(event) {
    event.preventDefault();
   
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete_btn");
    todoDiv.appendChild(completedButton);

     // CHECK TRASH BUTTON
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
     trashButton.classList.add('trash_btn');
     todoDiv.appendChild(trashButton);
    //   APPEND TO LIST

    todoList.appendChild(todoDiv);
    // CLEAR TODO INPUT VALUE
    todoInput.value  = "";

}
function deleteCheck(e) {
   const item = e.target;

//    DELETE TODO
if (item.classList[0]==='trash_btn') {
    const todo = item.parentElement;

    todo.classList.add('fall');
   todo.addEventListener("transitionend" , function (){
       todo.remove();
   });
   }
 if (item.classList[0]==='complete_btn') {
     const todo = item.parentElement;
     todo.classList.toggle('completed');
 }

}
function filterTodo(e){
   const todos = todoList.childNodes;
   todos.forEach(function(todo) {
      switch (e.target.value){
           case"all":
           todo.style.display='flex';
           break;
          case"completed":
          if (todo.classList.contains("completed")) {
              todo.style.display= 'flex';
          }else{
              todo.style.display = 'none';
          }
          break;
          case "uncompleted":
            if (!todo.classList.contains('uncompleted')) {
                todo.style.display= 'flex';
            }else{
                todo.style.display = 'none';
            }
            break;

      } 
   });
}


       
    
        
    

 