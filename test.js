let solution = (sides) => {
  let case1 = 0;
  for (i = 1; i <= Math.max(...sides); i++) {
    if (i > Math.max(...sides) - Math.min(...sides) && i <= Math.max(...sides))
      case1++;
  }

  // 요소 아닌게 가장 긴 경우
  // 배열 중 긴 요소 < n < sides[0] + sides[1]

  let case2 = Math.min(...sides) - 1;

  return case1 + case2;
};

console.log(solution([11, 7]));
