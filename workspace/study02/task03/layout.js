const userLayout = (() => {
    const showUsers = (users) => {
        const table = document.querySelector("table.users");
        let text = ``;

        users.forEach((user) => {
            text += `<tr>
                        <td><span>${user.name}</span></td>
                        <td><span>${user.username}</span></td>
                    </tr>`;
        });

        table.innerHTML = text;
    };

    const showPosts = (posts) => {
        const table = document.querySelector("table.posts");
        let text = ``;

        posts
            .filter((post) => post.userId === user.id)
            .forEach((post) => {
                text += `<tr>
                        <td><span>${post.id}</span></td>
                        <td><span>${post.title}</span></td>
                    </tr>`;
            });

        table.innerHTML = text;
    };

    return { showUsers: showUsers, showPosts: showPosts };
})();
