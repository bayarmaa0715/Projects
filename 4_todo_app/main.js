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
    const newTask = ` <div class="col border text-light d-flex gap-5 m-2">
    <div class="form-check d-block  m-1">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckIndeterminateDisabled"
        disabled
      />
      <label
        id=""
        class="form-check-label text-start"
        for="flexCheckIndeterminateDisabled"
      >
      ${task[i].garchig}
      </label>
      <span class="text-start" id="">${task[i].delgerengui}</span>
    </div>
    <div class="gap-3 d-flex fs-6 m-1">
      <i class="fa-solid fa-pen-to-square text-light fs-5"></i>
      <i id="btnTrash" class="fa-solid fa-trash text-danger fs-5"></i>
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

zurah();

btnTrash.addEventListener("click", function () {
  newTaskElement.remove();
});
