// Call
// call메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
const mike = {
    name: 'Mike',
}

const tom = {
    name: 'Tom',
}

function showThisName(){
    console.log(this.name)
}

showThisName(); // 공백출력 / 여기서 this는 window다.
// window.name 이 "" 공백이기 때문에 공백 출력
showThisName.call(mike); // this = mike
showThisName.call(tom); // this = tom

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// (this 매개변수, 함수 매개변수, 함수 매개변수)
update.call(mike, 1999, 'singger')
update.call(tom, 2002, 'teacher')
console.log(mike)
console.log(tom)

console.log(`**********************`)

// Apply
/*
함수 매개변수를 처리하는 방법을 제외하면 call과 같습니다.
call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.
*/
update.apply(mike, [1999, 'singger'])
update.apply(tom, [2002, 'teacher'])
console.log(mike)
console.log(tom)

console.log(`**********************`)

//1.
const minNum = Math.min(3,10,1,6,4)
const maxNum = Math.max(3,10,1,6,4)

console.log(minNum) //1
console.log(maxNum) //10

//2. 배열안에 있는 숫자라면
const nums = [3,10,1,6,4]
const minNum2 = Math.min(...nums)
const maxNum2 = Math.max(...nums)

console.log(minNum2) //1
console.log(maxNum2) //10

//3. apply & call
/*
동작방식은 같으나 매개변수를 받는 방식이 다르다. 차이점을 알아야한다!
Tip! call과 apply의 차이점이 헷깔린다면 apply는 array를 받는다 (공통된 a로 묶어서 기억하기!)
*/
const minNum3 = Math.min.apply(null, nums)
// = Math.min.apply(null, [3,10,1,6,4])
// null 은 this가 사용될 값인데 딱히 필요하지않아서 아무 값이나 넣는다.
// 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용한다.
const maxNum3 = Math.max.call(null, ...nums)
// = Math.min.apply(null, 3,10,1,6,4)

console.log(minNum3) //1
console.log(maxNum3) //10

console.log(`**********************`)


// Bind
// 함수의 this 값을 영구히 바꿀 수 있다.

const mike2 = {
    name:'Mike',
}

function update2(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

const updateMike = update2.bind(mike2);
// bind는 새로 바인딩할 함수를 만든다.
// 이 함수는 항상 mike를 this로 받는다.

updateMike(1980, "police")
console.log(mike2)

console.log(`**********************`)


// *** 실제사용예시
const user = {
    name: 'Mike',
    showName: function(){
        console.log(`hello, ${this.name}`);
    }
}

user.showName(); // 메소드는 점 앞에 있는게 this이다 (user)

let fn = user.showName; // fn을 할당할때 this를 잃어버림

fn(); // 아무것도 안나온다. 메소드 점 앞에 아무것도 없으니 this가 없다.

// 이럴때는 call과 apply로 this를 지정해주면된다.
fn.call(user); 
fn.apply(user); 

let boundFn = fn.bind(user);

boundFn();


