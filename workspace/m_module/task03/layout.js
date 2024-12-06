const userLayout = (() => {
    const showPostsOfUsers = (users) => {
        const table = document.querySelector("table.users");
        let text = ``;

        for (let user of users) {
            text += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <table>
                `;

            console.log(user.posts);
            user.posts.forEach((post) => {
                text += `
                        <tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                        </tr>
                    `;
            });

            text += `
                    </table>
                </tr>

            `;
        }

        table.innerHTML = text;
    };

    return { showPostsOfUsers: showPostsOfUsers };
})();
