const userService = (() => {
    const getUsers = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        for (let user of users) {
            let posts = await postService.getPostsByUserId(user.id);
            user.posts = posts.slice(0, 3);
        }

        if (callback) {
            callback(users);
        }
    };

    return { getUsers: getUsers };
})();

const postService = (() => {
    const getPostsByUserId = async (userId) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const posts = await response.json();

        return posts;
    };

    return { getPostsByUserId: getPostsByUserId };
})();
