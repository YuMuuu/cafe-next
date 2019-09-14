Cafe-Next
===

cafeマップアプリのフロントエンド 
next.js を使っているがこいつは React で書いたコードを　SSR してくれる。
Get 処理はサーバーでレンダリングする際にし、post 処理はフロントでするようにうまくやってくれる。
ガハハハハ

## Requirements

- node v10.13.0
- yarn

nodenv などよしなに環境構築すること。

## setup

```sh
$ git clone https://github.com/serviver-agent/cafe-next.git
$ cd cafe-next
$ yarn install
```

`yarn run next` はまだ動かない( index.tsx が未完成)

## Docker
立ち上げ
```sh
$ docker-compose up
```
終了
```sh
$ docker-compose down
```
