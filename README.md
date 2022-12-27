# neverthrow 勉強用

https://www.npmjs.com/package/ts-node

## プロジェクト作成

https://typescript-jp.gitbook.io/deep-dive/nodejs

## 実行方法

```
npm run ts-node ファイル名
```

## メソッド整理

- sync API
  - Result.isOk(メソッド) : ok の場合、true を返す
  - Result.isErr(メソッド) : err の場合、true を返す
  - Result.map(メソッド) : ok の場合、value を加工する
  - Result.mapErr(メソッド) : err の場合、value を加工する
  - Result.unwrapOr(メソッド) : ok の場合は、そのまま value を取り出す。err の場合は、固定値を出す。
  - Result.andThen(メソッド) : err に差し替える可能性がある map
  - Result.asyncAndThen(メソッド) : ResultAsync を返す andThen
  - Result.orElse(メソッド): err -> ok に変換する可能性がある andThen
  - Result.match(メソッド): ok か err によって値をそれぞれの処理を行って結果を返す
  - Result.asyncMap(メソッド): ResultAync を返す map
  - Result.fromThrowable(静的クラス法): 関数で throw されるエラーを指定するオブジェクトに変換して変えす関数を生成する
  - Result.combine(静的クラス法): ok 版、result の中身を配列にする
  - Result.combineWithAllErrors(静的クラス法): err 版、result の中身を配列にする
- async method
  - okAsync
  - errAsync
  - ResultAsync.fromPromise(静的クラス法)
  - ResultAsync.fromSafePromise(静的クラス法)
  - ResultAsync.map(メソッド)
  - ResultAsync.mapErr(メソッド)
  - ResultAsync.unwrapOr(メソッド)
  - ResultAsync.andThen(メソッド)
  - ResultAsync.orElse(メソッド)
  - ResultAsync.match(メソッド)
  - ResultAsync.combine(静的クラス法)
  - ResultAsync.combineWithAllErrors(静的クラス法)
