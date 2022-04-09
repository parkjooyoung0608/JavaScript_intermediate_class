// Rest parameters, Spread syntax
//... 점 세개로 사용

function showName(name){
    console.log(name);
}

showName('Mike') // 'Mike'
showName('Mike, Tom') // ?? -> 'Mike, Tom'

// 인수 개수 제한 없음
// 갯수 맞출 필요없습니다. 아무것도 전달하지 않아도 에러는 발생하지 않습니다
// 함수에 인수를 얻는 2가지 방법
// 1. arguments 2. 나머지 매개 변수
// 지금은 2번 나머지 매개변수를 쓰는 추세이다. -> 결정적으로 화살표함수에는 argument가 없다.
console.log(`********************************`)


// [ arguments ]
/*
* 함수로 넘어 온 모든 인수에 접근
* 함수내에서 이용 가능한 지역 변수
* length / index
* Array 형태의 객체
* 배열의 내장 메서드 없음 (forEach, map)
*/

function showName2(name){
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}

showName2('Mike', 'Tom');
// 2
// 'Mike'
// 'Tom'

console.log(`// arguments`)
console.log(`********************************`)


// [ 나머지 매개변수 ]
/* 
정해지지않은 갯수의 수를 배열로 나타낼 수 있게 한다. 
arguments랑 다르게 배열의 메소드를 사용할 수 있다.
*/
function showName3(...names){ // 점세개 찍고 뒤에 배열이름을 정해준다
    console.log(names);
}

showName3(); // [] 아무것도 전달하지 않으면 undefined가 아니라 빈 배열
showName3('Mike'); // ['Mike']
showName3('Mike', 'Tom'); // ['Mikes', 'Tom']

console.log(`********************************`)

// * 실용적인 예제 *
// 전달 받은 모든 수를 더하는 함수를 만들어보자

function add(...numbers){ // numbers는 배열이고 lenght가 있기 때문에 for문으로 사용 가능합니다.
    // 1.
    // let result = 0;
    // numbers.forEach((num) => (result += num))
    
    // 2.
    let result = numbers.reduce((prev, cur)=> prev + cur) 
    console.log(result)
}

add(1,2,3) // 6
add(1,2,3,4,5,6,7,8,9,10) // 55

console.log(`********************************`)

// * 실용적인 예제 *
// user 객체를 만들어 주는 생성자 함수를 만들어보자.
// 주의! 나머지 매개변수는 항상 마지막에 있어야한다. 
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);


console.log(`********************************`)

// [ 전개구문(Spread Syntax) : 배열 ]

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let result = [...arr1, ...arr2]
let result2 = [0, ...arr1, ...arr2, 7, 8, 9] // 중간에 풀어서 쓰는것도 가능

console.log(result); // [1,2,3,4,5,6]
console.log(result2); // [0,1,2,3,4,5,6,7,8,9]

/*
원래는 배열에 넣고 = arr.push()
중간에 빼고 = arr.splice()
병합하고 arr.concat()
하는 과정이 굉장히 번거로웠다.
그런데 전개구문을 사용하면 쉽게 할 수 있다.
*/

// [ 전개구문(Spread Syntax) : 객체 ]
let user4 = {name:'Mike'}
let mike = {...user4, age:30}
console.log(mike) // {name: 'Mike', age: 30}

// [ 전개구문(Spread Syntax) : 복제 ]
let arr3 = [1,2,3]
let arr4 = [...arr3]

let user5 = {name:'Mike', age:30}
let user6 = {...user5};

user6.name = "Tom"

console.log(user5.name); // "Mike"
console.log(user6.name); // "Tom"

console.log(`********************************`)

// * 실용적인 예제 *
// arr5를 [4,5,6,1,2,3] 으로

let arr5 = [1,2,3]
let arr6 = [4,5,6]

arr5 = [...arr5, ...arr6]

console.log(arr5) // [1, 2, 3, 4, 5, 6]

// * 실용적인 예제 *
// user 배열에 info, skills로 fe, lang를 추가
let user7 = {name:'Mike'};
let info = {age:30}
let fe = ["js", "React"]
let lang = ["Korean", "English"]

// **** 전개구문을 안쓴다면?
// user7 = Object.assign({}, user7, info,{
//     skills:[],
// });

// fe.forEach((item)=>{
//     user7.skills.push(item);
// })

// lang.forEach((item)=>{
//     user7.skills.push(item)
// })


user7 = {
    ...user7,
    ...info,
    skills:[...fe, ...lang],
}

console.log(user7)

// 전개구문을 쓰고 안쓰고의 차이가 굉장히 심하다!
// 전개구문이 정말 간단하다.