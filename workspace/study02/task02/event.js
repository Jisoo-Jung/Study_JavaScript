const button = document.getElementById("get-todos");

button.addEventListener("click", () => {
    todoService.getTodos(todoLayout.showTodos);
});
