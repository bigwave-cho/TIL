// function solution(polynomial) {
//   let polyArr = polynomial.split(' ');
//   let xArr = [];
//   let numArr = [];

//   for (let i = 0; i < polyArr.length; i++) {
//     polyArr[i].split('').indexOf('x') > -1
//       ? xArr.push(polyArr[i])
//       : polyArr[i].split('').indexOf('+') > -1
//       ? null
//       : numArr.push(polyArr[i]);
//   }

//   let xString = 0;
//   let numString = 0;

//   if (xArr.length > 0) {
//     xArr.forEach((x) => {
//       x.split('x')[0] === '' ? xString++ : (xString += Number(x.split('x')[0]));
//     });
//   }

//   numArr.forEach((num) => {
//     numString += Number(num);
//   });

//   if (numString && xString) {
//     return xString === 1 ? `x + ${numString}` : `${xString}x + ${numString}`;
//   } else if (xString) {
//     return xString === 1 ? `x` : `${xString}x`;
//   } else if (numString) {
//     return `${numString}`;
//   }
// }

// 더 짧게 안될까.. 머리를  탁!  return replace() || 1   false || true 는 true가 반환됨.

let solution = (polynomial) => {
  let xNum = polynomial
    .split(' + ')
    .filter((n) => n.includes('x'))
    .map((n) => n.replace('x', '') || 1)
    .reduce((acc, cur) => acc + Number(cur), 0);

  let num = polynomial
    .split(' + ')
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + Number(cur), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`);
  if (num) answer.push(num);

  return answer.join(' + ');
};

console.log(solution('1'));
