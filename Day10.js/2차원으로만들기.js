function solution(num_list, n) {
  let result = [];
  for (let i = n; i <= num_list.length; i += n) {
    let Arr = [];
    for (j = i - n; j < i; j++) {
      Arr.push(num_list[j]);
    }
    result.push(Arr);
  }
  return result;
}
