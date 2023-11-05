# MarkdownToHTML

Markdownを入力したら、HTMLへ変換するアプリです

github markdownの形式に対応しています(プラグイン依存のため、一部は非対応)

![Welcome!](/doc/image.gif)

---

# Access

以下のURLよりアクセスできます

[Acess](https://kip2.github.io/MarkdownToHTML/)

---
# 使い方

左のスペースにMarkdownで書き込みを行うと、HTMLに変換したものが右枠に表示されます

![参考イメージ](/doc/image3.png)

## Markdownについて

GithubのMarkdown形式の入力に対応しています


入力形式は、本ページで表示のサンプル、もしくは以下のページを参考にしてください

[Github Markdown Manual](https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


#### 注意

変換は、

- remarkGfm
- react-markdown

以上2つのプラグインにより変換しているため、プラグインが対応している範囲の変換であることをご了承ください。

## ボタンについて

### Download HTMLボタン

入力したMarkdownをhtmlファイルに変換し、htmlファイルとしてダウンロードできます

### 切り替えボタン

入力したMarkdownをHTMLに変換したものを、

- HTML(素のHTML形式)
- Preview(ブラウザでHTMLファイルを開いた形式)

の、2つの形式で表示を切り替えることができます

![切り替えボタン参考アニメーション](/doc/image2.gif)

---


# 使用技術

- React
- Vite
- TypeScript


# 使用プラグイン
- [@monaco-editor/react](https://www.npmjs.com/package/@monaco-editor/react)
- [react-markdown](https://www.npmjs.com/package/react-markdown?activeTab=readme)
- [styled-components](https://www.npmjs.com/package/styled-components)
