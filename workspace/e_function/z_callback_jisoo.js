// 1. 두 정수의 평균을 구하고 평균값 리턴하기

// const average = (number1, number2, callback) => {
//     let result = (number1 + number2) / 2;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// let averageNumber = average(50, 60);

// console.log(averageNumber);

// 2. 두 정수의 평균을 구하고 평균값에 2를 나눠서 출력하기

// const average = (number1, number2, callback) => {
//     let result = (number1 + number2) / 2;

//     if (callback) {
//         callback(result);
//     }

//     return result;
// };

// const printAverageDivision = (result) => {
//     console.log(result / 2);
// };

// average(50, 60, printAverageDivision);

// 3. 두 정수의 평균을 구한 뒤
// 평균이 10 미만이면 false, 10 이상이면 ture 출력하기

const average = (number1, number2, callback) => {
    let result = (number1 + number2) / 2;
    if (callback) {
        callback(result);
    }
    return result;
};

const printBoolean = (result) => {
    console.log(result >= 10 ? true : false);
};

average(50, 60, printBoolean);
average(10, 9, printBoolean);

// 비행기를 예약할 때, 1인의 표값과 결제한 총 표값을 입력받고
// 예약 인원이 4인 이상이면 family, 그미만이면 friend를 출력

// const flightReservation = (ticketPrice, totalPrice, callback) => {
//     let reservationPersonnel = totalPrice / ticketPrice;

//     if (callback) {
//         callback(reservationPersonnel >= 4 ? "family" : "friend");
//     }
// };

// // const printPersonnel = (reservationPersonnel) => {
// //     console.log(reservationPersonnel);
// // };

// // flightReservation(1000, 5000, printPersonnel);

// flightReservation(1000, 3000, console.log);

// 게임의 종류와 플레이상태를 전달받고, true면 게임중,
// false면 게임 중이 아닙니다 를 출력(탬플릿 문법으로 풀어보기)

const gameStatus = (gameType, playStatus, callback) => {
    if (callback) {
        callback(
            playStatus
                ? `${gameType} 게임 중`
                : `${gameType} 게임 중이 아닙니다`
        );
    }
};

const printStatus = (callback) => {
    console.log(callback);
};

gameStatus("메이플스토리", false, printStatus);

// 동물의 종류와 몸무게를 전달 받아서 몸무게가 3kg 이하 일때 true, 그 외에는 false값 반환

const animalWeight = (animalType, weight, callback) => {
    let message = animalType + "의 몸무게: ";
    let result = weight <= 3 ? message + true : message + false;

    if (callback) {
        callback(result);
    }

    return result;
};

const checkLessEqualThan3 = (result) => {
    console.log(result);
};

animalWeight("낙타", 100, checkLessEqualThan3);
animalWeight("병아리", 2, checkLessEqualThan3);

// 1. 백화점에서 2개의 상품의 가격을 전달 받아서
// 총합이 300만원이 넘지 않은땐 true (결제 하기), fals일땐 (아이쇼핑) 출력

const productPrice = (productPrice1, productPrice2, callback) => {
    let total = productPrice1 + productPrice2;
    if (callback) {
        callback(total);
    }
};

const priceTotal = (total) => {
    console.log(total <= 3000000 ? "결제하기" : "아이쇼핑");
};

productPrice(100000, 200000, priceTotal);
productPrice(3000000, 200000, priceTotal);

// 2.카페에서 음료 한잔 가격과 총합을 입력 받아 개수를  알아낸 뒤 10잔이상이면 1잔 무료 아니면 적립만 가능 출력

const drink = (drinkPrice, totalPrice, callback) => {
    let drinkNumber = totalPrice / drinkPrice;
    let result = drinkNumber >= 10 ? "1잔 무료" : "적립만 가능";
    if (callback) {
        callback(result);
    }
};

drink(1000, 7000, console.log);

const printMoreThan10 = (result) => {
    console.log(result);
};

drink(500, 10000, printMoreThan10);

// 3.농장에서 축사 대청소를 하려고 한다.  소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은쪽을 출력

const compareCowWithPig = (cowTotal, pigTotal, callback) => {
    let result =
        cowTotal > pigTotal
            ? "소: " +
              cowTotal +
              "마리, " +
              (cowTotal - pigTotal) +
              "마리 더 많다."
            : cowTotal === pigTotal
            ? "소와 돼지 수가 같다."
            : "돼지: " +
              pigTotal +
              "마리, " +
              (pigTotal - cowTotal) +
              "마리 더 많다.";
    if (callback) {
        callback(result);
    }
    return result;
};

compareCowWithPig(50, 50, console.log);
compareCowWithPig(60, 50, console.log);
compareCowWithPig(50, 60, console.log);

// 상품 가격과 구매 개수를 전달 받아서 총 금액을 계산합니다.
// 총 금액이 10000원 이상일 경우 "무료 배송", 그렇지 않을 경우 "배송비 3000원 추가"를 출력합니다.

const totalPrice = (productPrice, purchaseNumber, callback) => {
    let total = productPrice * purchaseNumber;
    let result = total >= 10000 ? "무료 배송" : "배송비 3000원 추가";
    if (callback) {
        callback(result);
    }
    return result;
};

totalPrice(3000, 5, console.log);
totalPrice(3000, 2, console.log);

// 두 숫자의 합을 구한후,
// 만약 두 숫자의 합이 짝수일 경우 "짝수입니다"를 출력하고, 홀수일 경우 "홀수입니다"를 출력합니다.

const plus = (number1, number2, callback) => {
    let total = number1 + number2;
    let result =
        total % 2 === 0
            ? "짝수입니다."
            : total === 0
            ? "두 숫자의 합이 0 입니다."
            : "홀수입니다.";

    if (callback) {
        callback(result);
    }
};

plus(5, 5, console.log);

// 나이와 성별을 전달 받아서 나이에 따라 성인 또는 미성년자로 분류하고, 성별에 따라 메시지를 출력합니다.
// 나이가 20세 이상일 경우 "성인", 그렇지 않을 경우 "미성년자"를 출력합니다.
// 성별이 '남'일 경우 "남성", '여'일 경우 "여성"을 출력합니다.

// 1번째 방법
// const classification = (나이, 성별, callback) => {
//     let data = 나이 >= 20 ? "성인" : "미성년자";
//     data += 성별 === "남" ? ", 성별: 남성" : ", 성별: 여성";
//     if (callback) {
//         callback(data);
//     }
// };

// classification(20, "남", console.log);
// classification(19, "여", console.log);

// 3. 상품이름, 상품개수, 상품한개당가격 을 입력받아 산 상품의 총가격이 10000원을 넘었을 경우 "못삼" 안넘었을경우 "살수 있음"을 출력
// 첫번째 방법
// const product = (productName, productNumber, productPrice, callback) => {
//     let total = productNumber * productPrice;
//     if (callback) {
//         callback(total);
//     }
//     return total;
// };

// const printProduct = (result) => {
//     console.log(result > 10000 ? "못삼" : "살수 있음");
// };

// product("햇반", 11, 1000, printProduct);

// 두번째 방법
// const product = (productName, productNumber, productPrice, callback) => {
//     let total = productNumber * productPrice;
//     if (callback) {
//         callback(total > 10000 ? "못삼" : "살수 있음");
//     }
// };

// product("햇반", 9, 1000, console.log); //console.log도 함수이기 때문에 callback자리에 사용가능

// 2. 문자열과 문자를 입력받아 해당 문자가 문자열에 포함되어있는지
// 확인하고 출력하는 함수를 작성하세요

// 회원 정보를 받아 이름에 "정"가 들어가는지 확인

// if문과 callback 함수를 사용해서만 만들기
// 함수사용 할 때 익명함수 사용하여 출력하기

const member = (id, password, name, callback) => {
    if (callback) {
        if (name.includes("정")) {
            callback("이름에 '정'이 들어가있습니다!");
        } else {
            callback("이름에 '정'이 들어가있지 않습니다!");
        }
    }
};

member("jisoo000", "chlrht21", "정지수", (message) => {
    console.log(message);
});

// const member = (name, id, password, callback) => {
//     if (callback) {
//         if (name.includes("정")) {
//             callback("이름에 정이 들어갔습니다~!~!~!★");
//         } else {
//             callback("이름에 정 안들어감");
//         }
//     }
//     return name;
// };
// member("정지수", "id123", "password123", (message) => {
//     console.log(message);
// });

// 고객의 정보를 받아서 출력하는 함수
// 고객의 정보는 몇개일지 알 수 없다.
// 단, 반드시 생일은 받아야 한다. (가변인자 문제)

function setInfo(birthday, ...information) {
    console.log(birthday);
    for (let i = 0; i < information.length; i++) {
        console.log(information[i]);
    }
}

setInfo(960721, "정지수", "여성", 29, "하남시");

// 이름과 a.k.a(별칭)를 전달받아서 동방신기식 닉네임 출력

let makeNickName = (lastName, 별칭, callback) => {
    let result = 별칭 + lastName;
    if (callback) {
        callback(result);
    }
};

makeNickName("지수", "심정", (result) => {
    console.log(result);
});

// 입력된 세 정수를 모두 곱한 뒤 결과가 30을 넘어가면 출력하고, 그렇지 않으면 출력하지 않음.

// const multiplyAndCheck = (number1, number2, number3, callback) => {
//     let result = number1 * number2 * number3;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const printIfGreaterThan30 = (result) => {
//     if (result > 30) {
//         console.log(result);
//     }
// };

// multiplyAndCheck(2, 5, 4, printIfGreaterThan30);
// multiplyAndCheck(1, 2, 3, printIfGreaterThan30);

// 사용자로부터 세 개의 숫자를 입력 받아서, 그 중 가장 큰 숫자를 출력.

// const findMax = (num1, num2, num3) => {
//     let max = num1;

//     if (num2 > max) {
//         max = num2;
//     }

//     if (num3 > max) {
//         max = num3;
//     }

//     return max;
// };

// let number1 = 5;
// let number2 = 12;
// let number3 = 9;

// let maxNumber = findMax(number1, number2, number3);
// console.log("The largest number is:", maxNumber);

// 사용자의 아버지와 어머니의 나이와 이름을  전달받아서 부모님 중 나이가 많으신 분의 이름을 출력.

// const findOlderParent = (fatherName, fatherAge, motherName, motherAge) => {
//     if (fatherAge > motherAge) {
//         console.log(`The older parent is: ${fatherName}`);
//     } else if (motherAge > fatherAge) {
//         console.log(`The older parent is: ${motherName}`);
//     } else {
//         console.log("Both parents are of the same age.");
//     }
// };

// let fatherName = "John";
// let fatherAge = 50;
// let motherName = "Jane";
// let motherAge = 48;

// findOlderParent(fatherName, fatherAge, motherName, motherAge);

// (실습 - 강사)

// 문자열과 문자를 입력받아 해당 문자가 문자열에 포함되어있는지
// 확인하고 이 결과를 출력하는 함수를 작성하세요
// const checkToInclude = (word, character, callback) => {
//     let check = word.includes(character);
//     if (callback) {
//         callback(check);
//     }
//     return check;
// };

// checkToInclude("ABC", "Z", console.log);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총합 수와 각각 비교해 가축 중 수가 적은 쪽을 출력
// const compareCowWithPig = (cowCount, pigCount, callback) => {
//     let result = cowCount > pigCount;
//     if (callback) {
//         callback(result);
//     }
//     return result;
// };

// const printLessThan = (result) => {
//     console.log(!result ? "소" : "돼지");
// };

// compareCowWithPig(250, 220, printLessThan);
