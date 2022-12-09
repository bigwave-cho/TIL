function solution(numbers) {
  let maxResult = 0;
  numbers.forEach((num, i) => {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] > maxResult)
        maxResult = numbers[i] * numbers[j];
    }
  });
  return maxResult;
}
