function solution(n) {
  let result = 2;

  for (let i = 1; i <= n; i++) {
    if (n === 1 || (i >= 2 && n / i ** 2 === 1)) result = 1;
  }
  return result;
}

// 리팩토링.
let solution = (n) => {
  let result = 2;
  for (let i = 1; i <= 1000; i++) {
    if (n / i ** 2 === 1) return 1;
  }
  return result;
};

// sqrt() 제곱근 구하는 메서드.
