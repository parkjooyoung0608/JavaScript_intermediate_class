let num = 10;

num.toString(); //'10' → 숫자를 문자로 전환

// 이때 괄호안에 숫자를 쓰면 그 숫자 진법으로 변환
num.toString(2); //'1010' → 10을 2진수로 나타냄

let num2 = 255;
num2.toString(16);  // "ff" -> 색상을 다뤄보았다면 익숙할 것  


// [ Math ]

// - Math.ceil() : 올림
let num3 = 5.1;
let num4 = 5.7;

Math.ceil(num3); // 6
Math.ceil(num4); // 6
// 소수점 상관없이 그냥 올린다. 


// - Math.floor() : 내림
Math.floor(num3); // 5
Math.floor(num4); // 5
// 소수점 상관없이 그냥 내린다.


// - Math.round() : 반올림
Math.round(num3); // 5
Math.round(num4); // 6
// 소수점이 5보다 작으면 5 크면 6


// ** 보통 작업을 하다보면 소수점까지 표현해야 될 경우가 많다
// ** 요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림)
let userRate = 30.1234;

// 1번째 방법 ) 100을 곱하고 반올림을 해준뒤에 다시 100을 나누면 된다.
Math.round(userRate * 100)/100
// 3012.34 → 반올림 → 3012 → 나누기 100 → 30.12

// 2번째 방법 ) toFixed() : 소수점 자릿수 메서드 사용
// 숫자를 인수로 받아 그 숫자만큼 소수점 이하 갯수를 반환
userRate.toFixed(2); // "30.12"
userRate.toFixed(0); // "30" → 정수만 남는다
userRate.toFixed(6); // "30.123400" → 0으로 채워준다.
// 통계나 지표 작업할 때 굉장히 많이 쓰인다. 
// 유용하지만 한가지 주의할 점이 있다 → **문자열을 반환한다**
// 그래서 반환받은 이후에 **Number**을 이용해 숫자로 변환해서 사용하는 경우가 많다.
Number(userRate.toFixed(0)); // 30
Number(userRate.toFixed(6)); // 30.123400


// - isNaN() : NaN인지 검사하는방법
// NaN을 알수있는 유일한 방법이다.
let x = Number('x') // NaN

x == NaN // false
x === NaN // false
NaN == NaN // false
// NaN은 자기 자신과도 똑같지 않다고 판단한다. 그래서 isNaN만이 NaN인지를 판단할 수 있다.
isNaN(x) // true
isNaN(3) // false


// - parselnt() : 문자열을 숫자로 바꿔준다.
// Number()와 다른점은 문자와 혼용되어있어도 동작한다.
// 읽을 수 있는 부분 까지만 읽어서 반환한다.
let margin = '10px';
parseInt(margin); // 10
Number(margin); // NaN

// 그래서 숫자로 시작하지 않으면 parselnt는 NaN을 반환한다.
let redColor = 'f3';
parseInt(redColor); // NaN

//그러나 parseInt는 두번째 인수를 받아서 진수를 지정할 수 있다.
parseInt(redColor, 16); // 243
parseInt('11', 2) // 3
// 이렇게 문자열 11을 숫자로 바꾸고 2진수로 변환한다.


// - parseFloat() : parseInt와 동일하게 동작하지만 구동 소수점을 반환한다.
let padding = '18.5%'
parseInt(padding); // 18
parseFloat(padding); // 18.5



// - Math.random() : 0~1 사이 무작위 숫자 생성
// Q. 만약 1~100 사이 임의의 숫자를 뽑고 싶다면?
// = 식을 만들어서 사용해야 한다.
Math.floor(Math.random()*100)+1


// - Maht.max() / Math.min()
// : 괄호안의 최대값 / 괄호안의 최소값
Math.max(1,3,4,6,10,9,4.5) // 10
Math.min(1,3,4,6,10,9,4.5) // 1


// - Math.abs() : 절대밧
Math.abs(-1) // 1


// - Math.pow(n,m) : n에 m승 값 → 제곱값
Math.pow(2, 10) // 1024


// - Math.sqrt() : 제곱근
Math.sqrt(16) // 4


// Math method는 쇼핑몰이나 통계 지표 업무를 할 때 필수적이다.