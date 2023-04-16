// console.log("Bài 7:");
// let input = prompt("Nhập số n");
// for (let i = 1; i <= input; i++) {
//     if (input % i == 0){
//         console.log("số ước của " + input + ": " + i);
//     }
// }

// console.log("Bài 8:");
// input = prompt("Nhập số n");
// let isPrime = true;
// if (input < 2){
//     isPrime = false;
// }
// for (let i = 2; i < input - 1; i++) {
//     if(input % 2 == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log(input + " là số nguyên tố");
// }else{
//     console.log(input + " không là số nguyên tố");
// }

// console.log("Bài 9:");
// input = prompt("Nhập chuỗi các số");
// let lenString = prompt("Nhập độ dài chuỗi");
// for (let i = input.length; i <= lenString; i++) {
//     input += '0';
// }
// console.log("Chuỗi: " + input);

// console.log("Bài 10:");
// input = prompt("Nhập số đầu");
// let input1 = prompt("Nhập số thứ 2");
// let GCD;
// for(let i = 0; i <= input && i <= input1; i++){
//     if(input % i == 0 && input1 %i == 0){
//         GCD = i; 
//     }
// }
// console.log("Ước chung lớn nhất là: " + GCD);

// console.log("Bài 11");
// let input = prompt("Nhập số đầu");
// let input1 = prompt("Nhập số thứ 2");
// let GCD;
// for (let i = 1; i < i <= input && i <= input1; i++) {
//     if(input % i == 0 && input1 % 2 == 0){
//         GCD = i;
//     }
// }
// console.log("Bội chung nhỏ nhất của " + input + " và " + input1 + " là: " + (input*input1/GCD));

// console.log("Bài 12");
// let countAnswer = 1;
// let correct = Math.floor(Math.random() * 10 + Math.random() * 10);
// console.log("correct: " + correct);
// do {
//     let answer = prompt("Nhập số cần đoán: ");
//     if(answer == correct){
//         console.log("Bạn đã đúng");
//         break;
//     }

//     countAnswer++;
// } while (countAnswer <= 5);

// if(correct >= 5){
//     console.log("Bạn thua cuộc");
// }

// console.log("Bài 13");
// let input = prompt("Nhập số đi");
// console.log("Bảng cửu chương của " + input);
// for (let i = 0; i <= 9; i++) {
//     console.log(input * i);
// }

// console.log("Bài 14");
// let input = prompt("Nhập số đi");
// console.log("Hình vuông có độ dài cạnh " + input);
// let canh = "";
// for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= input; j++) {
//         canh += "*";
//     }
//     canh += "\n";
// }
// console.log(canh);

// console.log("Bài 15");
// let input = prompt("Nhập số rộng");
// let input1 = prompt("Nhập số dài");
// console.log("Hình vuông có độ dài cạnh " + input + " , " + input1);
// let canh = "";
// for (let i = 1; i <= input; i++) {
//     for (let j = 1; j <= input1; j++) {
//         canh += "*";
//     }
//     canh += "\n";
// }
// console.log(canh);

// console.log("Bài 16");
// let input = prompt("Nhập độ dài cạnh");
// console.log("Hình tam giác có độ dài cạnh góc vuông: " + input);
// let canh = "";
// for (let i = 1; i <= input; i++) {
//     for (let j = 0; j < i; j++) {
//         canh += "*";
//     }
//     canh += "\n";
// }
// console.log(canh);

// console.log("Bài 17");
// let w = prompt("Nhập cân nặng");
// let h = prompt("Nhập chiều cao");
// let BMI = w / (h ** 2);
// if (BMI < 18.5)
//     console.log("Nhẹ cân");
// else if (BMI < 23)
//     console.log("Bình thường");
// else if (BMI < 25)
//     console.log("Thừa cân");
// if (BMI >= 25)
//     console.log("Béo phì");