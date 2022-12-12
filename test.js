function solution(nums) {
  let result = 0;
  for (let i = 0; i <= nums.length - 3; i++) {
    for (let j = i + 1; j <= nums.length - 2; j++) {
      for (let k = j + 1; k <= nums.length - 1; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let count = 0;
        for (let l = 2; l < sum; l++) {
          sum % l === 0 && count++;
        }
        if (count === 0) result++;
      }
    }
  }
  return result;
}

solution([1, 2, 3, 4]);
