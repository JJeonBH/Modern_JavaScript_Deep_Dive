// ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑(base)으로, 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값을 반환한다.

console.log(2 ** 2); //  4
console.log(2 ** 0); //  1
console.log(2 ** -2); //  0.25

// 지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했다.

console.log(Math.pow(2, 2)); //  4
console.log(Math.pow(2, 0)); //  1
console.log(Math.pow(2, -2)); //  0.25

// 지수 연산자는 다음과 같은 경우 Math.pow 메서드보다 가독성이 좋다.
// 지수 연산자의 결합 순서는 우항에서 좌항이다. 즉, 우결합성을 갖는다.

console.log(2 ** (3 ** 2)); //  512
console.log(Math.pow(2, Math.pow(3, 2))); //  512

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야 한다.

console.log((-5) ** 2); //  25

// console.log(-5 ** 2);
// Uncaught SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence

// 지수 연산자는 다른 산술 연산자와 마찬가지로 할당 연산자와 함께 사용할 수 있다.

var num = 5;
console.log((num **= 2)); //  25

// 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다.

console.log(2 * 5 ** 2); //  50
