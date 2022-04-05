
// [ String의 특징 ]
// * html 코드같은 경우 작은따옴표로 감싸는게 편하다 -> html 코드에 큰따옴표를 많이 사용하기 때문에
let html = '<div class="box_title">영화제목</div>';


// * 영어는 작은따옴표를 쓰는 경우가 많기 때문에 큰따옴표로 감싸는게 좋다.
let desc = "It's 3 0'clock."


// * `(백틱)은 $(달러)나 {}(중괄호)를 이용해 변수를 표현하거나 표현식을 쓸 수 있다.
let name = 'Mike';
let result = `My name is ${name}.`
let add = `2 더하기 3은 ${2+3}입니다.`

// * `(백틱)의 유용한 기능 : 여러줄 표현 가능
let desc2 = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;

// * 만약 '(따옴표)로 표현하려면 \n을 사용해야한다.
let desc3 = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.'
// 그리고 꼭 한줄로 작성해야된다. 줄바꿈 하면 error가 난다. 
let desc4 = '오늘은 맑고 화창한' // error!!
//날씨가 계속 되겠습니다.
//내일은 비소식이 있습니다.'; 


// [ Methods ]
// - length : 문자열 길이
let desc5 = '안녕하세요';
desc.length // 6
// 보통 가입할 때 아이디나 비밀번호의 문자 길이 제한할 때 사용한다.
// 특정 위치에 접근 
desc[2] // '하'
// 배열과 동일하게 0부터 시작한다.
// 하지만 배열과 다르게 한글자만 바꾸는 건 X
desc[4] = '용'
console.log(desc5); // 안녕하세요.


// - toUpperCase() / toLowerCase()
// : 영어의 경우 모든 영문을 대문자 / 소문자 변환 
let desc6 = "Hi guys. Nice to meet you"
desc6.toUpperCase(); // HI GUYS. NICE TO MEET YOU
desc6.toLowerCase(); // hi guys. nice to meet you


// - str.indexOf(text) : 문자를 인수로 받아 몇번째에 위치하는지 알려준다.
desc6.indexOf('to'); // 14 (0부터 센다.)
desc6.indexOf('man'); // -1 (찾는 문자가 없을 경우 -1을 반환한다.)
// 주의! 포함된 문자가 여러개여도 첫번째 위치만 반환한다
if(desc6.indexOf('Hi')){ // 이대로 작성하면 사용불가 index가 0이기 때문에 if에서 0은 false이다.
    console.log('Hi가 포함된 문장입니다.')
}
if(desc6.indexOf('Hi') > -1){ // 그래서 항상 -1보다 큰가로 비교하면 된다.
    console.log('Hi가 포함된 문장입니다.')
}


// - str.slice(n,m) : 특정 범위의 문자열 뽑기
// n부터 m까지 문자열 반환
// n : 시작점
// m : 없으면 문자열 끝까지, 양수면 그 숫자까지 (마지막은 포함하지 않음. 즉 5를 적으면 4까지 반환), 음수면 끝에서부터 센다.
let desc7 = "abcdefg";
desc7.slice(2) // "cdefg"
desc7.slice(0, 5) // "abcde"
desc7.slice(2, -2) // "cde" → index 2에서 끝에서 두번째 위치까지 반환


//  - str.substring(n,m)
// n과 m 사이 문자열 반환
// n과 m을 바꿔도 동작함
// 음수 허용 X, 음수는 0으로 인식
desc7.substring(2,5); // "cde"
desc7.substring(5,2); // "cde"

// - str.substr(n,m)
// n부터 시작
// m개를 가져옴
desc7.substr(2,4) // "cdef"
desc7.substr(-4,2) // "de"


// - str.trim() : 앞 뒤 공백제거
// 보통 사용자로 부터 무언가를 입력 받을 때 사용
let desc8 = " coding      ";
desc.trim(); // "coding"
// 의도적으로 맨앞과 뒤에 스페이스를 넣는 경우는 거의 없을 것


// - str.repeat(n) : n번 반복
let hello = "hello!";
hello.repeat(3); // "hello!hello!hello!"


// - 문자열 비교
1 < 3 // true
"a" < "c" // true
// 문자의 번호를 어떻게 아나요?
// 1.
"a".codePointAt(0); // 97
// 2.
String.fromCodePoint(97); // "a"
// 외울필요 없이 알파벳은 a < z & 소문자 < 대문자 정도만 알고있으면 된다.



// [ 실용적인 예제 ]
// Q. 숫자는 제외하고 문자만 나타내기
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList)

// Q 금칙어 : 콜라
// 시도 1
function hasCola1(str){
    if(str.indexOf('콜라')){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과')
    }
}

hasCola1('와 사이다가 짱이야!') // 금칙어가 있습니다. // indexOf = -1
hasCola1('무슨소리, 콜라가 최고') // 금칙어가 있습니다.
hasCola1('콜라') // 통과 // indexOf = 0
// 결과가 이상하다.
// -1 은 if에 들어갈 수 없다!

// 시도 2 
function hasCola(str){
    if(str.indexOf('콜라') > -1){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과')
    }
}
hasCola('와 사이다가 짱이야!')  // 통과
hasCola('무슨소리, 콜라가 최고') // 금칙어가 있습니다.
hasCola('콜라') // 금칙어가 있습니다.

// 시도 3
// includes
// 문자가 있으면 true
// 문자가 없으면 false 반환
function hasCola3(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과')
    }
}
hasCola3('와 사이다가 짱이야!')  // 통과
hasCola3('무슨소리, 콜라가 최고') // 금칙어가 있습니다.
hasCola3('콜라') // 금칙어가 있습니다.