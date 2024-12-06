const userService = (() => {
    const getUsers = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        if (callback) {
            callback(postService);
        }
    };

    return { getUsers: getUsers };
})();

const postService = (() => {
    const getPostsByUserId = async (userId, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com//posts?userId=${userId}`
        );
        const posts = await response.json();
        if (callback) {
            callback(posts);
        }
    };

    return { getPostsByUserId: getPostsByUserId };
})();
