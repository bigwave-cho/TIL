function solution(order) {
  let count = 0;
  [...order.toString()].forEach((num) => {
    num != 0 && num % 3 === 0 && count++;
  });
  return count;
}
