---
date: '2017-05-11T00:41:58+09:00'
path: '/entry/2017/05/11/eslint-config-prettier/'
title: prettier < eslint
categories:
  - "javascript"
---
# eslint-config-prettierは使わない

[![無理 ダメ](http://tiqav.com/1XA.th.jpg)](http://tiqav.com/1XA)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<https://github.com/prettier/eslint-config-prettier>

- `prettier` で直してくれそうな機能を `off` にして干渉を回避する
  - linterにはならないので警告されない
- `pretter-atom`の挙動が若干不審
- `prettier`にconfig設定がないようなのでまだまだフォーマットが変わる

## next

- `pretter-atom` を読む
  - `prettier-eslint` が並行して動くことが最低条件
- 更新を見守る
  - 特にstandard、Flowとの関係
