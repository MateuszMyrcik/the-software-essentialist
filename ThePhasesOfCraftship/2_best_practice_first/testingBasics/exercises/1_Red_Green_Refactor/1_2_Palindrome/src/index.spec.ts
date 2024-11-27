import { isPalindrome } from "./index";

describe("palindrome checker", () => {
  test.each([
    "mom",
    "Mom",
    "MoM",
    "Was It A Rat I Saw",
    "Never Odd or Even",
    "1Never Odd or Even1",
  ])("should confirm %s as palindrome", (val) => {
    expect(isPalindrome(val)).toBeTruthy();
  });

  test.each(["Momx", "rocket", "JohnDeep", "That's not a palindrome", "Never Odd or Even1"])(
    "should confirm %s is not palindrome",
    (val) => {
      expect(isPalindrome(val)).toBeTruthy();
    }
  );
});
