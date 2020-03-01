// using iteration
function getNthFib(n) {
  let a = 0;
  let b = 1;
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = b;
    b += a;
    a = temp;
  }

  return n === 0 ? 0 : b;
}


// using recursion
function getNthFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
}


// using memoization
function getNthFib(n) {
  const memoize = {0: 0, 1: 1};

  function calcFib(n) {
    if (memoize[n] !== undefined) return memoize[n];
    memoize[n] = calcFib(n - 1) + calcFib(n - 2);
    return memoize[n];
  }

  calcFib(n);

  return memoize[n];
}


// using memoization and IIFE
function getNthFib(n) {
  return (function calcFib(n, memoize) {
    if (memoize[n] !== undefined) return memoize[n];
    memoize[n] = calcFib(n - 1, memoize) + calcFib(n - 2, memoize);
    return memoize[n];
  })(n, { 0: 0, 1: 1 })
}


// using tabulation
function getNthFib(n) {
  let result = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
}