const todoList = [];
document.querySelector(".add-todo").addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  const inputElement = document.getElementById("todoName");
  const name = inputElement.value;
  const dateInputElement = document.getElementById("todoDate");
  const dueDate = dateInputElement.value;

  if (name == "" || dueDate == "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    todoList.push({ name, dueDate });

    inputElement.value = "";
    dateInputElement.value = "";
    displayTodo();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodo();
}

function editTodo(index) {
  let confirmation = confirm("Are you sure you want to edit?");
  if (confirmation == true) {
    var checks = todoList[index];
    document.getElementById("todoName").value = checks.name;
    todoList.splice(index, 1);
  } else {
    displayTodo();
  }
}

function displayTodo() {
  document.getElementById("show-result").innerHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    document.getElementById(
      "show-result"
    ).innerHTML += ` <div class="specs">${name}</div> <div class="specs">${dueDate}</div>
        <button onclick="deleteTodo(${index})" class="removetodo">Delete</button>
        `;
  });
}
