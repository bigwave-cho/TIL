// 내 풀이
function solution(box, n) {
  let result = 1;
  box.forEach((length) => {
    result *= Math.floor(length / n);
  });
  return result;
}

// 리팩토링
function solution(box, n) {
  let [x, y, z] = box;

  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}
