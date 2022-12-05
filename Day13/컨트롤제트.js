function solution(s) {
  let arr = [];
  s.split(' ').forEach((value) => {
    value === 'Z' ? arr.pop() : arr.push(value);
  });

  return arr.reduce((acc, cur) => {
    return +acc + +cur;
  }, 0);
}

solution('10 Z 20 Z');
