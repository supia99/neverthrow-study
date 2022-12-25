// https://github.com/supermacro/neverthrow#resultmaperr-method
import { err } from "neverthrow";

const parseHeaders = (raw: string) => {
  return err("parseError");
};

const rawHeaders = "nonsensical gibberish and badly formatted stuff";

const parseResult = parseHeaders(rawHeaders);
parseResult.mapErr((parseError: string) => {
  console.log("parseError:", parseError);
});

console.log(
  parseResult.isErr(), // true
  parseResult
);

// TODO: 例からかけ離れている
