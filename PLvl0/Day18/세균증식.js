let solution = (n, t) => {
  for (let i = 1; i <= t; i++) {
    n *= 2;
  }
  return n;
};

console.log(solution(2, 10));
