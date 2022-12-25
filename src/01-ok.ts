import { ok } from "neverthrow";

const myResult = ok({ myData: "test" });

console.log(myResult.isOk(), myResult.isErr());
