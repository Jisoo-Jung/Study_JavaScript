const postLayout = (() => {
    const showPosts = (posts) => {
        const table = document.querySelector("table.posts");
        let text = ``;

        posts.forEach((post) => {
            text += `<tr>
                        <td>${post.userId}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                    </tr>`;
        });

        table.innerHTML = text;
    };

    return { showPosts: showPosts };
})();
