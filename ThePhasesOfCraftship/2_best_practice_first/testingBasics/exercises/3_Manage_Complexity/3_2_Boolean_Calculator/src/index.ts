type SupportedValue = "FALSE" | "TRUE";
type SupportedOperators = "NOT" | "AND" | "OR";

export class BooleanCalculator {
  private SUPPORTED_VALUES: SupportedValue[] = ["FALSE", "TRUE"];
  private SUPPORTED_OPERATORS: SupportedOperators[] = ["NOT", "AND", "NOT"];

  constructor() {}

  private isValidValue(value: string): value is SupportedValue {
    return this.SUPPORTED_VALUES.includes(value as SupportedValue);
  }

  private isValidOperator(operator: string): operator is SupportedOperators {
    return this.SUPPORTED_OPERATORS.includes(operator as SupportedOperators);
  }

  private isValidExpressionFormat(expression: string) {
    const parts = expression.split(" ");
    return parts.every(
      (part) => this.isValidValue(part) || this.isValidOperator(part)
    );
  }

  exec(expression: string) {
    if (!this.isValidExpressionFormat(expression)) {
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
