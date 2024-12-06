// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.

// const market = new Object();
// const user1 = { name: "홍길동", age: 30, point: 3500 };
// const user2 = { name: "이순신", age: 22, point: 0 };
// const user3 = { name: "장보고", age: 66, point: 9500 };

// market.user1 = user1;
// market.user2 = user2;
// market.user3 = user3;

// for (let i = 0; i < 3; i++) {
//     console.log(market[`user${i + 1}`]);
// }

// const data = JSON.stringify(market);
// console.log(data);

// const marketData = JSON.parse(data);
// console.log(marketData);

// 어린이집에 등록되지 않은 원아가 2명이다.
// 원아 정보
// 1)
// 이름, 생년월일, 성별, 보호자 성함, 관계, 전화번호
// 2명을 어린이집에 등록시킨다. 어린이집 객체 만들기, 원아는 프로퍼티로 선언
// JSON 형식으로 바꿔보기, JS 형식으로 되돌리기, 탬플릿 문법도 사용하기
const dayCareCenter = new Object();

const kindergartener1 = {
    name: "김지민",
    birth: 201024,
    gender: "여",
    guardianName: "임세아",
    relationship: "모",
    phone: 01052535555,
};

const kindergartener2 = {
    name: "김다은",
    birth: 190510,
    gender: "여",
    guardianName: "라윤찬",
    relationship: "부",
    phone: 01040303200,
};

dayCareCenter.kindergartener1 = kindergartener1;
dayCareCenter.kindergartener2 = kindergartener2;

for (let i = 0; i < 2; i++) {
    console.log(dayCareCenter[`kindergartener${i + 1}`]);
}

const data = JSON.stringify(dayCareCenter);
console.log(data);

const dayCareCenterData = JSON.parse(data);
console.log(dayCareCenterData);
