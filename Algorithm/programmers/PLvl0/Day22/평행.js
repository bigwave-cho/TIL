function solution(dots) {
  let leanArr = [];
  let result = 0;

  dots.forEach((dot, i) => {
    for (let j = i + 1; j < dots.length; j++) {
      let curLean = (dot[1] - dots[j][1]) / (dot[0] - dots[j][0]);
      if (leanArr.includes(curLean)) result = 1;
      leanArr.push(curLean);
    }
  });
  console.log(leanArr);
  return result;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
