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

  test.each(["shor", "tolongpasswordddddddddddd", "thePhysical1234567"])(
    "should fail validation when password length is invalid (%s)",
    (pass) => {
      const validator = new PasswordValidator();

      const verification = validator.exec(pass);

      expect(verification.passed).toBeFalsy();
      expect(verification.messages).toContain(
        `Your password length is incorrect (between 5 an 15): ${pass}`
      );
    }
  );

  test.each(["maxwellTheBe", "waswithnodigit"])(
    "should fail when password not contain digit (%s)",
    (pass) => {
      const validator = new PasswordValidator();

      const verification = validator.exec(pass);

      expect(verification.passed).toBeFalsy();
      expect(verification.messages).toContain(
        `Your password need include at least one digit: ${pass}`
      );
    }
  );

  test.each(["withoutuppercaseletter", "maxwell1_c"])(
    "should fail when password not contain at least one upper case letter (%s)",
    (pass) => {
      const validator = new PasswordValidator();

      const verification = validator.exec(pass);

      expect(verification.passed).toBeFalsy();
      expect(verification.messages).toContain(
        `Your password need include at least one upper case letter: ${pass}`
      );
    }
  );

  test.each(["qFC6xeHOi2N4Yt5", "9EblYuqa2zC16RA"])(
    "should successfully validate password (%s)",
    (pass) => {
      const validator = new PasswordValidator();

      const verification = validator.exec(pass);

      expect(verification.passed).toBeTruthy();
      expect(verification.messages.length).toEqual(0);
    }
  );
});
