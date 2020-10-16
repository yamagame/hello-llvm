module.exports = function(node)
{
  let code = [];
  code.push(`call void @printn(i32 ${node[0]})`);
  code.push(`ret i32 0`);
  return code.join('\n  ')
}
