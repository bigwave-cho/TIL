//내 풀이
// function solution(emergency) {
//   let count = 0;
//   let result = [];
//   emergency.forEach((num) => {
//     count = 0;
//     for (let i = 0; i < emergency.length; i++) {
//       if (num === Math.min(...emergency)) {
//         result.push(emergency.length);
//         return;
//       }
//       if (num <= emergency[i]) {
//         count++;
//       }
//     }
//     result.push(count);
//   });
//   return result;
// }

// console.log(solution([3, 76, 24]));

// 리팩토링 해보기!

function solution(emergency) {
  return emergency.map((num) => {
    let orderCount = 0;
    emergency.forEach((value, i) => {
      if (num <= emergency[i]) orderCount++;
    });
    return orderCount;
  });
}
solution([3, 76, 24]);

// 고수 풀이

function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
//처음엔 sort를 써볼까 생각했지만 그 후 어떡할지 떠오르지 않았음...
