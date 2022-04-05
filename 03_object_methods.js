// Computed properts
let n = "name";
let a = "age";

const user = {
    [n] : 'Mike',
    [a] : 30,
    [1+4] : 5
};

// console.log(user); // {5: 5, name: 'Mike', age: 30}


// [ Methods ]
function makeObj(key, val){
    return{
        [key] : val
    }
}

const obj = makeObj("나이", 33);
console.log(obj) // {나이: 33}


// - 객체 복제
const user2 = {
    name : 'Mike',
    age : 30,
};

const user3 = Object.assign({}, user2);
user3.name = "Tom";

console.log(user2);
console.log(user3);

// - 키를 배열로 반환
const result = Object.keys(user2);
console.log(result); // ['name', 'age']


// - 값을 배열로 반환
const result2 = Object.values(user2);
console.log(result2); // ['Mike', 30]


// - 키와 값을 모두 배열로 반환
const result3 = Object.entries(user2);
console.log(result3); // 배열 안에 배열이 생긴다
// [ ['name', 'Mike'], ['age', 30] ]


// - 키와 값의 배열을 객체로 반환
let arr = [
    ['mon', '월'],
    ['tue', '화']
]


const result4 = Object.fromEntries(arr);
console.log(result4); // {mon: '월', tue: '화'}