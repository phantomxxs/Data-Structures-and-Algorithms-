function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;

  if (number === 2) {
    answer = 2;
  } else {
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
  }

  return answer;
}

function fibonacciRecursive(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

function fibonacciIterativeX(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let count = 1;
  let sum = 0;
  let x = 0;
  let y = 1;

  while (count < n) {
    sum = x + y;
    x = y;
    y = sum;
    count++;
  }

  return sum;
}

function fibonacciIterative(n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(6));

console.log(fibonacciRecursive(10));
console.log(fibonacciIterativeX(10));
console.log(fibonacciIterative(10));
