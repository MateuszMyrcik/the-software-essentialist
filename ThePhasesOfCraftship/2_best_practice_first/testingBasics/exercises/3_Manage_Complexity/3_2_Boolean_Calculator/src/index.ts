type SupportedValue = "FALSE" | "TRUE";
type SupportedOperators = "NOT" | "AND" | "OR";

type ExpressionSupportedCodes = SupportedValue | SupportedOperators;

export class BooleanCalculator {
  private SUPPORTED_VALUES: SupportedValue[] = ["FALSE", "TRUE"];
  private SUPPORTED_OPERATORS: SupportedOperators[] = ["NOT", "AND", "OR"];

  constructor() {}

  private isValidValue(value: string): value is SupportedValue {
    return this.SUPPORTED_VALUES.includes(value as SupportedValue);
  }

  private isValidOperator(operator: string): operator is SupportedOperators {
    return this.SUPPORTED_OPERATORS.includes(operator as SupportedOperators);
  }

  private isValidExpressionFormat(parts: string[]) {
    return parts.every(
      (part) => this.isValidValue(part) || this.isValidOperator(part)
    );
  }

  exec(expression: string) {
    const parts = expression.split(" ");

    if (!this.isValidExpressionFormat(parts)) {
      throw Error("Provide valid boolean expression");
    }

    let transformedParts = parts as ExpressionSupportedCodes[];

    while (transformedParts.length !== 1) {
      transformedParts = transformedParts.reduce((acc, cur, curIndex) => {
        if (!acc.length) {
          acc.push(cur as ExpressionSupportedCodes);
          return acc;
        }

        if (acc[curIndex - 1] === "NOT") {
          if (cur === "TRUE") {
            return [...acc.splice(0, -2), "FALSE"];
          }
          if (cur === "FALSE") {
            return [...acc.splice(0, -2), "TRUE"];
          }
        }

        if (acc[curIndex - 1] === "AND") {
          const firstValue = acc[curIndex - 2];
          const secondValue = cur;
          if ([firstValue, secondValue].includes("FALSE")) {
            return [...acc.splice(0, -3), "FALSE"];
          }

          return [...acc.splice(0, -3), "TRUE"];
        }

        if (acc[curIndex - 1] === "OR") {
          const firstValue = acc[curIndex - 2];
          const secondValue = cur;
          if ([firstValue, secondValue].includes("TRUE")) {
            return [...acc.splice(0, -3), "TRUE"];
          }

          return [...acc.splice(0, -3), "FALSE"];
        }

        acc.push(cur);
        return acc;
      }, [] as ExpressionSupportedCodes[]);
    }

    return transformedParts[0] === "TRUE" ? true : false;
  }
}
