// //내 풀이
// function solution(age) {
//   let stringAge = age.toString();
//   let convertedAge = '';

//   [...stringAge].forEach((num) => {
//     if (num == 0) convertedAge += 'a';
//     if (num == 1) convertedAge += 'b';
//     if (num == 2) convertedAge += 'c';
//     if (num == 3) convertedAge += 'd';
//     if (num == 4) convertedAge += 'e';
//     if (num == 5) convertedAge += 'f';
//     if (num == 6) convertedAge += 'g';
//     if (num == 7) convertedAge += 'h';
//     if (num == 8) convertedAge += 'i';
//     if (num == 9) convertedAge += 'j';
//   });
//   return convertedAge;
// }

// 리팩토링해보기
// function solution(age) {
//   let stringAge = age.toString();
//   let numToString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

//   return [...stringAge]
//     .map((num) => {
//       return numToString[num];
//     })
//     .join('');
// }

// solution(23);

// 다른 풀이 참고해서 더 짧게 ?!!

function solution(age) {
  return [...age.toString()]
    .map((num) => {
      return 'abcdefghij'[num];
    })
    .join('');
}

console.log(solution(23));
