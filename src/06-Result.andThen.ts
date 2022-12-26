// https://github.com/supermacro/neverthrow#resultandthen-method
// Result.andThen
// okだった場合に、andThenのfunctionを実行する
import { err, ok, Result } from "neverthrow";

const sq = (n: number): Result<number, number> => ok(n ** 2);

console.log("Example 1: Chaining Results");
console.log(
  ok(2).andThen(sq).andThen(sq) // Ok(16)
);

console.log(
  ok(2).andThen(sq).andThen(err) // Err(4)
);

console.log(
  ok(2).andThen(err).andThen(sq) // Err(2)
);

console.log(
  err(3).andThen(sq).andThen(sq) // Err(3)
);

console.log("Example 2: Flattening Nested Results");
// It's common to have nested Results
const nested = ok(ok(1234));

// notNested is a Ok(1234)
const notNested = nested.andThen((innerResult) => innerResult);
console.log(nested, notNested);
