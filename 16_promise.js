// Promise 사용법

// 판매자의 코드
// const pr = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         // resolve('OK')
//         reject(new Error('err...'))
//     }, 1000)
// })

// 소비자의 코드
// console.log('시작')
// pr.then(result => {
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('끝')
//     console.log('*********************')
// })


// [예제]
// Promise 사용X
const f1 = (callback) => {
    setTimeout(() => {
        console.log('1번 주문 완료');
        callback();
    }, 1000);
}

const f2 = (callback) => {
    setTimeout(() => {
        console.log('2번 주문 완료');
        callback();
    }, 3000);
}

const f3 = (callback) => {
    setTimeout(() => {
        console.log('3번 주문 완료');
        callback();
    }, 2000);
}

// console.log('시작')
// f1(function(){ // callback함수를 받으면 내부에 함수가 있어야한다.
//     f2(function(){
//         f3(function(){
//             console.log('끝')
//         console.log('*********************')
//         })
//     })
// })
// 이렇게 뎁스가 깊어지면서 계속 콜백을 호출하는 것을 callback hell 콜백지옥이라고 부른다.


// Promise 사용!
const f4 = () => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('1번 주문 완료');
        }, 1000);
    })
}

const f5 = (message) => {
    console.log(message)
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('2번 주문 완료');
        }, 3000);
    })
}

const f6 = (message) => {
    console.log(message)
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('3번 주문 완료');
        }, 2000);
    })
}


// 프로미스 체이닝 (Promises chaining)
// console.log('시작')
// f4()
// .then(res=>f5(res))
// .then(res=>f6(res))
// .then(res=>console.log(res))
// .catch(console.log())
// .finally(()=>{
//     console.log('끝')
// })


// 순차적으로 주문하면 총 6초가 걸리는 셈이다.
// 더 줄일 수 없을까?
// 3명이 각 상점으로가서 동시에 주문하면 제일 오래걸리는 3초면 모든 제품을 받을 수 있다.
// Promise.all 
// - 배열로 받는다. - then을 사용한다. 
console.time("x")
Promise.all([f4(), f5(), f6()])
.then(res=>{
    console.log(res);
    console.timeEnd("x") // x: 3012.6669921875 ms
})
// 대략 3초 후에 배열로 한번에 나온다.


// Promise.race
// 사용방법은 Promise.all과 동일
// 차이점은 all은 모든 작업이 완료될때까지 기다리지만 race는 하나라도 1등으로 완료되면 끝난다.
// 용량이 큰 이미지를 로딩하는데 그중 하나라도 완료되면 그 이미지를 보여줄 때 이런 방식을 사용하면된다.