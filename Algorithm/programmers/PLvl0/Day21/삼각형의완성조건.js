let solution = (sides) => {
  // sides에 가장 긴 변이 있는경우
  let case1 = 0;
  for (let i = 1; i <= Math.max(...sides); i++) {
    if (i + Math.min(...sides) > Math.max(...sides)) case1++;
  }

  //나머지 한 변이 가장 긴 경우
  //max < n < max + min
  // 0 < n < min
  // n = min -1
  let case2 = Math.min(...sides) - 1;

  return case1 + case2;
};

solution([11, 7]);
