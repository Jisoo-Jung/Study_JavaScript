const todoLayout = (() => {
    const showTodos = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;

        todos
            .filter((todo) => todo.completed !== true)
            .forEach((todo) => {
                text += `<tr>
                        <td style="color: red;">${todo.userId}</td>
                        <td style="color: red;">${todo.title}</td>
                    </tr>`;
            });

        todos
            .filter((todo) => todo.completed === true)
            .forEach((todo) => {
                text += `<tr>
                        <td style="color: green;">${todo.userId}</td>
                        <td style="color: green;">${todo.title}</td>
                    </tr>`;
            });

        table.innerHTML = text;
    };

    return { showTodos: showTodos };
})();
