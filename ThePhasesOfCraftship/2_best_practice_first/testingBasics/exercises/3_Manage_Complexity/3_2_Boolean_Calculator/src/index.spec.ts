import { BooleanCalculator } from "./index";
// Problem Description
// Description: Create a boolean calculator that takes a boolean expression (as a string) and evaluates it to compute the correct output boolean result

// Here are more details about what it should be able to do:

// 1. Single values

// "TRUE" -> true "FALSE" -> false

// 2. NOT operator

// "NOT TRUE" -> false

// 3. AND operator

// "TRUE AND FALSE" -> false "TRUE AND TRUE" -> true

// 4. OR operator

// "TRUE OR FALSE" -> true "FALSE OR FALSE" -> false

// 5. Combination of operators w/ precedence

// It should allow you to provide any combination of the operators, but it should give precedence in this order:

// NOT
// AND
// OR
// Here are some examples:

// "TRUE OR TRUE OR TRUE AND FALSE" -> true "TRUE OR FALSE
// AND NOT FALSE" -> true

// 6. Parenthesis

// "(TRUE OR TRUE OR TRUE) AND FALSE" -> false "NOT (TRUE AND TRUE)" -> false

// uppercase
// format with empty spaces
// accepted values: () / TRUE / FALSE / NOT / AND / OR
// parenthesis need to be closed and opened
// need to convert values

describe("boolean calculator", () => {
  it("should return false for 'FALSE' boolean expression", () => {
    const expression = "FALSE";

    const calculator = new BooleanCalculator();

    expect(calculator.exec(expression)).toBe(false);
  });

  it("should return true for 'TRUE' boolean expression", () => {
    const expression = "TRUE";

    const calculator = new BooleanCalculator();

    expect(calculator.exec(expression)).toBe(true);
  });

  it("should return true for 'NOT FALSE' boolean expression", () => {
    const expression = "NOT FALSE";

    const calculator = new BooleanCalculator();

    expect(calculator.exec(expression)).toBe(true);
  });

  it("should return false for 'NOT TRUE' boolean expression", () => {
    const expression = "NOT TRUE";

    const calculator = new BooleanCalculator();

    expect(calculator.exec(expression)).toBe(false);
  });

  it.each(["FALS3", "NEW OPERATOR", "MAYBE"])(
    "should throw an error when boolean expression include unsupported value or operator '%s'",
    (wrongExpression) => {
      const calculator = new BooleanCalculator();

      expect(() => calculator.exec(wrongExpression)).toThrowError(
        "Provide valid boolean expression"
      );
    }
  );

  it.each([
    { value: "TRUE", result: false },
    { value: "FALSE", result: true },
  ])("should read NOT operator and compute value %s", ({ result, value }) => {
    const calculator = new BooleanCalculator();

    const expression = `NOT ${value}`;

    expect(calculator.exec(expression)).toBe(result);
  });
});
