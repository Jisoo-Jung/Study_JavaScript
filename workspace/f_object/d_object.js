// 생성자
// 해당 필드를 메모리에 할당하고 그 주소값을 가지고 온다.
// 초기화도 가능하다.

// function User(id, pw, name, age) {
//     // this: 생성된 객체
//     this.id = id;
//     this.pw = pw;
//     this.name = name;
//     this.age = age;
// }

// 타입별로 prototype 객체가 자동으로 생성된다.
// prototype에 추가한 프로퍼티는 해당하는 타입의 객체들이 모두 사용할 수 있다.
// 하지만 객체별로 가지고 있지 않고 공용으로 1개 만들어진 것을 공유하는 것이다.
// User.prototype.extinct = "인간";

// const user1 = new User(1, "1234", "한동석", 20);
// const user2 = new User(1, "2222", "홍길동", 55);

// console.log(user1.extinct);
// console.log(user2.extinct);

// User.prototype.extinct = "엘프";

// console.log(user1.extinct);
// console.log(user2.extinct);

// (실습 - 본인)
// 상품 생성자 제작 후 객체 2개 만들기
// 생성자를 통해 초기화한다.
// 프로퍼티: 번호, 상품명, 가격, 수량
// 공용: 각 상품객체는 총 가격을 구할 수 있어야 한다.

function Product(id, productName, productprice, quantity) {
    this.id = id;
    this.productName = productName;
    this.productprice = productprice;
    this.quantity = quantity;
}

const product1 = new Product(1, "피아노", 10000000, 4);
const product2 = new Product(2, "바이올린", 20000000, 5);

// Product.prototype.totalPrice = ;

Product.prototype.totalPrice;

console.log(product1.totalPrice);

// (실습 - 강사)
// 상품 생성자 제작 후 객체 2개 만들기
// 생성자를 통해 초기화한다.
// 프로퍼티: 번호, 상품명, 가격, 수량
// 공용: 각 상품객체는 총 가격을 구할 수 있어야 한다.

// function Product(id, name, price, quantity) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
// }

// Product.prototype.getTotal = (product) => {
//     return product.price * product.quantity;
// };

// const productA = new Product(1, "상품A", 3500, 324);
// const productB = new Product(2, "상품B", 143200, 23);

// let totalA = Product.prototype.getTotal(productA);
// let totalB = Product.prototype.getTotal(productB);

// console.log(totalA, totalB);

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
