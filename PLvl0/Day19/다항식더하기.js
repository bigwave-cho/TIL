function solution(polynomial) {
  let polyArr = polynomial.split(' ');
  let xArr = [];
  let numArr = [];

  for (let i = 0; i < polyArr.length; i++) {
    polyArr[i].split('').indexOf('x') > -1
      ? xArr.push(polyArr[i])
      : polyArr[i].split('').indexOf('+') > -1
      ? null
      : numArr.push(polyArr[i]);
  }

  let xString = 0;
  let numString = 0;

  if (xArr.length > 0) {
    xArr.forEach((x) => {
      x.split('x')[0] === '' ? xString++ : (xString += Number(x.split('x')[0]));
    });
  }

  numArr.forEach((num) => {
    numString += Number(num);
  });

  if (numString && xString) {
    return xString === 1 ? `x + ${numString}` : `${xString}x + ${numString}`;
  } else if (xString) {
    return xString === 1 ? `x` : `${xString}x`;
  } else if (numString) {
    return `${numString}`;
  }
}
