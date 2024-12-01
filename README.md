# population-tracker-jp-api

[population-tracker-jp](https://github.com/seelx3/population-tracker-jp) の動作確認用の API サーバーです。

## 使い方

- .env ファイルを作成し、以下のように環境変数を作成してください。

```
API_KEY= ## API キーとして任意の文字列を設定してください。
```

- `population-tracker-jp` 側の `.env` を次のように設定してください。

```
API_KEY=  ## 上記で設定したAPIキー
POPULATION_COMPOSITION_API_URL="http://localhost:3030/api/v1/population/composition/perYear"
PREFECTURES_API_URL="http://localhost:3030/api/v1/prefectures"
```

- 以下のコマンドで API サーバーを起動してください。

```
yarn start
```

API サーバーを起動した状態で、 `population-tracker-jp` を起動することで、本 API サーバーを利用して動作確認することができます。

## その他

本 API は、 [RESAS（地域経済分析システム）](https://resas.go.jp/) のデータを加工して作成しています。

- [RESAS 関連サービス 利用規約](https://opendata.resas-portal.go.jp/terms.html)
