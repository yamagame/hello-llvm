module.exports = function(node)
{
  let vidx = 1;
  let code = [];
  function gen(node) {
    switch(node[0]) {
      case 'add':
      case 'sub':
      case 'mul':
      case 'sdiv':
        {
          const lval = gen(node[1]);
          const rval = gen(node[2]);
          const i = vidx++;
          code.push(`%${i} = ${node[0]} i32 ${lval}, ${rval}`);
          return `%${i}`
        }
      default:
        return node[1];
    }
  }
  gen(node);
  code.push(`call void @printn(i32 %${vidx-1})`);
  code.push(`ret i32 %${vidx-1}`);
  return code.join('\n  ')
}
