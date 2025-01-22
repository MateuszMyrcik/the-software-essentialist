import { MilitaryTimeValidator } from "./index";
// Description: Write a function (or a stateless class) capable of validating
//  whether a string time range is a valid military time range or not.

// Here are some string examples.

// "01:12 - 14:32" (yes)
// "25:00 - 12:23" (no)
// "22:00 - 23:12" (yes)

// Draft requirements:
// Hours has 0-23
// Minutes has 0-59
// You have input with specific format [time separator time]
// You have require time combined of minute and hour together
// Time values need to be provided in ascending order

describe("military time validator", () => {
  it.each([
    "",
    "22",
    "22:11",
    "22:11 ",
    "23:23 -",
    "23:23 - 23",
    "23:23 - 23:2",
  ])(
    "Should throw bad format error when time range not match [from - to] (%s)",
    (notValidTimeRange) => {
      expect(() => MilitaryTimeValidator.exec(notValidTimeRange)).toThrow(
        "Provide time range in valid format [from - to]"
      );
    }
  );

  it("Should throw error when given values include not only digits", () => {
    const notValidTimeRange = "2a:a2 - ab:dd";

    expect(() => MilitaryTimeValidator.exec(notValidTimeRange)).toThrow(
      "Provide time range with digit only values"
    );
  });

  it("Should throw error when time values not separated with ':'", () => {
    const notValidTimeRange = "22$22 - 23%23";

    expect(() => MilitaryTimeValidator.exec(notValidTimeRange)).toThrow(
      "Separate time values with ':'"
    );
  });

  it.each(["24:11 - 22:11", "03:11 - 25:11"])(
    "Should throw error when given hours are out of range [0-23] (%s)",
    (notValidTimeRange) => {
      expect(() => MilitaryTimeValidator.exec(notValidTimeRange)).toThrow(
        "Provide time range with hours in range (0-23)"
      );
    }
  );

  it.each(["01:99 - 02:01", "01:02 - 02:99"])(
    "Should throw error when given minutes are out of range [0-59] (%s)",
    (notValidTimeRange) => {
      expect(() => MilitaryTimeValidator.exec(notValidTimeRange)).toThrow(
        "Provide time range with minutes in range (0-59)"
      );
    }
  );

  it("Should throw error when given time values are not subsequent", () => {
    const notValidTimeRange = "02:01 - 00:00";

    expect(() => MilitaryTimeValidator.exec(notValidTimeRange)).toThrow(
      "Provide time range with subsequent values"
    );
  });

  it.each(["01:12 - 14:32", "22:00 - 23:12"])(
    "Should validate successfully correct time ranges (%s)",
    (validTimeRange) => {
      expect(MilitaryTimeValidator.exec(validTimeRange)).toBe(true);
    }
  );
});
