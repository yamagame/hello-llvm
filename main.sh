node main.js $1 > main.ll
clang -o main printn.c main.ll
./main
