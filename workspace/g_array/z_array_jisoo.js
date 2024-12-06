// Array 객체
let datas = [10, 4, 20, 3, 2];
// [대괄호]: Array 객체, {중괄호}: 일반 객체

// push(): 가장 마지막에 값 추가
// datas.push(4);
// datas.push(5, 6, 7, 8, 9, 10);
// console.log(datas);

// join(): 전달한 값으로 구분한 뒤 문자열로 연결되어서 리턴
// console.log(datas.join("+" + 10 + ","));
// 전달한 값으로 구분한 뒤 문자열로 연결되어서 리턴

// slice(begin, end): 원하는 부분을 추출하기 위해
// 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다
// console.log(datas);
// console.log(datas.slice(1, 6));
// console.log(datas.slice(3));
// console.log(datas.slice(4, 5));

// splice(index, count): 삭제
// console.log(datas.splice(1, 1));
// console.log(datas);
// datas.splice(1, 3);
// console.log(datas);

// splice(index, count, ...args): 교체
// console.log(datas.splice(1, 1, 200));
// console.log(datas);
// datas.splice(0, 0, 100);
// console.log(datas);
// datas.splice(1, 4, 77);
// console.log(datas);
// console.log(datas.splice(0, 1, 5555));
// console.log(datas);

// pop(): 마지막 요소 삭제
const dataRemoved = datas.pop();
console.log(`${dataRemoved} 삭제`);
console.log(datas);

// shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호 리턴.
// 못찾으면 -1 리턴
// const i = datas.indexOf(489);
// console.log(i);

// let datas = [10, 4, 20, 3, 2];
// const numbers = [...datas];
// console.log(numbers);

// const [number1, number2] = datas;
// console.log(number1, number2);

// let datas = new Array(5).fill(0);
// console.log(datas);

// fill(value): Array 객체의 모든 칸에 value로 초기화
// let datas = new Array(5).fill(0);

// forEach((value, index, array) => {})
// datas.forEach((data, i, datas) => {
//     console.log(data, i, datas);
// });

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// for (let i in datas) {
//     console.log(i);
// }

// for (let data of datas) {
//     console.log(data);
// }

// 2 ~ 10까지 2의 배수로 Array객체에 담기

// (실습 - 본인)
// let numbers = new Array(9).fill(0);

// numbers.forEach(data, i, num) => {})

// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 2) * 2;
// });

// console.log(datas);

// (실습 - 강사)
// 2 ~ 10까지 2의 배수로 Array객체에 담기
// 2 4 6 8 10: 5칸
// const datas = new Array(5).fill(5);
// datas.forEach((값, 인덱스, 객체) => {
//     객체[인덱스] = (인덱스 + 1) * 2;
// });

// console.log(datas);

// 1 ~ 10까지 담은 후 각 값에 제곱을 출력한다.

// (실습 - 본인)
// let datas = new Array(10).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// console.log(datas);

// datas.forEach((data, i, datas) => {
//     datas[i] = (i + 1) * (i + 1);
// });

// console.log(datas);

// (실습 - 강사)
// const datas = new Array(10).fill(0);

// datas.forEach((data, i, datas) => {
//     datas[i] = i + 1;
// });

// datas.forEach((data) => {
//     console.log(data * data);
// });
