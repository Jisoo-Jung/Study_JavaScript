const postService = (() => {
    const getPosts = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        if (callback) {
            callback(posts.slice(0, 10));
        }
    };

    return { getPosts: getPosts };
})();
