const taskTodoList = document.getElementById("taskTodoList");
const taskInprogressList = document.getElementById("taskInprogressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const btnAdd = document.getElementById("btnAdd");
const garchig = document.getElementById("garchig");
const delgerengui = document.getElementById("delgerengui");
const taskStatus = document.getElementById("status");
const btnTrash = document.getElementById("btnTrash");

const task = [
  { garchig: garchig, delgerengui: delgerengui, status: taskStatus },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskInprogressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    const newTask = ` 
    <div class="col  bg-dark text-light d-flex justify-content-between gap-5 m-2 rounded-1 text-start">
       <div class="form-check m-1">
          <label
         id=""
         class="form-check-label text-start text-uppercase"
         for="flexCheckIndeterminateDisabled"
          >
          ${task[i].garchig}
           </label>
          <p class="text-start" id="">${task[i].delgerengui}</p>
       </div>
       <div class="gap-3 d-flex fs-6 m-1">
         <button class="btn m-o p-0 onclick="editBtn(${i})""><i class="fa-solid fa-pen-to-square text-light fs-5"></i></button> 
         <button class="btn m-o p-0" onclick="deleteTask(${i})"><i class="fa-solid fa-trash text-danger-emphasis fs-5"></i></button> 
       </div>
     </div>
    `;
    switch (task[i].status) {
      case "Todo": {
        taskTodoList.innerHTML += newTask;
        break;
      }
      case "Inprogress": {
        taskInprogressList.innerHTML += newTask;
        break;
      }
      case "Done": {
        taskDoneList.innerHTML += newTask;
        break;
      }
      case "Blocked": {
        taskBlockedList.innerHTML += newTask;
        break;
      }
      default: {
        console.log("Status aa songonuu aldaa garlaa");
      }
    }
  }
}

btnAdd.addEventListener("click", function () {
  const newTaskElement = {
    garchig: garchig.value,
    delgerengui: delgerengui.value,
    status: taskStatus.value,
  };
  task.push(newTaskElement);
  zurah();
});

function deleteTask(index) {
  console.log(index);
  task.splice(index, 1);
  zurah();
}

function count() {
  const editTask = `
  `;
}
