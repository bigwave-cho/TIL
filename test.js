let solution = (a, b) => {
  // 5 20 -> 20 5 -> 0  ;; 5가 최대 공약수.
  let gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  };

  let 분모 = 20 / gcd(a, b);

  while (분모 % 2 === 0) {
    분모 = 분모 / 2;
  }
  while (분모 % 5 === 0) {
    분모 = 분모 / 5;
  }
  return 분모 === 1 ? 1 : 2;
};

solution(5, 20);
