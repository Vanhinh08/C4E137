// for (i = 1; i <= 500; i++ ){
//     console.log(i + ".Anh Yêu Em")
// }

// let num = 0;
// for (let i = -10; i <= 50; i++){
//     if (i % 2 == 0){
//         num += i;
//     }

// }
// console.log(num)


// let num = 10;
// while(num >= 2){
//     console.log(num)
//     num = Math.floor(Math.random()* 10 )
// }

// let i = 0;
// while (i < 200){
//     i++;
//     console.log(i)
// }
// // console.log(i)


// let x = prompt('nhập x');
// let y = prompt('số y');

// if (
//     x >= 0
//     && x < y
//     && y <= 100
// ){
//     while (x < y){
//     x ++;
//     y--;
// }
// console.log(x, y);

// }


// for (let i = 1; i <= 300; i++ ){
//     if(i % 2 == 0 && i % 3 == 0 ){
//         console.log(i)
//     }

// }


// let sum = 0;
//  for (let i = -30; i <= 50; i++ ){
//     if (i % 2 === 0){
//         sum += i;
//     }
//  }
//  console.log(sum)


// let n = prompt ("nhập số n");
// let giaithua = 1;
// for (i = 1; i <= n; i++){
//     giaithua *= i;
// }
// console.log('gia thừa của ',n,'là:' , giaithua)


// let a = prompt ("nhập số a");
// let b = prompt ("nhập số b");
// let x = prompt ("nhập số x");
// let i = 0;
// while(i)

// let n = prompt ("nhập vào số n");
// let u = 0
//  console.log("các ước của ",n,"là:")
// while(u <= n){
//     u++;
//    if(n % u === 0){
//     console.log(u) 
//    }
// }

// let n = parseInt(prompt("Nhập số nguyên n: "));

// Kiểm tra các trường hợp đặc biệt
// if (n <= 1) {
//   console.log(n + " không phải số nguyên tố.");
// } else if (n <= 3) {
//   console.log(n + " là số nguyên tố.");
// } else {
  // Kiểm tra n có chia hết cho các số từ 2 đến căn bậc hai của n không
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
  
//   // In kết quả kiểm tra
//   if (isPrime) {
//     console.log(n + " là số nguyên tố.");
//   } else {
//     console.log(n + " không phải số nguyên tố.");
//   }
// }

/* Bài 9 nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l*/
// let s = prompt("nhập s");
// let l = prompt("nhập l");
// while (s.length < l){
//     s = '0' + s

// }
// console.log(s)


/* Bài 10: Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n. */

// let correct = 0;
// while (correct < 1 || correct >20){
//     correct = Math.floor(Math.random() *20) + 1;
// }
// console.log(correct)


// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i])
// }

// let h = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let j = 0;
// while (  j < h.length){
//   j++;
//   console.log(h[j])

// }

// const arr = [1, 2, 3, 4, 5, 6]
// arr.splice(4, 4, 7)
// console.log(arr) // [1, 7, 4, 5, 6]

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.slice(1, 3)) // [3, 4]


// let array = [1, 2, 3, 4]
// ar = array[1] + array[2];
// console.log(ar)

// let aray = [1, 4, -3, 5, 8, 9, 12];

// for (i = 0; i < aray.length; i++){
//   if(aray[i] % 2 == 0){
//     console.log(aray[i])
//   }
  
// }
// let sum = 0;

// for (i = 0; i < aray.length; i++){
 
//   sum += aray[i]
// }
// console.log(sum)

// let min = aray[5]
// for (i = 0; i < aray.length; i++){
//  if(min < aray[i]){
//   min = aray[i]
//  }
// }
// console.log(min)


// let arr = [];

// let n = prompt("nhập số n");
//  if (n > 0){
//   for (i = 0; i < n; i++){
//     arr.push(Math.floor(Math.random() * 100) +1);
    
//   }
//   console.log(arr)
  
//  }

// let myArray = []; // Khai báo một mảng rỗng

// let n = parseInt(prompt("Nhập vào số n: ")); // Nhập vào số nguyên dương n

// if (n > 0) { // Kiểm tra n có lớn hơn 0 không
//   for (let i = 0; i < n; i++) {
//     myArray.push(Math.floor(Math.random() * 100) + 1); // Thêm một số ngẫu nhiên từ 1 đến 100 vào mảng
//   }

//   console.log(myArray); // In ra mảng đã điền số ngẫu nhiên
// } else {
//   console.log("Số n phải lớn hơn 0"); // Thông báo nếu n không hợp lệ
// }







