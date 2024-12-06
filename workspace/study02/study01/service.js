//모듈화
//commentService라는 상수를 선언함. function() 함수와는 다르다. 다른 곳에 저장된다
//선언과 동시에 사용.(객체이다.)
const commentService = (() => {
    // async와 await는 비동기이다. promise로 하면 then()과 callback함수를 계속 써야한다.
    // 그래서 함축하여 사용할 수 있는 async와 await를 사용한다.
    const getComments = async (callback) => {
        //fetch 통신으로. 비동기이다. comments 경로에 접근하여 정보를 가져온다.
        //(API를 사용하여 주어진 URL로 HTTP 요청을 보내고, 응답을 기다린다고 함...)
        //응답 객체를 response에 저장한다.
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        );
        //응답 객체가 json형식으로 변환된 데이터를 comments에 저장한다.
        const comments = await response.json();
        //callback 함수가 정의되어 있을 경우,(true일 경우)
        //배열의 0번째 인덱스부터 30개를 잘라서 반환한다.
        if (callback) {
            callback(comments.slice(0, 30));
        }
    };
    //리턴: 객체를 반환하여 commentService 상수에 저장
    //              키 : 값(메소드)
    return { getComments: getComments };
})();
