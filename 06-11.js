// ES6부터 템플릿 리터럴이라고 하는 새로운 문자열 표기법이 도입되었다. 템플릿 리터럴은 멀티라인 문자열, 표현식 삽입, 태그드 템플릿 등 편리한 문자열 처리 기능을 제공한다. 템플릿 리터럴은 백틱(``)을 사용해 표현한다.
// 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스(\n 등)를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.

// 멀티라인 문자열
var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;

console.log(template);

var first = 'Byeong-ho';
var last = 'Jeon';

// ES5 : 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');

// ES6 : 표현식 삽입
console.log(`My name is ${first} ${last}.`);
