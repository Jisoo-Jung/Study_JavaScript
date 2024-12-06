const postLayout = (() => {
    const showPosts = (posts) => {
        const wrap = document.getElementById("post-wrap");
        const p = document.createElement("p");
        let text = ``;
        posts
            .map(
                (post) =>
                    "id: " +
                    post.userId +
                    "\n제목: " +
                    post.title +
                    "\n내용: " +
                    post.body
            )
            .forEach((post) => {
                console.log(`${post}`);
            });
        console.log("어려워!");
    };

    return { showPosts: showPosts };
})();
