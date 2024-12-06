// 지역 변수와 전역 변수
// let 키워드와 var 키워드는 둘 다 변수를 선언하는 키워드이다.
// 하지만, 영역({})의 취급이 다르다.
// let 키워드는 모든 영역(if문 중괄호, for문 중괄호, 함수 중괄호 등)을 영역으로 간주한다.
// var 키워드는 함수 영역만 영역으로 간주한다
// (if문, for문 등과 같은 영역은 영역으로 간주하지 않는다).

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// let: 모든 영역
// var: 함수 영역

// 전역 변수 선언
// Node.js에서는 global 객체를 사용해서 전역 변수들을 관리한다.
// 브라우저로 JS를 실행하면, window 객체가 전역 변수들을 관리한다.
// let x = 10;
// global.x = 10;

// 브라우저에서도 실행하고, Node.js로도 실행하려면,
// window객체와 global객체를 동시에 사용해야 한다.
// 이를 해결하기 위해 globalThis를 사용한다.
// globalThis는 상황에 맞게 global 또는 window객체로 사용해준다.
globalThis.x = 10;

function f() {
    let x = 20;
    // var x = 30;
    // global.x = 30;
    globalThis.x = 30;
    console.log(x);
}

f();

// console.log(global.x);
console.log(x);
