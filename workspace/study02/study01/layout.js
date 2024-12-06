//commentLayout 상수 선언과 동시에 사용.(객체이다.)
const commentLayout = (() => {
    //comment 목록을 보여주는 메소드 선언.
    const showComments = (comments) => {
        //table 태그를 가져온다.
        const table = document.querySelector("table#comments");
        //comment 목록 내용 중 필요한 내용을 담을 text 변수 초기화
        let text = ``;
        //comments 객체에 접근하여 반복문을 돌린다.
        comments.forEach((comment) => {
            //'이름, 이메일, 내용'을 테이블 행과 열 태그 안에 탬플릿 문법 사용하여,
            //text 변수에 반복하여 더하여 넣는다.
            text += `<tr>
                        <td>${comment.name}</td>
                        <td>${comment.email}</td>
                        <td>${comment.body}</td>
                    </tr>`;
        });
        //태그의 모든 정보를 담을 수 있도록 innerHTML에 넣어준다.
        table.innerHTML = text;
    };
    //리턴
    return { showComments: showComments };
})();
