let solution = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count++;
    while (count % 3 === 0 || String(count).includes(3)) {
      count++;
    }
  }
  return count;
};

console.log(solution(40));
