// let thepet = {
//     ten : "myna",
//     age : 2,
//     loai : "dog"
// }
// let my = {
//     hoten : 'maivanhinh',
//     sinhngay : ' 08/01/2002',
//     que : 'ninh binh',
//     pet : thepet
// };
// // console.log(my)
// console.log(my.hoten);
// // my.olet = "ngoc trinh";
// my["olet"] = "ngoc trinh";
// delete my.sinhngay
// console.log(my)



//kiểu1: không có đầu vào cx không có đầu ra

// function kieu1 (){
//     console.log("Hello work")
// }

//Kiểu 2: Có đầu vào mà không có đầu ra
// function dauvaodaura(age, name) {
//     console.log("age", age);
//     console.log("name", name);
// }

//kiểu 3: Không có đầu vào nhưng có đầu ra
// function kieu3 (){
//     return "Heloo work";
// }


//kiểu4 : Có đầu vào và có đàu ra 
// function kieu4 (name, age){
//     return "this is" + name + ",age" + age;
// }


//Khai báo function nhập và kiểm tra 1 số

// let a = 0;
// let b = 0;

// function nhapso (soavab) {
//     let ten = NaN;
//     do {
//         ten = Number(prompt("nhập vào số "+ soavab +   ": " ));

//     }while(isNaN(ten));

//     return ten; //Trả về giá trị khi gọi hàm và không thực thi các đoạn code bên dưới
//     console.log("Thực thi chỗ này không ?")
// }

// // Gọi function
// a = nhapso('a');
// b = nhapso('b');

// let c = nhapso('c')
// console.log(a + b + c);


// function helloWorld (name){
    
// }
// console.log("Hello World" + name)



//function có tính chất hoisting: sử dụng function trước khi khai báo 
// function thamso (a, b) {

// }


// function test (){
//     let a = 100;
//     let b = 10;
//     function fun2() {
//         return a + b;
//     }
//     return fun2();
// }
// const rest = test();
// console.log(rest)

// function hello() {
//     console.log("Hello World");
// }
// function dosome() {
//     console.log("Do Something")
// }
// function laplaitheogiay(giay, cv){
//     console.log("thục thi gì đó sau " + giay + " giây ")
//     setTimeout(cv, giay * 1000);
// } 
// laplaitheogiay(3, hello);
// laplaitheogiay(6, dosome);
 
//Thực thi gì đó sau 3 giây
//Hello World

//Thực thi gì đó sau 5 giây
//Do Something

//Khai báo arrow function

// const ten1 = () => {

// }

// const ten2 = () => {
//     return "Hello";
// }

// function ten3(a, b, c){
//     return a + b + c
// }
// const ten3 = (a, b, c) => a + b + c;


