module.exports = function check(str, bracketsConfig) {
  let open = [],
      close = {},
      same = [],
      stack = [];
    bracketsConfig.forEach(el=> {
    if (el[0] !== el[1]) {
      open.push(el[0]);
      close[el[1]] = el[0];
    } else same.push(el[0]);
  })

  for (let i = 0; i < str.length; i++) {
    let symb = str.charAt(i);
  if (open.includes(symb)) stack.push(symb)
  else if (same.includes(symb)) {
    if (stack.includes(symb)) stack.pop();
    else stack.push(symb)
  }
  else if (close[symb] == stack[stack.length-1]) stack.pop()
  else {
    return false
  }
}
return stack.length == 0
}
