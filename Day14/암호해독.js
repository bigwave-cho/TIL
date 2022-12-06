function solution(cipher, code) {
  let result = '';
  count = 1;
  while (count <= cipher.length) {
    if (count % code === 0) result += cipher[count - 1];
    count++;
  }

  return result;
}

// 리팩토링해보기
function solution(cipher, code) {
  return [...cipher]
    .filter((letter, i) => {
      return (i + 1) % code === 0 ? letter : null;
    })
    .join('');
}

solution('dfjardstddetckdaccccdegk', 4);
