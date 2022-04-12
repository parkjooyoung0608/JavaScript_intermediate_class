// // async, await



// // [ async ] 
// // Promise의 then 메소드를 체인형식으로 호출하는것보다 가독성이 좋아진다.

// // 함수 앞에 async를 붙여주는 promise를 반환한다.
// async function getName(){
//     return 'Mike'
// }

// console.log(getName()) // Promise

// // 함수를 호출하고 .then을 사용할 수 있다.
// getName().then((name)=>{
//     console.log(name) // Mike
//     console.log('***********************')
// })


// // 만약 반환값이 Promise라면 함수의 값을 그대로 사용한다.
// async function getName2(){
//     return Promise.resolve('Tom')
// }

// getName2().then((name)=>{
//     console.log(name)
//     console.log('***********************')
// })

// // 함수내부에서 예외가 발생하면 리젝티드 상태의 프로미스가 반환한다.
// async function getName3(){
//     throw new Error('err..');
// }

// // 리젝티드는 catch로 확인가능
// getName3().catch((err)=>{
//     console.log(err)
//     console.log('***********************')
// })



// // [ await ]
// function getName4(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(name);
//         },1000)
//     })
// }

// // await키워드는 async함수 내부에서만 사용할 수 있다. 
// // await함수 오른쪽에는 promise가 오고 처리될때까지 기다린다.
// async function showName(){
//     const result = await getName4('Mike')
//     console.log(result)
// }

// console.log('시작');
// showName()

// 저번시간 예제를 async 랑 await를 사용해서 바꿔보자
const f1 = () => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('1번 주문 완료');
        }, 1000);
    })
}

const f2 = (message) => {
    console.log(message)
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('2번 주문 완료');
            // rej(new Error('err...'))
        }, 3000);
    })
}

const f3 = (message) => {
    console.log(message)
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res('3번 주문 완료');
        }, 2000);
    })
}


// promise then을 사용하는 것 보다 가독성이 좋다. 
// 강사님은 대부분의 상황에서 async await 사용하는 것을 선호한다.
// reject(에러)발생시 try{}catch(){}문을 사용하면 된다.
console.log('시작')
async function order(){
    try{
        // const result1 = await f1()
        // const result2 = await f2(result1)
        // const result3 = await f3(result2)
        const result = await Promise.all([f1(), f2(), f3()])
        console.log(result);
    } catch(e){
        console.log(e)
    }
    
    console.log('종료')
}

order();


// console.log('시작')
// f1()
// .then(res=>f2(res))
// .then(res=>f3(res))
// .then(res=>console.log(res))
// .catch(console.log); 