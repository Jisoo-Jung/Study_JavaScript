const button = document.getElementById("get-todos");

button.addEventListener("click", () => {
    toDoService.getToDos(toDoLayout.showToDos);
});
