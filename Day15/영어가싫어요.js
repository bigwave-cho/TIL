// function solution(numbers) {
//   let convertObj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   let number = '';
//   let result = '';
//   [...numbers].forEach((num) => {
//     number += num;
//     if (number in convertObj) {
//       result += convertObj[number].toString();
//       number = '';
//     }
//   });
//   return result * 1;
// }

// 다른 사람 풀이 참고 // replaceAll()

function solution(numbers) {
  let numStr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  numStr.forEach((str, i) => {
    numbers = numbers.replaceAll(str, i);
  });
  return numbers;
}
solution('onetwothreefourfivesixseveneightnine');
