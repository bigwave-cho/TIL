function solution(s) {
  let convertObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = '';
  let string = '';
  [...s].forEach((str) => {
    if (!isNaN(str * 1)) {
      result += str;
    } else {
      string += str;
      if (convertObj[string] || string === 'zero') {
        result += convertObj[string];
        string = '';
      }
    }
  });
  return result * 1;
}

console.log(solution('four0zero'));
