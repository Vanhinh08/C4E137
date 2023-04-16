let arr = [1, 5, 8, 6, 7, 9, 3, 2, 55, 18, 2];
console.log("Bài 1")
let mutiply = 1;
let sum = 0;
let minEven = NaN;
let maxDevineBy3 = NaN;
let average = 0;
let arrIsPrime = [];
let lessBy10 = false;
let biggerBy20 = false;
let findedMinEven = false;
let findedMaxDevineBy3 = false;
let arrSorted = arr;
for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    sum += value;
    mutiply *= value;
    if (value % 2 == 0) {
        if (!findedMinEven) {
            findedMinEven = !findedMinEven;
            minEven = value;
        }

        if (minEven != NaN && minEven > value) {
            minEven = value;
        }
    }

    if (value % 3 == 0) {
        if (!findedMaxDevineBy3) {
            findedMaxDevineBy3 = !findedMaxDevineBy3;
            maxDevineBy3 = value;

        }

        if (maxDevineBy3 != NaN && maxDevineBy3 < value) {
            maxDevineBy3 = value;
        }
    }
    let countIsPrime = 1;
    let dividend = 2;
    while (dividend < value) {
        if (value % dividend == 0) {
            countIsPrime++;
        }
        dividend++;
    }

    if (countIsPrime <= 2 && value != 1) {
        arrIsPrime.push(value);
    }

    if (value < 10) {
        lessBy10 = true;
    }

    if (value > 20) {
        biggerBy20 = true;
    }
}
for (let i = 0; i < arrSorted.length; i++) {
    const value = arrSorted[i];
    for (let j = i + 1; j < arrSorted.length; j++) {
        let valueCompare = arr[j];
        if (value > valueCompare) {
            let tmp = arrSorted[i];
            arrSorted[i] = arr[j];
            arrSorted[j] = tmp;
        }
    }
}


average = sum / arr.length;

console.log("Tích của các phần tử trong mảng: ", mutiply);
console.log("Số nhỏ nhất mà chia hết cho 2 trong mảng: ", minEven);
console.log("Số lớn nhất mà chia hết cho 3 trong mảng: ", maxDevineBy3);
console.log("Giá trị trung bình của mảng: ", average);
console.log("Các số nguyên tố trong mảng: " + arrIsPrime);
console.log("Có số nhỏ hơn 10: ", lessBy10 ? "Có" : "Không");
console.log("Có số lớn hơn 20: ", biggerBy20 ? "Có" : "Không");
console.log("Mảng đã được sắp xếp: ", arrSorted);


// let correct = false;
// while (!correct) {
//     let input = Number(prompt("Nhập 1 số bất kỳ:"));
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (input == element){
//             correct = !correct;
//             break;
//         }
//     }
// }
// console.log("Bạn đã đoán đúng");

console.log("Bài 2");
let arrString = ["Dua", "Tao", "Le", "Cam", "Quyt"];
let minLenght = arrString[0].length;
let indexMinLenght = 0;
let arrSubString = [];
let arrSub3String = [];
let stringAll = "";
// let input = prompt("Nhập chuỗi bất kỳ");
for (let index = 0; index < arrString.length; index++) {
    const element = arrString[index];
    if (minLenght > element.length) {
        minLenght = element.length;
        indexMinLenght = index;
    }

    if (element.length >= 3) {
        arrSub3String.push(element.slice(0, 3))
    }
    stringAll += element + "-";

    // if (element.search(input) > 0) {
    //     arrSubString.push(element);
    // }
}
console.log("Chuỗi ngắn nhất đầu tiên: ", arrString[indexMinLenght]);
console.log("Danh sách chứa chuỗi con: ", arrSubString.length == 0 ? "Không có" : arrSubString);
console.log("Danh sách chứa 3 ký tự đầu: ", arrSub3String.length == 0 ? "Không có" : arrSub3String);
console.log("Chuỗi kết hợp: ", stringAll.slice(0, stringAll.length - 1));
