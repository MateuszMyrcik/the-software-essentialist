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
});
