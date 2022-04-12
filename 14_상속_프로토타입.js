// const car = {
//     wheels:4,
//     drive(){
//         console.log('drive..')
//     }
// }

const Bmw = function (color){
    this.color = color;
}

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function(){
//     console.log('drive..');
// }
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function(){
//     console.log("STOP!!")
// };

Bmw.prototype = {
    constructor:Bmw,
    wheels: 4,
    drive(){
        console.log('drive..');
    },
    navigation: 1,
    stop(){
        console.log("STOP!");
    }
}

const x5 = new Bmw('red')
const x4 = new Bmw('blue')

// x5.__proto__=car;
// x4.__proto__=car;

console.log(`******************`)

const Bmw2 = function(color){
    this.color = color;
}

const x6 = new Bmw2('red');

console.log(`******************`)

const Bmw3 = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    }
}

const x7 = new Bmw3('red');

