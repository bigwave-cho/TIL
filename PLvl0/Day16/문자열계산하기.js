function solution(my_string) {
  // let result = 0;
  // let numArr = my_string.split(' ');

  // for (let i = 0; i < numArr.length; i++) {
  //   if (numArr[i] * 1) {
  //     result += numArr[i] * 1;
  //   } else {
  //     numArr[i] === '+'
  //       ? (result += numArr[i + 1] * 1)
  //       : (result -= numArr[i + 1] * 1);
  //     i++;
  //   }
  // }

  let calc = 0;
  let arr = my_string.split(' ');

  arr.forEach((v, i) => {
    if (i === 0) calc += v * 1;
    v === '+'
      ? (calc += arr[i + 1] * 1)
      : v === '-'
      ? (calc -= arr[i + 1] * 1)
      : null;
  });

  return calc;
}

solution('3 + 7');
// // eval 사용 해커 공격 취약.
// const solution = (my_string) => {
//   return eval(my_string);
// };

// 다른 사람 풀이

function solution(my_string) {
  const calc = (a, b) => {
    return operator === '+' ? a + b : a - b;
  };

  let operator = '';
  return my_string.split(' ').reduce((acc, cur) => {
    if (!+cur) {
      operator = cur;
      return acc;
    }
    if (!operator) return acc + +cur;
    if (operator && !isNaN(+cur)) return calc(acc, +cur);
  }, 0);
}
