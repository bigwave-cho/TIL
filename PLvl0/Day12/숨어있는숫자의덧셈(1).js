//풀이1
function solution(my_string) {
  let result = 0;
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numbers = [...my_string].filter((index) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == index) return index;
    }
  });

  numbers.forEach((num) => {
    result += Number(num);
  });
  return result;
}

// 리팩토링해보기
let solution = (my_string) => {
  return [...my_string]
    .filter((value) => !isNaN(value))
    .reduce((acc, cur) => acc * 1 + cur * 1, 0);
};

solution('aAb1B2cC34oOp');
