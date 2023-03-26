// // //mảng


// //cách khái báo
// let names = [
//     "Mai Hinh",
//     "Mai Hinh",
//     "hiệp Trần",
//     "me m e",
//     "hiếu nguyễn",
//     "me m e",
//     "me m e",

// ];
// // console.log(name);



// // let numbers = [1, 10, 100, 1000];
// // let isRich = false;
// // let isHandsome = true;





// // //truy xuất giá trị 1 phần tử trong mảng




// // let array1 = ['a', 'b', 'c'];
// // let array2 = ['a', 'b', 'c'];

// // console.log(typeof (array1));
// // console.log(array1 + array2);


// // //hoán đổi giá trị của hai phần tử trong mảng
// // let tmp = name [0];
// // name[0] = name[2];
// // name[2] = tmp;
// // console.log(name);

// //duyệt mảng

// //c1 :for ...let i = 0 ....
// // for (i = 0; i < names.length; i++){
// //     let stt = i + 1;
// //     //
// //     let name = names[i];
// //     if (name == 'me m e' || name == 'Mai Hinh') {
// //         console.log(stt + "." + name);
// //     }

// // }


// const numbers = [1, 2, 3, 4, 10, -1, 6];
// //in ra số chẵn numbers
// for (let i = 0; i < numbers; i++){
//     const number = numbers[i];
//     if (number % 2 == 0)
//     console.log(number);
// }


// // // tính tổng phần tử
// // let sum = 0
// // for (let i = 0; i < numbers.length; i++){
// //     const number = numbers[i];
// //     sum + number;
// // }
// // console.log(sum);
// // //tính phần tử nhỏ nhất
// // let min =

// // thêm 3 số vào đầu mảng 
// numbers.unshift(100, 10, 20);
// // console.log(numbers);
// //thêm 3 số vào cuối mảng
// numbers.push(50, 70, 90);
// console.log(numbers);


// //xóa 1 phần tử đầu tiên trong mảng 
// let detleteF




//nhiệm vụ về nhà tìm hiểu phương thưc splice()?



// bài 1

// let dami = [];
// let n = prompt ("số n");
// for (let i = 0; i < n; i++ ){
//     let randomNumber = Math.floor(Math.random() *n);
//     dami[i] = randomNuber;

// }
// console.log(dami);

// bài 3

// let arr = [1, 2, 4, 5];
// while (arr.length > 1){
//     arr.pop();

// }
// console.log(arr);


// Thực Hành

// let myArray = [1, 3, 4, 5];
// let tich = 1;
// for (let i = 0; i < myArray.length; i++) {
//     tich = tich * myArray[i];
// }
// console.log(tich)
for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        //   break; 
          console.log('this will not run')
      }
      console.log(i); // 0 1 2 
  }