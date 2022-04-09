// [ setTimeout / serInterval ]
/*
setTimeout : 일정 시간이 지난 후 함수를 실행
serInterval : 일정 시간 간격으로 함수를 반복
*/

function fn(){
    console.log(3)
}

setTimeout(fn, 3000); // 3초 후에 로그를 찍어준다.
// 두개의 매개변수를 갖는다.
// (일정시간이 지난 뒤에 실행할 함수 , 시간)

setTimeout(function(){
    console.log(3)
},3000)
// 함수를 전달하지않고 직접 코드를 작성해도 동일하게 동작한다.
// 인수 전달 가능하다.

function showName(name){
    console.log(name)
}

setTimeout(showName, 3000, 'Mike') // 3초 후에 'Mike' 출력
//(함수, 시간, 인수)

//clearTimeout(tId) // 예정된 작업을 없앤다.



// setInterval
/* setTimeout과 사용법은 동일하다.
계속 실행된다.
*/
function showName2(name){
    console.log(name)
}

setInterval(showName2, 3000, 'Mike') // 3초마다 'Mike'가 찍힌다.
// 중간에 중단하려면 clearInterval(tId)를 실행하면 된다.


// 주의사항
// delay = 0 ??
setTimeout(function(){
    console.log(2) // 2번째로 실행 
}, 0);

console.log(1) // 1번째로 실행
// 현재 실행중인 스크립트가 종료된 이후 스케줄링 함수를 실행하기 때문
// 0이라고 적어도 바로 실행되지않는다.


// 예제
let num = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`)
    if(num > 5){
        clearInterval(tId);
    }
}

const tId = setInterval(showTime,1000)
// 계속보여주기 싫고 5초동안만 보여주고 싶다면?