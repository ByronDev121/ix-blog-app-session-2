const arr = [1, 2, 3, "a", 5, 6, "a", 8, 9];

/**
 * isUniqueOn2
 *
 * @description
 * This function checks if the array has unique elements
 *
 * Time complexity:
 * O(n**2)
 *
 * Space complexity:
 * O(2)
 *
 * @returns {boolean} true if all elements are unique, false otherwise
 */
function isUniqueOn2() {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const el2 = arr[j];
      if (el === el2) {
        return false;
      }
    }
  }
  return true;
}

/**
 * isUniqueOn
 *
 * @description
 * This function checks if the array has unique elements
 *
 * Time complexity:
 * O(n)
 *
 * Space complexity:
 * O(n)
 *
 * @returns {boolean} true if all elements are unique, false otherwise
 */
const map = new Map();
function isUniqueOn() {
  for (const el of arr) {
    const mapEl = map.get(el);
    if (mapEl) {
      return false;
    }
    map.set(el, 1);
  }
  return true;
}

console.log(isUniqueOn2());
console.log(isUniqueOn());

// Write a function that prints out the first 10 digits fo the fibonacci sequence

/**
 * fib
 *
 * @description
 * This function prints out the first n digits of the fibonacci sequence
 *
 * Time complexity:
 * O(n)
 *
 * Space complexity:
 * O(1)
 *
 * @param {number} n
 * @returns
 */
function fib(n) {
  if (n == 0) return console.log(0);
  if (n == 1) return console.log(1);
  let curr = 0;
  let next = 1;
  for (let i = 0; i < n; i++) {
    console.log(curr);
    let placeHolder = next;
    next = curr + next;
    curr = placeHolder;
  }
}

/**
 * recursiveFibTopDown
 *
 * @description
 * This function prints out the first n digits of the fibonacci sequence using recursion
 *
 * Time complexity:
 * O(n)
 *
 * Space complexity:
 * O(n)
 *
 * @param {number} nIn
 */
function recursiveFib(nIn) {
  const helper = (n) => {
    if (cache.has(n)) {
      return cache.get(n);
    }
    if (n == 1 || n == 2) {
      cache.set(n, n - 1);
      return n - 1;
    }
    let res = helper(n - 2) + helper(n - 1);
    cache.set(n, res);
    return res;
  };
  let cache = new Map();
  helper(nIn);
  for (let i = 0; i <= cache.size; i++) {
    console.log(cache.get(i));
  }
}

/**
 * recursiveFibTopDown
 *
 * @description
 * This function prints out the first n digits of the fibonacci sequence using recursion
 *
 * Time complexity:
 * O(n)
 *
 * Space complexity:
 * O(n)
 *
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @returns
 */
function recursiveFib2(n, a, b) {
  if (n <= 1) {
    return;
  }
  if (a == 0) {
    console.log(a);
  }
  console.log(b);
  temp = a + b;
  a = b;
  b = temp;
  return recursiveFib2(n - 1, a, b);
}

fib(10);
recursiveFibTopDown(10);
recursiveFib2BottomUp(10, 0, 1);
