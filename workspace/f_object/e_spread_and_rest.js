const user = {
    id: 1,
    name: "han",
};

// 구조 분해(비구조화 할당)
// const { id, name } = user;
// console.log(id, name);

// 초기값 설정
// const { id, name, age = 10 } = user;
// console.log(id, name, age);

// 프로퍼티 매핑 후 원하는 이름으로 변경
// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

// product
// property: id, name, price
// 상품 객체 1개 만든 후
// 구조 분해를 사용해서 3개의 정보를 출력한다.
// 이 때, price대신 value를 사용한다.

const product = {
    id: 1,
    name: "상품",
    price: 3000,
};

//let으로 해도 됨. 밑에서 수정 안할려고 const로 한거라고 하심. ??

let { id, name, price: value } = product;

console.log(id, name, value);

// 원아 객체 1개 만든 후
// 구조 분해 사용해서 4개의 정보를 출력한다.
// id, 반명, 성별, 이름
// 이 때, '이름' 대신 '원아명'을 사용한다.
// 그리고 연령 초기값을 설정한다.(7살)

// 객체 스프레드: 값 복사
// const product = {
//     id: 1,
//     name: "상품A",
//     price: 3600,
// };

// immutable, 즉, 기존 객체의 주소가 아닌 값만 복사해 온다.
// const otherProduct = { ...product };
// otherProduct.name = "한동석";
// console.log(product);

// 기존에 없던 key를 작성하면 추가된다.
// const anotherProduct = { ...product, stock: 32 };
// console.log(anotherProduct);

// 이미 있는 key를 작성하면 수정된다.
// const anotherProduct = { ...product, price: 1000 };
// console.log(anotherProduct);

// 유치원에 어린이 3명이 있다.
// 어린이 3명의 정보는 다음과 같다.
// 이름, 나이
// 3명의 어린이를 유치원 객체에 담는다.
// 새로운 어린이 1명의 정보를 복사해서 유치원에 새로운 어린이로 추가한다.

// const kid1 = {
//     name: "정지수",
//     age: 6,
// };
// const kid2 = {
//     name: "윤정현",
//     age: 6,
// };
// const kid3 = {
//     name: "주안나",
//     age: 7,
// };

// function Kindergarten(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const kindergarden = new Kindergarten();

// kindergarden;

// (실습 - 강사)
// function Child(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const kindergarten = new Object();
// const child1 = new Child("또치", 4);
// const child2 = new Child("둘리", 5);
// const child3 = new Child("도너", 4);

// kindergarten.child1 = child1;
// kindergarten.child2 = child2;
// kindergarten.child3 = child3;

// const child4 = { ...child3, age: child3.age + 1 };

// kindergarten.child4 = child4;

// console.log(kindergarten);

// 어린이집에 원아 5명이 있다.
// 원아명, 성별, 생년월일
// 5명의 원아를 어린이집 객체에 담는다.
// 신입원아 2명 정보를 복사해서
// 어린이집에 새로운 원아에 추가한다. 그 중 한명은 알레르기가 있다. 알레르기 key 추가.

function Kindergartener(id, name, gender, birth) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.birth = birth;
}

const dayCareCenter = {};
const kid1 = new Kindergartener(1, "김지민", "여", 201024);
const kid2 = new Kindergartener(2, "임세아", "여", 190521);
const kid3 = new Kindergartener(3, "라윤찬", "남", 190804);
const kid4 = new Kindergartener(4, "김다은", "여", 191110);
const kid5 = new Kindergartener(5, "이건강", "남", 200512);

dayCareCenter.kid1 = kid1;
dayCareCenter.kid2 = kid2;
dayCareCenter.kid3 = kid3;
dayCareCenter.kid4 = kid4;
dayCareCenter.kid5 = kid5;

const kid6 = {
    ...kid2,
    id: 6,
    name: "주안나",
    birth: kid2.birth - 5,
    allergy: "계란",
};

dayCareCenter.kid6 = kid6;

console.log(dayCareCenter);
