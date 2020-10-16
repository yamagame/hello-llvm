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

hello-llvmディレクトリに移動して以下のコマンドを入力して
生成したLLVM IRのソースをコンパイル、実行できます。
計算結果が表示されれば成功です。

```bash
$ cd hello-llvm
$ ./main.sh "10+20*3/5"
22
```
