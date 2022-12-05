//원래 풀이
function solution(sides) {
  let maxNum = Math.max(...sides);

  sides.splice(sides.indexOf(maxNum), 1);

  let sum = 0;
  for (let i = 0; i < sides.length; i++) {
    sum += sides[i];
  }
  return maxNum >= sum ? 2 : 1;
}

//리팩토링

let solution = (sides) => {
  let MaxSide = Math.max(...sides);
  let twoSidesSum =
    sides.sort().reduce((acc, cur, i) => {
      return acc + cur;
    }, 0) - MaxSide;

  return MaxSide < twoSidesSum ? 1 : 2;
};

solution([3, 6, 2]);
