// 클로저 (closure)

// [ 어휘적 환경 (Lexical Environment) ]
// 자바스크립트는 어휘적 환경을 갖는다

// 위에서 아래로 각 위치에 따라 어떻게 동작할까
/* 
코드가 실행되면 스크립트 내에서 선언한 변수들이 Lexical 환경에 올라간다.
let으로 선언된 변수도 호이스팅 된다. 그러나 초기화가 안되니까 사용은 못한다
그에 비해 함수선언문은 변수와 달리 바로 초기화된다. 사용이 가능하다.
*/
/* Lexical 환경
one: 초기화 X (사용불가)
addOne: function (사용가능)
*/
let one; // 이제 one이라는 변수가 선언됐으니 사용가능 그러나 값은 undefined
one = 1; // 이제 one에 숫자1이 할당되었다. 이제 맨 마지막 줄로가서 함수가 실행된다.

function addOne(num) {
    console.log(one + num);
}

addOne(5) // 함수가 실행되면서 새로운 lexical환경이 만들어진다.
//이곳에는 함수가 전달받은 매개변수와 지역변수들이 저장된다.
// 함수가 호출되는 동안 함수에서 만들어진 내부 lexical환경과 외부에서 받은 전역 lexical환경 두개를 가진다

/* 전역 Lexical 환경
one: 1
addOne: function
*/

/* 내부 Lexical 환경
num : 5
*/

// 내부 렉시칼 환경은 외부렉시칼 환경에 대한 참조를 갖는다
// 코드에서 변수를 찾을때 내부에서 찾고 없으면 외부 그래도 없으면 전역 렉시칼 환경까지 범위를 넓혀서 찾는다.
// addOne함수의 one 과 num은 내부 렉시칼에서 우선 찾는다.
// num은 찾았지만 one은 없다. 이럼 외부로 넓혀서 있는지 찾는다.

// + 다른 예제
function makeAdder(x){
    return function(y){ // y를 가지고 있고, 상위함수인 makeAdder의 x에 접근 가능
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5
// add3함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능하다.

const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4

// 이런 것을 Closure이라고 한다.
/* 
함수와 렉시컬 환경의 조합이다.
함수가 생성될 당시의 외부 변수를 기억
생성 이후에도 계속 접근 가능한 기능
*/

console.log(`****************`)

// 예제

// 외부함수
function makeCounter(){
    let num = 0; // 외부함수의 변수 / 은닉화 성공 (갑자기 99로 바꾼다거나 100씩 증가하는건 불가능)

    // 내부함수
    return function(){
        return num++;
    }
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// 내부함수에서 외부함수의 변수인 num에 접근
// 숫자 수정 불가능함, 오직 카운터를 증가시키는 것만 가능
