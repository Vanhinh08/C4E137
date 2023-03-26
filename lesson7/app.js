// console.log("Welcome to javascript");
// console.log("Hello");
// console.log("this is test text");

// console.error("đây là 1 lỗi");

// console.warn("đây là cảnh báo")

// //tên biến bắt đầu bằng chữ cái hoặc "_" hoặc "$"

// //trong đặt tên biến có thể dùng số

// let name //khai báo biến 

// name ="giá trị mới của name";//gán gía trị của biến
// console.log(name); //hiển giá trị của biến name lên màn hình console
// let age = 10 //khai báo & gán giá trị của biến
// const hello = "càn lao vi tiên thủ"
// console.log(hello); //hằng số không thể thay đổi giá trị

// let something ="a"; //tên biến phân biệt chữ hoa và chữ thường
// let SOMETHING ="b";

let x = true ;
let y = true ;
let z = false ;

console.log(x && y && z);
console.log(x && y &&! z);
console.log((x && y) || z)
console.log((x && y) || !z);

let name ='AAA';
let age = 20;
let isGood = true;

console.log(age + 10 )
console.log(age % 3)
console.log(name + 'BBB')
console.log( !isGood)
console.log( name == 'aaa' && age >= 20)
console.log(name != 'aaa' && isGood)
console.log(!(age < 10) && !isGood)

let a = 10;
let b = 20;
let c = 30;
let d = '40';

console.log( a + b + c);
console.log(a - b / c);
console.log(a - (b * c));
console.log(d- (a * b) - c);
console.log(a + b + c + d);
console.log(d + a - b + c );
console.log(a - b + d - c);
console.log(d + a - b + c);
console.log(d - c + a - b);
console.log( a * b + d * c);

x = true, y = false, z = 10


console.log(x && y);
console.log( x && !y)
console.log(x && z == 10)
console.log(x && z == 10) 
console.log(!(x && z == 10) )
console.log(!(x && z == 50))
console.log(x && y && z == 10)
console.log(x && !y && z == 10)
console.log(x || y || z == 10)
console.log((x && y) || z != 10)
console.log(!(x && z == 10) || y) ;

let a =10;
let b=5;
let c='1';

console.log(a-(b++)==5)
