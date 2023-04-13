let tasksInput = document.querySelector(".tasks__input");
let tasksList = document.querySelector(".tasks__list");
let taskRemove = tasksList.querySelector(".task__remove");
let tasksAdd = document.querySelector(".tasks__add");


tasksInput.addEventListener("keydown",(e)=>{
  if(e.keyCode === 13 && tasksInput.value != "" && tasksInput.value.trim()){
    tasksList.innerHTML += `
    <div class="task">
                  <div class="task__title">
                    ${tasksInput.value}
                  </div>
                  <a href="#" class="task__remove">&times;</a>
                </div>
    `
    tasksInput.value = "";
    e.preventDefault()
};
  
});

tasksAdd.addEventListener("click",(e)=>{
  if(tasksInput.value != "" && tasksInput.value.trim()){
    tasksList.innerHTML += `
    <div class="task">
                  <div class="task__title">
                    ${tasksInput.value}
                  </div>
                  <a href="#" class="task__remove">&times;</a>
                </div>
    `
    tasksInput.value = ""; 
  }
  e.preventDefault()
})

document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("task__remove")){
    e.target.closest(".task").remove() 
  }
})