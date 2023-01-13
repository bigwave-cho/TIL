function solution(array, height) {
  let result = array.filter((index) => {
    return index > height;
  });
  return result.length;
}
