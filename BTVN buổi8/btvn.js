// BÀi 7

// let n = prompt ("nhập vào số n");
// let count = 0;

// for(i = 1; i <= n; i++){
//     if(n % i === 0){
//         count++;
//     }
// }
// console.log('số ước của',n,"là:",count);


// BÀi 8
// let n = prompt("Nhập số nguyên dương n: ");
// let isPrime = true;
// if (n < 2) {
//   text = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       text = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(n, "là số nguyên tố");
// } else {
//   console.log(n, "không phải là số nguyên tố");
// }



// Bài 9

// let s = prompt(" chuỗi s");
// let l = parseInt(prompt("số l"));
// while(s.length < l ){
//     s = '0' + s;
// }
// console.log("chuỗi kết quả:"+s)

    
// Bài 10


// let m = parseInt(prompt("Nhập số m: "));
// let n = parseInt(prompt("Nhập số n: "));

// while (n !== 0) {
//   let r = m % n;
//   m = n;
//   n = r;
// }

// console.log("Ước chung lớn nhất của " + m + " và " + n + " là: " + m);
 

// Bài 11

// let m = prompt ("nhập số m");
// let n = prompt ("nhập số n");

// let ucln = m;
// while(ucln % n !== 0){
//     ucln += m;
// }

// let bcnn = (m * n) / ucln;

// console.log("bội chung nhỏ nhất " + m + "và" +n+ "là:" + bcnn);

// bài 13

// let n = parseInt(prompt("Nhập vào số n (2 <= n <= 10):"));
// if (n < 2 || n > 10) {
//   console.log("Số n không hợp lệ.");
// } else {
//   for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
//   }
// }







