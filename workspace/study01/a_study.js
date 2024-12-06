// 어린이집 원아 정보를 JS 객체로 구성한다.
// 반연령, 반이름, 아이 이름, 생년월일, 보호자-1, 보호자-2, 보호자-3
// 각 정보를 출력하되, 보호자-1, 보호자-2, 보호자-3는 반복문을 사용해서 출력한다.
// 보호자-1은 주양육자이다. 보호자-1은 구분할 수 있도록 "주양육자: " 붙여주도록 한다.
// with 함수 사용하여 출력한다.
// 다 한 후, 담당교사와 아이 성별도 추가하여 출력한다.

const kindergartener = {
    id: 1,
    classAge: 5,
    className: "꽃뜰반",
    name: "김지민",
    birth: 201024,
    "guardian-1": "모",
    "guardian-2": "부",
    "guardian-3": "외조모",
    primaryCaregiver: () => {
        return "주양육자: " + kindergartener["guardian-1"];
    },
};

let { id, classAge, className, name, birth, ...guardians } = kindergartener;

console.log(id, classAge, className, name, birth);
for (let i = 0; i < 3; i++) {
    console.log(guardians[`guardian-${i + 1}`]);
}
console.log(kindergartener.primaryCaregiver());

// with (kindergartener) {
//     console.log(id, classAge, className, name, birth);
//     for (let i = 0; i < 3; i++) {
//         console.log(kindergartener[`guardian-${i + 1}`]);
//     }
//     console.log(primaryCaregiver());
// }

kindergartener.teacher = "정지수";
kindergartener.gender = "여";
console.log(kindergartener);

// ****************************

// 어린이집에 등록되지 않은 원아가 2명이다.
// 원아 정보
// 1)
// 이름, 생년월일, 성별, 보호자 성함, 관계, 전화번호
// 2명을 어린이집에 등록시킨다. 어린이집 객체 만들기, 원아는 프로퍼티로 선언
// JSON 형식으로 바꿔보기, JS 형식으로 되돌리기, 탬플릿 문법도 사용하기

// const dayCareCenter = new Object();

// const kindergartener1 = {
//     name: "김지민",
//     birth: 201024,
//     gender: "여",
//     guardianName: "임세아",
//     relationship: "모",
//     phone: "01052535555",
// };

// const kindergartener2 = {
//     name: "김다은",
//     birth: 190510,
//     gender: "여",
//     guardianName: "라윤찬",
//     relationship: "부",
//     phone: "01040303200",
// };

// dayCareCenter.kindergartener1 = kindergartener1;
// dayCareCenter.kindergartener2 = kindergartener2;

// for (let i = 0; i < 2; i++) {
//     console.log(dayCareCenter[`kindergartener${i + 1}`]);
// }

// const data = JSON.stringify(dayCareCenter);
// console.log(data);

// const dayCareCenterData = JSON.parse(data);
// console.log(dayCareCenterData);

//************************************************ */
// 원아 생성자 제작 후, 객체 3개 만들기
// 생성자 통해 초기화하기
// 프로퍼티: 반명, 원아명, 연령, 성별
// 공용: 원아의 연령으로 몇세반인지 구할 수 있어야 한다.

function Kindergartener(id, className, name, age, gender) {
    this.id = id;
    this.className = className;
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Kindergartener.prototype.getClassAge = (kindergartener) => {
    return kindergartener.age + "세반";
};

const kindergartener1 = new Kindergartener(1, "꽃뜰반", "김지민", 7, "여");
const kindergartener2 = new Kindergartener(2, "꽃뜰반", "라윤찬", 7, "남");
const kindergartener3 = new Kindergartener(3, "사랑반", "임세아", 5, "여");

const classAge1 = Kindergartener.prototype.getClassAge(kindergartener1);
const classAge3 = Kindergartener.prototype.getClassAge(kindergartener3);

console.log(classAge1, classAge3);

// ******************************************

// 어린이집에 원아 5명이 있다.
// 원아명, 성별, 생년월일
// 5명의 원아를 어린이집 객체에 담는다.
// 신입원아 2명 정보를 복사해서
// 어린이집에 새로운 원아에 추가한다. 그 중 한명은 알레르기가 있다. 알레르기 key 추가.

// function Kindergartener(id, name, gender, birth) {
//     this.id = id;
//     this.name = name;
//     this.gender = gender;
//     this.birth = birth;
// }

// const dayCareCenter = {};
// const kid1 = new Kindergartener(1, "김지민", "여", 201024);
// const kid2 = new Kindergartener(2, "임세아", "여", 190521);
// const kid3 = new Kindergartener(3, "라윤찬", "남", 190804);
// const kid4 = new Kindergartener(4, "김다은", "여", 191110);
// const kid5 = new Kindergartener(5, "이건강", "남", 200512);

// dayCareCenter.kid1 = kid1;
// dayCareCenter.kid2 = kid2;
// dayCareCenter.kid3 = kid3;
// dayCareCenter.kid4 = kid4;
// dayCareCenter.kid5 = kid5;

// const kid6 = {
//     ...kid2,
//     id: 6,
//     name: "주안나",
//     birth: kid2.birth - 5,
//     allergy: "계란",
// };

// dayCareCenter.kid6 = kid6;

// console.log(dayCareCenter);

// ***************************

// 1~10까지 담은 후 홀수값 출력하기

// let datas = new Array(10).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// // console.log(datas);

// datas.forEach((data) => {
//     if (data % 2 != 0) {
//         console.log(data);
//     }
// });

// 1~11까지 담은 후 마지막 값 삭제하기

let datas = new Array(11).fill(0);

datas.forEach((data, i, datas) => {
    datas[i] = i + 1;
});

console.log(datas);
const remove = datas.pop();

// 1~10까지 담은 후 1~4는 삭제하기

// 2~20까지 담은 후 1을 추가한다.

// [소 양 돼지 하이에나 닭 하마]  에서 야생동물은 가축동물로 바꾸기
// '양' 인덱스 번호 리턴하기
// '소 양 돼지' 추출하기
