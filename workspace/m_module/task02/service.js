const toDoService = (() => {
    const getToDos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();

        if (callback) {
            callback(todos.slice(0, 20));
        }
    };

    return { getToDos: getToDos };
})();
