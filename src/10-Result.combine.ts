// https://github.com/supermacro/neverthrow#resultcombine-static-class-method
// Result.combine, Result.combineWithAllErrors
// resultの中身を配列にする
// okの場合、errの場合ごとにメソッドが異なる

import { err, ok, Result } from "neverthrow";

// ok
const resultList: Result<number, never>[] = [ok(1), ok(2)];
const combinedList: Result<number[], unknown> = Result.combine(resultList);
console.log(combinedList);

// err
const resultErrList: Result<never, number>[] = [err(1), err(2)];
const combinedErrList: Result<unknown, number[]> =
  Result.combineWithAllErrors(resultErrList);
console.log(combinedErrList);
