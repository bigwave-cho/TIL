function solution(s) {
  let stack = [];

  [...s].forEach((str, i) => {
    stack.length === 0 || stack[stack.length - 1] !== s[i]
      ? stack.push(s[i])
      : stack.pop();
  });

  return stack.length ? 0 : 1;
}

console.log(solution('aaabaa'));
