// 생성자 함수 : 상품 객체를 생성해보자.
function Item(title, price){
    // this = {};
    this.title = title;
    this.price = price;
    this.showprice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }

    // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 10000);
const item3 = new Item('지갑', 30000);

console.log(item1,item2,item3);
item3.showprice();