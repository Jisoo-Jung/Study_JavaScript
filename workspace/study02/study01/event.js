//'get-comments' Id를 가진 HTML요소(button)를 가져와서 상수 button에 저장한다.
const button = document.getElementById("get-comments");
//클릭 이벤트 메소드: 서비스 객체를 통해 comments정보를 가져오는 메소드 안에
//commnets를 어떻게 보여주면 좋을지 보여주는 객체를 넣는다.
button.addEventListener("click", () => {
    commentService.getComments(commentLayout.showComments);
});
