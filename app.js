var listOfActivities = [];
var input = document.getElementById("input");
const button = document.getElementById("button");
const toDoList = document.getElementById("todolist");
const addButton = document.getElementById("add-button");



button.addEventListener("click", click);
addButton.addEventListener("click", click);

function click() {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  showList();
}

function showList() {

  toDoList.innerHTML = "";

  listOfActivities.forEach(function (n, i) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${n}</span>`;
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", () => {
      editToDo(i);
    });
    li.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteToDo(i);
    });
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
  });
}

function editToDo(index) {
  const newActivity = prompt("Edit the activity");
  if (newActivity.length > 0) {
    listOfActivities[index] = newActivity;
    showList();
  }
}

function deleteToDo(index) {
  listOfActivities.splice(index, 1);
  showList();
}