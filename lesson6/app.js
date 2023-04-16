// log thường
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// log lỗi
console.error("Error");

// log cảnh báo
console.warn("Warning");

// let name1;
// name1 = 'ABC';
// let age = 20;
// console.log(name1);
// const Hello = 'DEF';
// console.log(Hello);

console.log('Bài 1:');
let x = true;
let y = true;
let z = false;

console.log("x && y && z:", x && y && z);
console.log("x && y && !z:", x && y && !z);
console.log("(x && y) || z:", (x && y) || z);
console.log("(x && y) || !z:", (x && y) || !z);
console.log("x && (y || z):", x && (y || z));
console.log("x && !(y || z):", x && !(y || z));
console.log("x && (y || !z):", x && (y || !z));
console.log("x && (!y || z):", x && (!y || z));

console.log('Bài 2:');
let name = "AAA";
let age = 20;
let isGood = true;

console.log("age + 10:", age + 10);
console.log("age % 10:", age % 10);
console.log("name + 'BBB':", name + "BBB");
console.log("!isGood:", !isGood);
console.log("name === 'aaa' && age >= 20:", name === 'aaa' && age >= 20);
console.log("name === 'aaa' && isGood:", name === 'aaa' && isGood);
console.log("!(age < 10) && !isGood:", !(age < 10) && !isGood);

console.log('Bài 3:');
let a = 10;
let b = 20;
let c = 30;
let d = '40';

console.log("a + b + c:", a + b + c); // 60
console.log("a - b / c :", a - b / c); // 10
console.log("a - (b * c):", a - (b * c)); // -590
console.log("d - (a * b) - c:", d - (a * b) - c); // -190
console.log("a + b + c + d:", a + b + c + d); // 6040
console.log("d + a + b + c:", d + a + b + c); // 40102030
console.log("d + a - b + c:", d + a - b + c); // 4020
console.log("a - b + d - c:", a - b + d - c); // -1070
console.log("d - c + a - b:", d - c + a - b); // 0
console.log("a * b + d * c:", a * b + d * c); // 1400

console.log('Bài 4:');
x = true, y = false, z = 10

console.log("x && y:", x && y); // F
console.log("x && !y:", x && !y); // T
console.log("x && z == 10:", x && z == 10); // T
console.log("(x && z == 10):", (x && z == 10)); // T
console.log("!(x && z == 10):", !(x && z == 10)); // F
console.log("!(x && z == 50):", !(x && z == 50)); // T
console.log("x && y && z == 10:", x && y && z == 10); // F
console.log("x && !y && z == 10:", x && !y && z == 10); // T
console.log("x || y || z == 10:", x || y || z == 10); // T
console.log("(x && y) || z != 10:", (x && y) || z != 10); // F
console.log("!(x && z == 10) || y:", !(x && z == 10) || y); // F

console.log("Bài 5:");
a = 1, b = '2', c = 3, d = '4';

console.log("b + d:", b + d); // '24'
console.log("a + b + c + d:", a + b + c + d); // '1234'
console.log("a - b + c - d:", a - b + c - d); // -2
console.log("a - b - c + d:", a - b - c + d); // '-44'
console.log("(b + d) - (a + c):", (b + d) - (a + c)); // 20
console.log("(a + b) - (c + d):", (a + b) - (c + d)); // -22
console.log("a * c + b * d:", a * c + b * d); // 11
console.log("-b + d:", -b + d); // '-24'
console.log("-b - d:", -b - d); // -6
console.log("-(b + d) :", -(b + d) ); // -24

console.log("Bài 6:");
age = 25, isMarried = false, isRich = true;


// age > 25 && isMarried && isRich → ?
// (age <= 25 || isMarried) && isRich → ?
// (age > 10 || isRich) && isMarried → ?
// !(age >= 15 && isMarried) && isRich → ?
// !(age <= 20) || !(isMarried && isRich) → ?
// (age > 8 && !isMarried) || isRich → ?
// !(age < 8 && !isMarried) || isRich → ?
// (age == 8 && isMarried) || !isRich → ?