//내풀이

function solution(my_string) {
  let numsArr = [];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  [...my_string].forEach((letter) => {
    console.log(typeof letter, letter);
    if (numbers.includes(Number(letter))) numsArr.push(letter);
  });

  return numsArr
    .sort((a, b) => a - b)
    .map((nums) => {
      return Number(nums);
    });
}

//리팩토링해보기
let solution = (my_string) => {
  return [...my_string]
    .filter((text) => !isNaN(text))
    .map((num) => Number(num))
    .sort((a, b) => a - b);
};
