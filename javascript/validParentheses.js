/*

Some interesting features of this problem that kind of threw me off at first were that a string of off length is always false
'(' 1 false
'(()' 3 false
'[{()}' 5 false

Before realizing that a stack could be used an an intermediate data structure this seemed like a relevant point
However, when put into context it becomes obvious this isn't super relevant
the context being that if we thought of this as a compiler checking for syntax
it is obvious that we don't care about the length of a statement or whether it is odd or even we only want to focus on the (){}[] characters

*/

function validParentheses (str) {
  const stack = [];
  const closingChar = {
    '(': ')',
    '[': ']',
    '{': '}'
  };


  for (let char of str) {
    if (closingChar[char]) {
      stack.push(char);
    } else if (stack.length === 0) {
      return false;
    } else if (closingChar[stack[stack.length - 1]] !== char) {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}