// 각 배열의 x 좌표 중 가장 작은 것과 큰 것을 구하고 (y도 마찬가지)
// x(큰것 - 작은것) * y(큰것 작은것) = 넓이
function solution(dots) {
  return (
    (Math.max(
      ...dots.map((array) => {
        return array[0];
      })
    ) -
      Math.min(
        ...dots.map((array) => {
          return array[0];
        })
      )) *
    (Math.max(
      ...dots.map((array) => {
        return array[1];
      })
    ) -
      Math.min(
        ...dots.map((array) => {
          return array[1];
        })
      ))
  );
}

// 가독성 좋게 리팩토링해보기
function solution(dots) {
  let xArr = dots.map((array) => {
    return array[0];
  });

  let yArr = dots.map((array) => {
    return array[1];
  });

  return (
    (Math.max(...xArr) - Math.min(...xArr)) *
    (Math.max(...yArr) - Math.min(...yArr))
  );
}
