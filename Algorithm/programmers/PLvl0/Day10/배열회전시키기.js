function solution(numbers, direction) {
  if (direction === 'left') {
    numbers.push(numbers[0]);
    numbers.splice(0, 1);
  } else {
    numbers.unshift(numbers[numbers.length - 1]);
    numbers.splice(numbers.length - 1, 1);
  }
  return numbers;
}

// 다른 풀이 따라해보기

function solution2(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  console.log(numbers);
  return numbers;
}

solution2([1, 2, 3], 'right');

let arr = [1, 2, 3];
//shift
console.log(arr.shift()); // 배열을 수정, 뺀 값 반환
console.log(arr); // 2, 3
//pop

console.log(arr.pop());
console.log(arr); // 2

//splice 는 원본배열 수정해버림. 그리고 splice한 것 반환
console.log('splice', arr.splice(0, 1));
console.log(arr);

console.log(arr.slice(1)); // slice 한 배열 반환 but 원본 배열 수정 x

let arr2 = [1, 2, 3];
console.log(arr2.splice(0, 2)); // [1, 2]
