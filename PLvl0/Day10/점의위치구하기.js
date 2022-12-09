function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) return 1;
  if (dot[0] < 0 && dot[1] > 0) return 2;
  if (dot[0] < 0 && dot[1] < 0) return 3;
  if (dot[0] > 0 && dot[1] < 0) return 4;
}

// 다른 사람 풀이 따라해보기 미침.

function solution(dot) {
  let [x, y] = dot;
  const check = x * y > 0; // true or false 할당
  return x > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

solution([1, -1]);
