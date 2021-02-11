/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var 変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能

// //val3 = "const変数を上書き";

// const val4 = {
//   name: "あああ",
//   age: 20
// };
// //console.log(val4);

// val4.name = "jak";
// val4.addres = "hiroshima";
// console.log(val4);

/**
 * テンプレート文字列
 */

// const name = "ジャケえ";
// const age = 28;
// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

//従来の関数

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) =>  num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name: "ジャケ",
  age: 28
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です`;
console.log(message2);
