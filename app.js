// モジュール化されたJavaScriptファイルを読み込むために用いられる
// expressモジュールはExpressフレームワークを使うためのパッケージ ➡ 代入され全ての機能が使える
const express = require('express');
// app定数にexpress()関数を呼び出してExpressアプリケーションを代入
const app = express();

// appは、Expressアプリケーションのインスタンスを参照する変数です。※先ほど代入
//'get()'はExpressアプリケーションでGETリクエストを処理するメソッド、
// GETリクエストとは、ユーザーが特定のウェブページやリソースを取得するためにブラウザから送信されるリクエスト
// 第1引数にはURLのパス、第2引数にはリクエストハンドラ(コールバック関数)を指定
// reqは、クライアントからのリクエストを表すオブジェクトです。
// resは、クライアントへのレスポンスを送信するためのオブジェクトです。
// res.renderはクライアントにHTMLを送信するためのメソッド
// 'hello.ejs'は、レンダリングするビュー（テンプレート）のファイルパスを指定しています。この場合、hello.ejsというファイルがビューとして使用されます。
//要するにこのコードはルートパス('/')にGETリクエストが送信された場合、hello.ejsというビューファイルがレンダリングされ、そのHTMLがクライアントに返されるようになります。
app.get('/', (req, res) => {
    res.render('hello.ejs');
});

app.use(express.static('public'));

// ユーザーが/topというURLをクリックすると、そのURLに関連付けられたtop.ejsというビューファイルの内容がブラウザに表示されることになります。
app.get('/top', (req, res) => {
    res.render('top.ejs');
});

app.get('/index', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000);