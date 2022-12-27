import { err, ok, Result } from "neverthrow";

const getLines = (str: string) => {
  if (str.includes("\n")) {
    return ok(str.split("\n"));
  }
  return err("not have newline character");
};

const linesResult = getLines("1\n2\n3\n4\n");
console.log(linesResult);
// this Result now has a Array<number> inside it
const newResult = linesResult.map((arr: Array<string>) =>
  arr.map((n) => parseInt(n))
);

console.log(newResult);
