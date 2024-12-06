const button = document.getElementById("go-users");

button.addEventListener("click", (e) => {
    userService.getUsers(userLayout.showPostsOfUsers);
});
