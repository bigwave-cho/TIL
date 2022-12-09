function solution(array, n) {
  array = array.sort();
  let newArr = array.map((num) => {
    return Math.abs(num - n);
  });

  return array[newArr.indexOf(Math.min(...newArr))];
}
