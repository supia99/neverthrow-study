// https://github.com/supermacro/neverthrow#resultunwrapor-method
// Result.unwrapOr
// okだった場合は、中のvalueを返す。errだった場合はunwrapOrの引数

import { err, ok } from "neverthrow";

const myResult = err("Oh noooo");
// const myResult = ok(4);

const multiply = (value: number): number => value * 2;

const unwrapped: number = myResult.map(multiply).unwrapOr(10);

console.log(unwrapped);
