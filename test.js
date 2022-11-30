function solution(A, B) {
  if (A === B) return 0;
  let arrA = [...A];
  let arrB = [...B];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let result = '';
    count++;
    result += arrA[A.length - 1]; // arrA의 마지막 요소 추가 'o'
    arrA.forEach((letter, i) => {
      if (i < A.length - 1) result += letter;
    }); // 'ohell'
    arrA = result.split('');
    console.log(count);
    if (result === arrB.join('')) return count;
  }

  return count === A.length ? -1 : count;
}
console.log(solution('apple', 'elppa'));
