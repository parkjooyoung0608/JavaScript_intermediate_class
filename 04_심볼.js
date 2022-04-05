// 다른 개발자가 만들어 놓은 객체
const user = {
    name: 'Mike',
    age: 30,
};





// 내가 작업
// user.showName = function(){};
const showName = Symbol('show name');
user[showName] = function(){
    console.log(this.name);
};

user[showName]();
// 추가한 메소드도 잘 동작하고,
// 다른개발자가 만들어놓은 코드에도 영향을 미치지않는다.







// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}
