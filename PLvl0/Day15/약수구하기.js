// function solution(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) result.push(i);
//   }
//   return result;
// }

// Array fill 사용해보기
function solution(n) {
  console.log(
    Array(n)
      .fill(1)
      .map((num, i) => {
        return n % (i + 1) === 0 ? i + 1 : null;
      })
      .filter((num) => num !== null)
  );
}

solution(24);
