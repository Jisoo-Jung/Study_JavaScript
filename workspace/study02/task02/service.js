const todoService = (() => {
    // fetch 통신은 비동기이기 때문에, then()으로 접근해야 한다.
    // 이게 귀찮아서 async를 붙이고 await를 쓴다.
    const getTodos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        if (callback) {
            callback(todos.slice(0, 20));
        }
    };

    return { getTodos: getTodos };
})();
