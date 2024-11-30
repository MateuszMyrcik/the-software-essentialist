import { PasswordValidator } from "./index";
// Requirments
// Between 5 and 15 characters long
// yes: correct not: miss
// Contains at least one digit
// yes: correct1 not: correct
// Contains at least one upper case letter
// yes: Correct1 no: correct1
// Return an object containing a boolean result and an errors
// key that — when provided with an invalid password — contains an error message or type for all errors in occurrence.
//  There can be multiple errors at a single time.
// return:
// {
//   passed: false,
//   mesage: "Your password must contain at least on upper case letter"
// }

describe("password validator", () => {
  test("should return descriptive object with failed verification", () => {
    const validator = new PasswordValidator();

    const verification = validator.exec("");

    expect(verification.passed).toBeFalsy();
    expect(
      verification.messages.every((msg) => typeof msg === "string")
    ).toBeTruthy();
  });
});
