// https://github.com/supermacro/neverthrow#resultfromthrowable-static-class-method
// Result.fromThrowable
// 関数でthrowされるエラーを指定するオブジェクトに変換して変えす関数を生成する

import { Result } from "neverthrow";

type ParseError = { message: string };
const toParseError = (): ParseError => ({ message: "Parse Error" });

const safeJsonParse = Result.fromThrowable(JSON.parse, toParseError);

// the function can now be used safely, if the function throws, the result will be an Err
// const res = safeJsonParse('{"aa": "bb"}');
const res = safeJsonParse("}");

console.log(res);
