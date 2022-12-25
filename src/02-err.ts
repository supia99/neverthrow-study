import { err } from "neverthrow";

const myResult = err("Oh noooo"); // instance of `Err`

console.log(
  myResult.isOk(), // false
  myResult.isErr() // true
);
