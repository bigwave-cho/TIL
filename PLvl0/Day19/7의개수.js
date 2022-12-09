// function solution(array) {
//   let count = 0;
//   array.forEach((item) => {
//     let arr = item.toString().split('');
//     arr.forEach((item) => {
//       if (item === '7') {
//         count++;
//       }
//     });
//   });
//   return count;
// }

// 다른 사람 풀이 참고

let solution = (array) => {
  console.log(array.join('').split(7).length - 1);
};

solution([77]);
