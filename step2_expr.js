// add     = mul ("+" mul | "-" mul)*
// mul     = num ("*" num | "/" num)*
// num     = digit (digit)*
// digit   = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

module.exports = function(token)
{
  let p=0;

  function add() {
    let node = mul();
    while (true) {
      if (token[p] == '+') {
        p++;
        node = ['add', node, mul()];
      } else
      if (token[p] == '-') {
        p++;
        node = ['sub', node, mul()];
      } else {
        return node;
      }
    }
  }

  function mul() {
    let node = num();
    while (true) {
      if (token[p] == '*') {
        p++;
        node = ['mul', node, num()];
      } else
      if (token[p] == '/') {
        p++;
        node = ['sdiv', node, num()];
      } else {
        return node;
      }
    }
  }

  function num() {
    return ['num', token[p++]];
  }

  return add();
}
