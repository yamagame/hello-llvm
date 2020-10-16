# jsbased-llvm-compiler

LLVMコンパイラの勉強用ソースコードです。四則演算ができます。

```bash
$ ./main.sh "10+20*3/5"
22
```

## 準備

Docker と VSCode を使うと便利です。
以下のコマンドでDockerコンテナを作成します。

```bash
$ docker run -it --name llvm-compiler-labo ubuntu bash
# apt-get update
# apt-get install git build-essential cmake clang libssl-dev llvm
# apt-get install nodejs npm
```

llvm-compiler-laboという名前のコンテナが作成されますので、
VSCodeのRemote-Containerプラグインを使って、コンテナにAttachします。

[https://code.visualstudio.com/docs/remote/containers-tutorial](https://code.visualstudio.com/docs/remote/containers-tutorial)

AttachしたらVSCodeのターミナルから以下のコマンドを入力して
ソースコードをダウンロードします。作業用ディレクトリは /home を選択します。

```bash
$ git clone https://github.com/yamagame/hello-llvm
```

## 実行方法

hello-llvmディレクトリに移動して以下のコマンドを入力して
生成したLLVM IRのソースをコンパイル、実行できます。
計算結果が表示されれば成功です。

```bash
$ cd hello-llvm
$ ./main.sh "10+20*3/5"
22
```

## main.shの中身

計算式の文字列を main.js に渡すと LLVM IR のソースが出力されます。printn.cは整数を標準出力する関数です。mail.llとprintn.cをコンパイルリンクすると、実行ファイルk「main」が作られます。mainは、最初に入力した計算式を実行し結果を出力します。

```
node main.js $1 > main.ll
clang -o main printn.c main.ll
./main
```

## 解説ページ

簡単な解説ページです。

[JavaScriptでコンパイラーを作ろう！](https://docs.google.com/presentation/d/16ie8rmqRG5kGqXpT-3ae0EEKb8_8toa3qJBxrDbYpBU/edit?usp=sharing)
