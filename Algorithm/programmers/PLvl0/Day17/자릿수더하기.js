// function solution(n) {
//   let string = n.toString();
//   let result = 0;
//   [...string].forEach((num) => (result += Number(num)));
//   return result;
// }

// //리팩토링
// let solution = (n) => {
//   return eval(String(n).split('').join('+'));
// };

//리팩토링 - reduce 이용해보기.
let solution = (n) => {
  return [...n.toString()].reduce((acc, cur) => acc + Number(cur), 0);
};

solution(1234);
