// let 과 const는 ES6 이후에 나왔습니다.
// var는 권장하지 않고, let과 const를 권장합니다!

// var는 한번 선언된 변수를 다시 선언할 수 있다.
var name = 'Mike';
console.log(name); // Mike
var name = 'Jane';
console.log(name); // Jane

// 같은 상황에서 let은 문제가 됩니다.
let name = 'Mike';
console.log(name); // Mike
let name = 'Jane';
console.log(name); // SyntaxError : Identifier 'name' has already been declared

// var로 선언된 변수는 코드가 실제로 움직이진 않지만 최상위로 끌여올라간 것처럼 동작한다.
var name; // 호이스팅
console.log(name); // undefined → 선언은 호이스팅 되지만 할당은 호이스팅 되지 않기 때문에 undefined가 나온다.
name = 'Mike'; // 할당

// 같은 상황에서 let은 에러가 난다.
// 그러면 let은 호이스팅이 안되는 것일까? NO 아니다. let과 const도 호이스팅은 일어난다.
// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
console.log(name) // ReferenceError
let name = 'Mike';
// 근데 왜 var처럼 동작하지 않고 에러나 나올까요?
// = Temporal Dead Zone(TDZ) 때문입니다.
// let 과 const는 TDZ의 영향을 받는다. 할당하기 전에는 사용할 수 없습니다.
// 이는 코드를 예측 가능하게 하고 잠재적인 버그를 줄일 수 있습니다.


// 1. 이 코드는 문제 없습니다.
let age = 30;

function showAge(){
    console.log(age);
}

showAge();

// 2. 이 코드는 문제가 됩니다.
let age = 30;

function showAge(){
    console.log(age); // let도 호이스팅이 일어난다. 이곳은 함수안의 TDZ이다. 
    let age = 20; // X error
}

showAge();

// 변수는 3단계의 생성과정을 거친다.
// 1. 선언단계 2. 할당단계 3. 초기화단계
// var 1. 선언 및 초기화 단계 2. 할당 단계
// 여기서 초기화란 undefined를 할당 해주는 단계입니다.
//  1단계에서 선언과 초기화를 동시에 하기 때문에 할당전에 호출해도 에러를 내지않고 언디파인드를 낸다.

// let 1. 선언단계 2. 초기화단계 3. 할당단계
// const 1. 선언과 초기화와 할당이 동시에 된다. 

//const
let name;
name = 'Mike';

var age;
age = 30;

const gender;
gender = 'male'; // Uncaught SyntaxError : Missing initializer in const declaration


// var : 함수 스코프 -> 함수내에서 선언된 변수만 지역변수가 된다.
const age = 30;
if(age>19){
    var txt = '성인';
}
console.log(txt); // '성인'
//if문 안에서 var로 선언한 변수는 if문 밖에서도 사용가능
// 그러나 let 과 const는 불가능하다.
// var도 함수안에서 사용하면 함수밖에서 사용 불가능
function add(num1, num2){
    var result = num1 + num2;
}
add(2,3);
console.log(result); // Uncaught ReferenceError : result is not defined


// let, const : 블록 스코프 -> 모든 코드블럭 내에서 선언 된 변수는 코드블럭 내에서만 사용 가능하며, 외부에서는 접근할 수 없다.
// 코드블럭 내에서 선언된 변수는 지역변수이다.
function add(){
    // Block-level Scope
}

if(){
    // Block-level Scope
}

for(let i=0; i<10; i++){
    // Block-level Scope
}