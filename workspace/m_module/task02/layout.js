const toDoLayout = (() => {
    const showToDos = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;

        todos.forEach((todo) => {
            text += `<tr>
                        <td><span>${todo.userId}</span></td>
                        <td>
                            <span ${todo.completed && "class='on'"}>${
                todo.title
            }</span>
                        </td>
                        <td>${todo.completed}</td>
                    </tr>`;
        });

        table.innerHTML = text;
    };

    return { showToDos: showToDos };
})();
