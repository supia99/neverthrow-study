// https://github.com/supermacro/neverthrow#resultorelse-method
// Result.orElse
// errの中身に応じて、ok, errに振り分け直したい場合に使用する
// okの場合は、そのまま返す

import { err, ok, Result } from "neverthrow";

//
enum DatabaseError {
  PoolExhausted = "PoolExhausted",
  NotFound = "NotFound",
}

const dbQueryResult: Result<string, DatabaseError> =
  //  err(
  //   DatabaseError.NotFound
  // );
  ok("ddd");

const updatedQueryResult = dbQueryResult.orElse((dbError) => {
  return dbError === DatabaseError.NotFound
    ? ok("User does not exist")
    : err(500);
});

console.log(updatedQueryResult);
