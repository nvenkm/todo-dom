const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //taaki refresh na ho
  addTodo(); //new todo add
});

function addTodo() {
  const input = document.getElementById("input");
  const ul = document.getElementById("todoList");
  const li = document.createElement("li");
  if (input.value.trim() === "") {
    input.value = "";
    input.focus();
    return;
  }
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = "";
  input.focus();
}
