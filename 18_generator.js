// 함수의 실행을 중간에 멈췄다가 재기할 수 있는 기능
// function 옆에 *을 사용해서 만들고, yield 키워드를 사용한다. 
// yield 키워드로 멈출 수 있다. 
function* fn(){
    console.log(1);
    yield 1;
    console.log(2);
    console.log(3);
    yield 2;
    yield 3;
    console.log(4);
    return "finish";
}

const a = fn();
console.log(a) // fn {<suspended>}
// 객체만 반환되고 함수 본문코드는 실행되지 않는다. 
// console.log가 반환되지 않는걸 볼 수 있다.
console.log(a.next()) // 가장 가까운 yield문을 만날때까지 실행되고 데이터 객체를 반환한다. 
// {value: 1, done: false} 
// 반환된 객체는 value와 done프로퍼티를 가지는데
// value는 yield 오른쪽에 있는값
// done 함수코드가 끝났는지 여부를 나타낸다. 실행이 끝났으면 true 아니면 false
console.log(a.next()) //2
console.log(a.next()) //3 {value: 2, done: false} {value: 3, done: false}
console.log(a.next()) //4 {value: 'finish', done: true}
console.log(a.next()) //{value: undefined, done: true}


/*
next()메서드 외에 return()과 throw()메서드를 가지고있다.
동일한 코드에서 실행하다가 .return('END')값을 호출하면 그 즉시 done값이 true가 된다.
이후에 .next()를 실행해도 value를 얻어올 수 없다. done은 계속 true이다.
*/


function* fn2(){
    try{
        console.log(1);
        yield 1;
        console.log(2);
        console.log(3);
        yield 2;
        yield 3;
        console.log(4);
        return "finish";
    } catch(e){
        console.log(e);
    }
    
}

const b = fn2();

console.log(b.next());
console.log(b.next());
console.log(b.throw(new Error('err'))); // Error: err
// {value: undefined, done: true}
console.log(b.next()); // {value: undefined, done: true}



/*
iterable = 반복이 가능하다
- Symbol.iterator 메서드가 있다
- SYmbol.iterator은 iterator을 반환해야 한다

iterator
- next 메서드를 가진다
- next 메서드는 value와 done 속성을 가진 객체를 반환한다.
- 작없이 끝나면 done은 true가 된다. 

즉, Generator은 iterable이면서 iterator이다.
*/

const arr = [1,2,3,4,5]
const it = arr[Symbol.iterator]();
console.log(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
// 배열은 Symbol.iterator 메소드를 가지고 있고, 이 메서드가 반환하는 값이 iterator이므로 iterable하다고 할 수 있다. 
// 즉, 배열은 반복가능한 객체라는 것


// 이터러블은 for of로 반복할 수 있다.
for(let num of arr){
    console.log(num)
}
// 1 2 3 4 5


// iterator인지 아닌지는 Symbol.iterator로 확인할 수 있다.
console.log(a[Symbol.iterator]()===a); // true

console.log('****************')

// 문자열도 가능할까? Yes!
const str = "hello"
console.log(str[Symbol.iterator]()) // 존재확인
const xx = str[Symbol.iterator]()
console.log(xx.next()); //{value: 'h', done: false}
console.log(xx.next()); //{value: 'e', done: false}
console.log(xx.next()); //{value: 'l', done: false}
console.log(xx.next()); //{value: 'l', done: false}
console.log(xx.next()); //{value: 'o', done: false}
console.log(xx.next()); //{value: undefined, done: true}

console.log('****************')
const xxx = str[Symbol.iterator]()
for(let s of xxx){
    console.log(s)
}

console.log('****************')
// next()에 인수 전달
function* fn3(){
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1)
    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2)

    return num1 + num2;    
}

const c = fn3();
console.log(c.next());
console.log(c.next(2)); // 인수로 넣은 숫자는 num1에 저장된다.
console.log(c.next(4)); // done true


console.log('****************')

// 값을 미리 만들어 두지 않는다. -> 메모리 관리 측면에서 효율적이다.
function* fn4(){
    let index = 0;
    // while true문을 사용해서 무한반복자를 만들어도 브라우저가 꺼지지 않는다.
    // .next()를 사용할때만 호출되기 때문이다.
    // 제너레이터가 아니라면 브레이크가 없는 while true문은 사용하면 안된다.
    while(true){
        yield index++;
    }
}

const d = fn4();
console.log(d.next())
console.log(d.next())
console.log(d.next())
console.log(d.next())

console.log('****************')
// yield*를 이용해서 다른 generator을 불러오자
function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "Hello,";
    yield* gen1();
    yield "!";
}

console.log(...gen2()) // 구조구문을 사용했는데 for of와 마찬가지로 done이 true가 될 때까지 값을 펼쳐주는 역할을한다. 

// 제너레이터는 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행 
// ex) Redux Saga 에서 제너레이터를 가장 활발하게 사용한다. 