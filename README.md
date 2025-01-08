# population-tracker-jp-api

[population-tracker-jp](https://github.com/seelx3/population-tracker-jp) の動作確認用の API サーバーです。

## 使い方

- .env ファイルを作成し、以下のようにして API キーとして任意の文字列を設定してください。

```
API_KEY= # Your API key
```

- `population-tracker-jp` 側の `.env` を次のように設定してください。

```
API_ENDPOINT="http://localhost:3030"
API_KEY= # Your API key
```

- 以下のコマンドで API サーバーを起動してください。

```
yarn start
```

本 API サーバーを起動した状態で、 `population-tracker-jp` の開発サーバーを起動することで、本 API サーバーを利用した動作確認を行うことができます。

## その他

本 API は、 [RESAS（地域経済分析システム）](https://resas.go.jp/) のデータを加工して作成しています。

- [RESAS 関連サービス 利用規約](https://opendata.resas-portal.go.jp/terms.html)
