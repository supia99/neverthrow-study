// https://github.com/supermacro/neverthrow#resultmatch-method
// Result.match
// okかerrによって値をそれぞれの処理を行って結果を返す

import { err, ok } from "neverthrow";

const argNum = 1;
const computionThatMightFail = (num: number) => {
  return num > 0 ? ok("is OK") : err("No");
};

computionThatMightFail(argNum).map(console.log).mapErr(console.error);

computionThatMightFail(argNum).match(console.log, console.error);

const attempt = computionThatMightFail(argNum)
  .map((str) => str.toUpperCase())
  .mapErr((err) => `Error: ${err}`);
console.log(attempt);

const answer = computionThatMightFail(argNum).match(
  (str) => str.toUpperCase(),
  (err) => `Error: ${err}`
);
console.log(answer);

const resultNum = computionThatMightFail(argNum).match(
  (str) => str.length,
  (err) => 500
);
console.log(resultNum);
