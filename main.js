let str = '0';
if (process.argv.length > 2) {
  str = process.argv[2];
}

const tokn = require('./step1_tokn')(str)
const node = require('./step2_expr')(tokn)
const code = require('./step3_cgen')(node)

console.log(`
declare void @printn(i32 nocapture readonly)
define i32 @main(i32 %argc, i8** nocapture readonly %argv) {
  ${code}
}
`);
