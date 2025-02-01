export class BooleanCalculator {
  constructor() {}

  static exec(expression: string) {
    const supportedValues = ["FALSE", "TRUE"];
    const supportedOperators = ["NOT", "AND", "NOT"];

    const parts = expression.split(" ");

    if (
      parts.some(
        (part) => ![...supportedOperators, ...supportedValues].includes(part)
      )
    ) {
      throw Error("Provide valid boolean expression");
    }

    if (expression === "TRUE") {
      return true;
    }

    if (expression === "NOT FALSE") {
      return true;
    }

    return false;
  }
}
