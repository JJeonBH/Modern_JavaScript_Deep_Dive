// break 문은 레이블 문, 반복문(for, for...in, for...of, while, do...while) 또는 switch 문의 코드 블록을 탈출한다. 레이블 문, 반복문, switch 문의 코드 블록 외에 break 문을 사용하면 SyntaxError(문법 에러)가 발생한다.

// if (true) {
//   break;  //  Uncaught SyntaxError: Illegal break statement
// }

// 레이블 문이란 식별자가 붙은 문을 말한다.

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// a라는 식별자가 붙은 레이블 블록문
a: {
  console.log(1);
  break a; //  a 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log('Done!');

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log('Done!');

var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var k = 0; k < string.length; k++) {
  // 문자열의 개별 문자가 'l'이면
  if (string[k] === search) {
    index = k;
    break; //  반복문을 탈출한다.
  }
}

console.log(index); //  2

// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); //  2
