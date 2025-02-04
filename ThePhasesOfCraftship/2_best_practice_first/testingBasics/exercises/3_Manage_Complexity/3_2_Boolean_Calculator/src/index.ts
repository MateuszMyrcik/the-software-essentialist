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
      const notOperatorIndex = transformedParts.findIndex(
        (part) => part === "NOT"
      );
      const andOperatorIndex = transformedParts.findIndex(
        (part) => part === "AND"
      );
      const orOperatorIndex = transformedParts.findIndex(
        (part) => part === "OR"
      );

      if (notOperatorIndex > -1) {
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

          acc.push(cur);
          return acc;
        }, [] as ExpressionSupportedCodes[]);
        continue;
      }

      if (andOperatorIndex > -1) {
        transformedParts = transformedParts.reduce((acc, cur, curIndex) => {
          if (!acc.length) {
            acc.push(cur as ExpressionSupportedCodes);
            return acc;
          }

          if (acc[curIndex - 1] === "AND") {
            const firstValueIndex = curIndex - 2;
            const secondValueIndex = curIndex;
            const operatorIndex = curIndex - 1;
            const firstValue = acc[curIndex - 2];
            const secondValue = cur;
            acc[firstValueIndex] = "" as any;
            acc[secondValueIndex] = "" as any;
            if ([firstValue, secondValue].includes("FALSE")) {
              acc[operatorIndex] = "FALSE";
            } else {
              acc[operatorIndex] = "TRUE";
            }

            return acc.filter((part) => !!part);
          }

          acc.push(cur);
          return acc;
        }, [] as ExpressionSupportedCodes[]);
        continue;
      }

      if (orOperatorIndex > -1) {
        transformedParts = transformedParts.reduce((acc, cur, curIndex) => {
          if (!acc.length) {
            acc.push(cur as ExpressionSupportedCodes);
            return acc;
          }

          if (acc[curIndex - 1] === "OR") {
            const firstValueIndex = curIndex - 2;
            const secondValueIndex = curIndex;
            const operatorIndex = curIndex - 1;
            const firstValue = acc[curIndex - 2];
            const secondValue = cur;
            acc[firstValueIndex] = "" as any;
            acc[secondValueIndex] = "" as any;
            if ([firstValue, secondValue].includes("TRUE")) {
              acc[operatorIndex] = "TRUE";
            } else {
              acc[operatorIndex] = "FALSE";
            }

            return acc.filter((part) => !!part);
          }

          acc.push(cur);
          return acc;
        }, [] as ExpressionSupportedCodes[]);
        continue;
      }
    }

    return transformedParts[0] === "TRUE" ? true : false;
  }
}
