module.exports = function(str)
{
  let token = [];
  for (var i=0;i<str.length;i++) {
    if (str[i] == '+' || str[i] == '-') {
      token.push(str[i]);
    } else
    if (str[i] == '*' || str[i] == '/') {
      token.push(str[i]);
    } else {
      const num = str.substr(i).match(/[0-9]*/);
      if (num[0] !== '') {
        i += num[0].length-1;
        token.push(num[0]);
      }
    }
  }
  return token;
}
