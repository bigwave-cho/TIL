function solution(lines) {
  let sameLines = [];

  let sortedLines = lines
    .map((line) => {
      let lineArr = [];
      for (let i = line[0]; i <= line[1]; i++) {
        lineArr.push(i);
      }
      return lineArr;
    })
    .sort((a, b) => a[0] - b[0]);
  // console.log(sortedLines);

  // 겹치지않도록 라인 조회
  for (let i = 0; i < sortedLines.length; i++) {
    for (let j = i + 1; j < sortedLines.length; j++) {
      for (let k = 0; k < sortedLines[i].length; k++) {
        const a = sortedLines[i][k];
        // 겹치는 경우
        if (sortedLines[j].includes(a)) {
          // 겹치기 시작한 지점
          const samePointA = sortedLines[i].indexOf(a); //1
          const samePointB = sortedLines[j].indexOf(a); //0
          // 다음 인덱스가 같다면
          if (
            sortedLines[i][samePointA + 1] === sortedLines[j][samePointB + 1] &&
            sortedLines[i][samePointA + 1] !== undefined
          ) {
            sameLines.push(...sortedLines[j].splice(samePointB, 1));
          }
        }
      }
    }
  }
  // 중복 제거 후 반환
  console.log(sameLines);
  console.log(sameLines.filter((a, i) => i === sameLines.indexOf(a)).length);
}

solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);
