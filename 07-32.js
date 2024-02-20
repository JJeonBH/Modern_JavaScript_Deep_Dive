console.log(typeof ''); //  "string"
console.log(typeof 1); // "number"
console.log(typeof NaN); // "number"
console.log(typeof true); //  "boolean"
console.log(typeof undefined); //  "undefined"
console.log(typeof Symbol()); //  "symbol"
console.log(typeof null); //  "object"
console.log(typeof []); //  "object"
console.log(typeof {}); //  "object"
console.log(typeof new Date()); //  "object"
console.log(typeof /test/gi); //  "object"
console.log(typeof function () {}); //  "function"

// typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환한다는 데 주의하자. 이것은 자바스크립트의 첫 번째 버전의 버그다. 하지만 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못하고 있다. 따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용하자.

var foo = null;

console.log(typeof foo === null); //  false
console.log(typeof foo === 'null'); //  false
console.log(foo === null); //  true

// 또 하나 주의해야 할 것이 있다. 선언하지 않은 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 undefined를 반환한다.

// undeclared 식별자를 선언한 적이 없다.
console.log(typeof undeclared); //  "undefined"
