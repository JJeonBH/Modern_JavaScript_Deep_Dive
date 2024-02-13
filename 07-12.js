// 동등 비교(loose equality) 연산자와 일치 비교(strict equality) 연산자는 좌항과 우항의 피연산자가 같은 값으로 평가되는지 비교해 불리언 값을 반환한다. 하지만 비교하는 엄격성의 정도가 다르다. 동등 비교 연산자는 느슨한 비교를 하지만 일치 비교 연산자는 엄격한 비교를 한다.

// 동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다. 따라서 동등 비교 연산자는 좌항과 우항의 피연산자가 타입은 다르더라도 암묵적 타입 변환 후에 같은 값일수 있다면 true를 반환한다.

// 동등 비교
console.log(5 == 5); //   true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
console.log(5 == '5'); //  true

// 동등 비교. 결과를 예측하기 어렵다. 따라서 사용하지 않는 편이 좋다. 대신 일치 비교(===) 연산자를 사용한다.
console.log('0' == ''); //  false
console.log(0 == ''); //  true
console.log(0 == '0'); //  true
console.log(false == 'false'); //  false
console.log(false == '0'); //  true
console.log(false == null); //  false
console.log(false == undefined); //  false

// 일치 비교(===) 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다. 다시 말해, 암묵적 타입 변환을 하지 않고 값을 비교한다. 따라서 일치 비교 연산자는 예측하기 쉽다.

// 일치 비교
console.log(5 === 5); //  true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
console.log(5 === '5'); //  false

// 일치 비교 연산자에서 주의할 것은 NaN이다. NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN); //  false

// 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN을 사용한다.
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
console.log(Number.isNaN(NaN)); //  true
console.log(Number.isNaN(10)); //  false
console.log(Number.isNaN(1 + undefined)); //  true

// 숫자 0도 주의해야 한다. 자바스크립트에는 양의 0과 음의 0이 있는데 이들을 비교하면 true를 반환한다.
console.log(0 === -0); //  true
console.log(0 == -0); //  true

// 동등 비교 연산자와 일치 비교 연산자는 +0과 -0을 동일하다고 평가한다. 또한 동일한 값인 NaN과 NaN을 비교하면 다른 값이라고 평가한다. ES6에서 도입된 Object.is 메서드는 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치 비교 연산자와 동일하게 동작한다.
console.log(-0 === +0); //  true
console.log(Object.is(-0, +0)); //  false

console.log(NaN === NaN); //  false
console.log(Object.is(NaN, NaN)); //  true
