// [ Splice ]
/* 
arr.splice(n,m)
특정 요소를 지운다.
n: 시작 index
m: 지울 갯수
*/

let arrSplice1 = [1,2,3,4,5];
arrSplice1.splice(1,2);
console.log(`1 : ${arrSplice1}`); // [1,4,5]

/* 
arr.splice(n,m,x)
특정 요소 지우고 추가
n : 시작 index
m : 지울 갯수
x : 추가할 요소
*/
let arrSplice2 = [1,2,3,4,5]
arrSplice2.splice(1,3,100,200);
console.log(`2 : ${arrSplice2}`) // [1,100,200,5]

// 아무것도 안지우고 추가하는게 가능하다.
let arrSplice2_2 = ["나는", "철수", "입니다"]
arrSplice2_2.splice(1,0,"대한민국","소방관")
console.log(`2_2 : ${arrSplice2_2}`);

/*
arr.splice()
삭제된 요소 반환
*/

let arrSplice3 = [1,2,3,4,5]
let result = arrSplice3.splice(1,2);

console.log(`3_1 : ${arrSplice3}`) // [1, 4, 5]
console.log(`3_2 : ${result}`) // [2, 3]

console.log(`// Splice`);


// ***************************************

// [ Slice ]
/*
arr.slice(n,m)
n부터 m까지 반환
배열에서 원하는 부분만 리턴해서 받아오고 싶을 때 사용

주의! 
- m은 포함하지 않고 그 앞자리까지를 의미한다.
- m을 쓰지 않으면 끝까지를 의미한다.
*/

let arrSlice = [1,2,3,4,5]
console.log(`1 : ${arrSlice.slice(1,4)}`); // [2, 3, 4]

// 만약 괄호안에 아무것도 안넣으면 배열이 복사된다.
let arrSlice2 = arrSlice.slice()
console.log(`2 : ${arrSlice2}`) // [1, 2, 3, 4, 5]

console.log(`// Slice`);


// ***************************************

// [ Concat ]
/*
arr.concat(arr2,arr3)
합쳐서 새 배열 반환
주의! []배열로 전달하든, 그냥 숫자로 전달하든 똑같이 반환한다.
*/

let arrConcat = [1,2]
console.log(`1 : ${arrConcat.concat([3,4])}`);
console.log(`2 : ${arrConcat.concat([3,4],[5,6])}`);
console.log(`3 : ${arrConcat.concat([3,4],5,6)}`);

console.log(`// Concat`);


// ***************************************

// [ forEach ]
/*
arr.forEach(fn) : 배열 반복
3개의 매개변수를 받는다
1. 해당 요소들
2. index
3. array 자체
보통은 1,2번째 매개변수만 사용한다.
*/
let users = ['Mike', 'Tom', 'Jane'];
users.forEach((name, index) => {
    console.log(`${index+1}. ${name}`);
}); // 1. Mike 2. Tom 3. Jane

console.log(`// forEach`);

// ***************************************

// [ indexOf ]
/* 
arr.indexOf
- 해당 요소를 발견하면 해당 요소의 index 번호를 반환하고,
- 해당 요소가 없으면 -1을 반환한다.
- 인수가 2개인 경우 2번째 인수는 시작 위치를 의미한다.

arr.lastIndexOf
- 끝에서 부터 해당 요소를 찾고 싶을 때 사용한다.
*/

let arrIndexOf = [1,2,3,4,5,1,2,3];
console.log(arrIndexOf.indexOf(3)); // 2
console.log(arrIndexOf.indexOf(3,3)); // 7
console.log(arrIndexOf.lastIndexOf(3)); //7

console.log(`// indexOf`);

// ***************************************

// [ includes ]
/* 
arr.includes() : 해당 요소를 포함하는지 확인
*/
let arrIncludes = [1,2,3];
console.log(arrIncludes.includes(2)) // true
console.log(arrIncludes.includes(8)) // false

console.log(`// includes`);

// ***************************************

// [ Find / FindIndex ]
/* 
arr.find(fn) / arr.findIndex(fn)
보다 복잡한 연산이 가능하다 (함수를 사용할 수 있다.)

주의! 
- 첫번째 true 값만 반환하고 끝난다. 
- 만약 없으면 undefined를 반환한다.
*/

let arrFind = [1,2,3,4,5]
const result2 = arrFind.find((item)=>{
    return item % 2 === 0;
})

console.log(result2); // 2

// * 객체가 들어있는 배열의 경우 indexOf를 사용하기 힘들다. 이럴때 Find를 사용한다.
let userList = [
    {name:'Mike', age:30},
    {name:'Jan', age:27},
    {name:'Tom', age:10},
];

const result3 = userList.find((user)=>{
    if(user.age<19){
        return true;
    }
    return false;
})

console.log(result3); // {name: 'Tom', age: 10}

// 같은 예제를 findIndex로 한다면?
const result4 = userList.findIndex((user)=>{
    if(user.age<19){
        return true;
    }
    return false;
})

console.log(result4); // 2 
// findIndex는 조건에 맞는 배열의 index 번호를 반환한다.

//Q. student에 점수가 90인 학생을 찾아라
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
}
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 23, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]

const result5 = student.find(function(student){
	return student.score === 90;
})

console.log(result5); // Student {name: 'C', age: 23, enrolled: true, score: 90}

console.log(`// Find / FindIndex`);


// ***************************************

// [ Filter ]
/* 
arr.filter(fn) : 조건에 만족하는 모든 요소를 배열로 반환
*/

let arrFilter = [1,2,3,4,5,6]

const result6 = arrFilter.filter((item)=> {
	return item % 2 === 0;
})

console.log(result6); // [2,4,6]

// Q. 수업에 등록한 학생들만 보여달라
class Students {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  
  const students = [
      new Students('A', 29, true, 45),
      new Students('B', 28, false, 80),
      new Students('C', 23, true, 90),
      new Students('D', 40, false, 66),
      new Students('E', 18, true, 88),
  ]

  const result7 = students.filter((student)=>student.enrolled);
console.log(result7)
// 0: Students {name: 'A', age: 29, enrolled: true, score: 45}
// 1: Students {name: 'C', age: 23, enrolled: true, score: 90}
// 2: Students {name: 'E', age: 18, enrolled: true, score: 88}

console.log(`// Filter`);

// ***************************************

// [ Reverse ]
/* 
arr.reverse() : 역순으로 재정렬
*/
let arrReverse = [1,2,3,4,5]
console.log(arrReverse.reverse()); // [5,4,3,2,1]

console.log(`// Reverse`);

// ***************************************

// [ Map ]
/*
arr.map(fn) : 
함수를 받아 특정 기능을 시행하고 새로운 배열을 반환 
→ 배열의 요소 하나하나를 다른 것으로 변경
** 실무에서 자주 사용된다.
*/

let userList2 = [
    {name:'Mike', age:30},
    {name:'Jane', age:27},
    {name:'Mike', age:10},
]

let newUserList = userList2.map((user, index)=>{
    return Object.assign({}, user, {
        id: index+1,
        isAdult: user.age>19,
    })
})

console.log(newUserList);
// 0: {name: 'Mike', age: 30, id: 1, isAdult: true}
// 1: {name: 'Jane', age: 27, id: 2, isAdult: true}
// 2: {name: 'Mike', age: 10, id: 3, isAdult: false}

console.log(`// Map`);

// ***************************************

// [ Join ]
/*
arr.join() : 배열을 합쳐서 문자열을 만든다.
- 괄호안에 아무것도 적지 않으면 쉼표로 구분해서 합쳐진다.
- 괄호안에 공백을 넣으면 공백이 들어간채로 합쳐진다.
- 괄호안에 -를 넣으면 -가 들어간 채로 합쳐진다.
*/

let arrJoin = ["안녕","나는","철수야"]
let result8 = arrJoin.join();
console.log(result8) // 안녕,나는,철수야

let result9 = arrJoin.join(' ');
console.log(result9) // 안녕 나는 철수야

let result10 = arrJoin.join('-');
console.log(result10) // 안녕_나는_철수야

console.log(`// Join`);

// ***************************************

// [ Split ]
/*
arr.split() : 문자열을 나눠서 배열로 만들어준다.
* 첫번째 인자는 구분자 - 꼭 적어야한다. 
* ()괄호 안에는 어떤 기준으로 나눠줄건지를 정하는 것
* users의 ,쉼표 기준으로 나눠달라는 뜻 
*/

const userSplit = "Mike, Jane, Tom, Tony";
const result11 = userSplit.split(',');

console.log(result11); // ["Mike", "Jane", "Tom", "Tony"]
// 두번째 인자는 몇개를 배열로 만들건지에 대한것 (생략 가능)
const result12 = userSplit.split(',', 2);
console.log(result12) // ['Mike', ' Jane']

const str = "Hello, My name is Mike.";
// 만약 빈 문자열을 넣은다면 한글자씩 떨어져서 배열로 들어간다.
// 주의! 스페이스도 배열로 반환된다.
const result13 = str.split("");
console.log(result13) //['H', 'e', 'l', 'l', 'o', ',', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'M', 'i', 'k', 'e', '.']

console.log(`// Split`);

// ***************************************

// [ isArray ]
/* Array.isArray() : 배열인지 아닌지 확인 */
let user = {
    name : 'Mike',
    age : 30,
}

let userList3 = ["Mike", "Tom", "Jane"]

// typeof는 배열이든 객체든 둘다 배열로 나와서 확인 불가능
console.log(typeof user); // object
console.log(typeof userList3); // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList3)); // true

console.log(`// isArray`);
