const button = document.getElementById("get-posts");

button.addEventListener("click", () => {
    postService.getPosts(postLayout.showPosts);
});
