// 암묵적 타입 변환

console.log(1 - '1'); //  0
console.log(1 * '10'); //  10
console.log(1 / 'one'); //  NaN

// 산술 연산자의 역할은 숫자 값을 만드는 것이다. 따라서 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 한다. 자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다. 이때 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식의 평가 결과는 NaN이 된다.

console.log(+''); //  0
console.log(+'0'); //  0
console.log(+'1'); //  1
console.log(+'string'); //  NaN

console.log(+true); //  1
console.log(+false); //  0

console.log(+null); //  0
console.log(+undefined); //  NaN

// console.log(+Symbol()); //  Uncaught TypeError: Cannot convert a Symbol value to a number

console.log(+{}); //  NaN
console.log(+[]); //  0
console.log(+[10, 20]); //  NaN
console.log(+function () {}); //  NaN

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.
// 빈 문자열(''), 빈 배열([]), null, false는 0으로, true는 1로 변환된다. 객체와 빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다.
