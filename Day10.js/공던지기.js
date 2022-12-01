function solution(numbers, k) {
  let result = 0;
  let index = 0;
  let a = 1;
  while (index <= k && a < k) {
    a++;
    if (index < numbers.length) index += 2;
    if (index > numbers.length) index = 1;
    if (index === numbers.length) index = 0;
    result = numbers[index];
    console.log(result);
  }
  return result;
}
