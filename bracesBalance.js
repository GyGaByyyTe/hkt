checkBalance = function(str) {
  let result = true;
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  let stack = [];

  while (str.length > 0) {
    const curr = str[0];

    switch (curr) {
      case "(":
      case "{":
      case "[":
        stack.push(curr);
        break;

      case ")":
      case "]":
      case "}":
        if (stack.length === 0) return false;
        let x = stack.pop();
        if (map[x] !== curr) {
          return false;
        }
        break;

      default:
        break;
    }

    str = str.slice(1);
  }
  if (stack.length !== 0) result = false;
  return result;
};

assert.equal(checkBalance("({[]})"), true);
assert.equal(checkBalance("(]{)["), false);
assert.equal(checkBalance(""), true);
assert.equal(checkBalance(")"), false);
assert.equal(checkBalance("("), false);
assert.equal(checkBalance("([)]"), false);
