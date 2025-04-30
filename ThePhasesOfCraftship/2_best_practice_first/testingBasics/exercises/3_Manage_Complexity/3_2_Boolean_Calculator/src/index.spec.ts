import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  it("should return false for 'FALSE' boolean expression", () => {
    const expression = "FALSE";

    const calculator = new BooleanCalculator();

    expect(calculator.calc(expression)).toBe(false);
  });

  it("should return true for 'TRUE' boolean expression", () => {
    const expression = "TRUE";

    const calculator = new BooleanCalculator();

    expect(calculator.calc(expression)).toBe(true);
  });

  it("should return true for 'NOT FALSE' boolean expression", () => {
    const expression = "NOT FALSE";

    const calculator = new BooleanCalculator();

    expect(calculator.calc(expression)).toBe(true);
  });

  it("should return false for 'NOT TRUE' boolean expression", () => {
    const expression = "NOT TRUE";

    const calculator = new BooleanCalculator();

    expect(calculator.calc(expression)).toBe(false);
  });

  it.each(["FALS3", "NEW OPERATOR", "MAYBE"])(
    "should throw an error when boolean expression include unsupported value or operator '%s'",
    (wrongExpression) => {
      const calculator = new BooleanCalculator();

      expect(() => calculator.calc(wrongExpression)).toThrowError(
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

    expect(calculator.calc(expression)).toBe(result);
  });

  it.each([
    { expression: "TRUE AND TRUE", result: true },
    { expression: "FALSE AND TRUE", result: false },
    { expression: "FALSE AND FALSE", result: false },
    { expression: "TRUE AND FALSE", result: false },
  ])(
    "should read AND operator and compute value (%s)",
    ({ result, expression }) => {
      const calculator = new BooleanCalculator();

      expect(calculator.calc(expression)).toBe(result);
    }
  );

  it.each([
    { expression: "TRUE OR TRUE", result: true },
    { expression: "FALSE OR TRUE", result: true },
    { expression: "FALSE OR FALSE", result: false },
    { expression: "TRUE OR FALSE", result: true },
  ])(
    "should read OR operator and compute value (%s)",
    ({ result, expression }) => {
      const calculator = new BooleanCalculator();

      expect(calculator.calc(expression)).toBe(result);
    }
  );

  it.each([
    { expression: "TRUE OR TRUE OR TRUE AND FALSE", result: true },
    { expression: "TRUE OR FALSE AND NOT FALSE", result: true },
  ])(
    "should respect NOT, AND, OR operators precedence %s",
    ({ result, expression }) => {
      const calculator = new BooleanCalculator();

      expect(calculator.calc(expression)).toBe(result);
    }
  );

  it.each([
    { expression: "(TRUE OR TRUE OR TRUE) AND FALSE", result: false },
    { expression: "NOT (TRUE AND TRUE)", result: false },
  ])(
    "should read '()'  and compute values expression (%s)",
    ({ result, expression }) => {
      const calculator = new BooleanCalculator();

      expect(calculator.calc(expression)).toBe(result);
    }
  );
});
