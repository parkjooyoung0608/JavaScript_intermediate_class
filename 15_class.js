// Class
// ES6에 추가된 스펙


// 지금까지 비슷한 형태의 객체를 생성하기 위해서 [생성자 함수]를 사용했다. 
const User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name)
    };
}

const mike = new User('Mike', 30);


// new를 사용해서 호출했을 때 내부에서 정의된 내용으로 객체를 생성하는 것은 동일하다
// 그렇다면 차이점은?
/*
- class 키워드 사용
- 내부에 constructor 메서드 사용 : 객체를 만들어주는 생성자 메서드, new를 통해 호출하면 자동으로 실행된다.
- 객체를 초기화 하기 위한 값이 this.뒤에 정의된다.
- 인수를 넘겨받을 수 있다.
- showName처럼 class 내에 정의한 메소드는 User2에 프로토타입에 저장된다.
*/
class User2 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2('Tom', 19)

// mike와 tom을 확인해보면 mike는 객체 내부에 showName이 있고, tom은 proto타입 내부에 showName이 있다.
// 사용법은 동일하다.
mike.showName();
tom.showName();

// 생성자 함수에서 class와 동일하게 동작하도록 만들어보자.
const User3 = function(name, age){
    this.name = name;
    this.age = age;
}

User3.prototype.showName=function(){
    console.log(this.name);
}

const mike2 = new User3('Mike', 30);

// 이렇게 생성자 함수로도 구현할 수 있다.
// 그렇다면 단순히 문법의 편의성을 위해서 class가 탄생하게 된걸까?
const mike3 = User3('Mike',30)
// 개발자가 실수로 new를 생략했다.
// 그러나 mike3을 찍어보면 undefined가 나온다 (에러가 안나옴) 실수를 파악할 수 없다. 

// const tom2 = User2('tom', 10) // TypeError : Class constructor User2 ~~ 
// class는 new없이 실행할 수 없다.

/*
- constructor : class라는 것을 알 수 있다.
- new없이 호출하면 에러가 뜬다. 
*/

console.log(`생성자 함수는 *************`)


// for in문으로 확인해보자
for(const p in mike) {
    console.log(p)
}

console.log(`class는 *************`)

for(const p in tom) {
    console.log(p)
}

/*
이전 시간에 for in문은 프로토타입에 포함된 프로퍼티들을 다 보여주고
객체가 가지고있는 프로퍼티를 판별하기 위해서 헤즈온메서드를 사용해야했다.
class의 메소드는 for in 문에서 제외된다.
*/


// 상속
// [ extends ] 

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }

    drive(){
        console.log("drive..");
    }

    stop(){
        console.log("STOP!!")
    }
}
console.log(`*************`)

// Car을 상속해서 Bmw 만들기
class Bmw extends Car {
    // constructor(...args){
    //     super(...args);
    // } => 자바스크립트는 컨스트럭트가 없으면 있는것처럼 행동한다.
    park(){
        console.log("PARK");
    }
}

const z4 = new Bmw("blue");
console.log(z4)

console.log(`*************`)

// [ 메소드 오버라이딩(method overriding) ]
// 동일한 이름으로 정의하면 덮어쓴다.
class Car2{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }

    drive(){
        console.log("drive..");
    }

    stop(){
        console.log("STOP!!")
    }
}

// Car을 상속해서 Bmw 만들기
class Bmw2 extends Car2 {
    park(){
        console.log("PARK");
    }
    stop(){
        console.log("OFF")
    }
}

const z5 = new Bmw2("blue");
console.log(z5.stop()) // OFF
console.log(`*************`)

// 만약 부모의 메소드를 그대로 사용하면서 확장하고 싶다면?
// super. 메소드 사용 
class Bmw3 extends Car2 {
    park(){
        console.log("PARK");
    }
    stop(){
        super.stop();
        console.log("OFF")
    }
}

const z6 = new Bmw3("blue");
console.log(z6.stop()) // OFF
// 이런 방식을 오버라이딩이라고 한다.
console.log(`*************`)


// 생성자 오버라이딩 (overriding)
class Bmw4 extends Car2 {
    constructor(){
        super(); // 2. 추가하면 에러없어짐
        this.navigation = 1;
    }
    park(){
        console.log("PARK");
    }
}

const z7 = new Bmw4("blue"); // 1. Error!!
// 컨스트럭트에서 this를 사용하기 전에 부모 생성자를 반드시 먼저 호출해야한다.
// class의 constructor은 {} 빈객체로 만들어주고 this로 이 객체를 가르킨다.
// 반면 extends를 써서 만든 자식 class는 빈객체를 만들고 할당하는 작업을 건너뛴다
// -> 그래서 항상 super(); 키워드로 부모 class의 컨스트럭톨을 실행해야한다.

console.log(z7) // color가 undefined가 돼버림
// 분명 생성할때 blue라는 값을 넣어줬는데..
// 제대로 동작하게 하기 위해서는 자식class의 컨스트록톨에 동일한 인수를 받는 작업을 해줘야한다.
console.log(`*************`)

class Bmw5 extends Car2 {
    constructor(color){
        super(color); // 2. 추가하면 에러없어짐
        this.navigation = 1;
    }
    park(){
        console.log("PARK");
    }
}

const z8 = new Bmw5("blue");
console.log(z8)