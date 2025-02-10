type SupportedValue = "FALSE" | "TRUE";
type SupportedOperators = "NOT" | "AND" | "OR";

type ExpressionSupportedCodes = SupportedValue | SupportedOperators;

export class BooleanCalculator {
  private SUPPORTED_VALUES: SupportedValue[] = ["FALSE", "TRUE"];
  private SUPPORTED_OPERATORS: SupportedOperators[] = ["NOT", "AND", "OR"];

  constructor() {}

  calc(expression: string) {
    const result = this.calcWithParenthesis(expression);

    return result === "TRUE";
  }

  private calcWithParenthesis(expression: string) {
    let tempExpression = expression;

    while (tempExpression.includes("(")) {
      const openIndex = tempExpression.indexOf("(");
      const closeIndex = this.findCloseIndex(openIndex, tempExpression);

      const innerExpression = tempExpression.substring(
        openIndex + 1,
        closeIndex
      );

      const result = this.calcWithParenthesis(innerExpression);

      tempExpression =
        tempExpression.substring(0, openIndex) +
        result +
        tempExpression.substring(closeIndex + 1);
    }

    return this.calcPureExpression(tempExpression);
  }

  private calcPureExpression(expression: string) {
    const parts = expression.split(" ");

    if (!this.isValidExpressionFormat(parts)) {
      throw Error("Provide valid boolean expression");
    }

    let transformedParts = parts as ExpressionSupportedCodes[];

    transformedParts = this.handleNot(transformedParts);
    transformedParts = this.handleAnd(transformedParts);
    transformedParts = this.handleOr(transformedParts);

    return transformedParts[0];
  }

  private handleNot = (
    expression: ExpressionSupportedCodes[]
  ): ExpressionSupportedCodes[] => {
    if (!expression.includes("NOT")) {
      return expression;
    }

    const operatorIndex = expression.indexOf("NOT");
    const valueIndex = operatorIndex + 1;
    const value = expression[valueIndex];

    const newValue: SupportedValue = value === "TRUE" ? "FALSE" : "TRUE";

    const result = [
      ...expression.slice(0, operatorIndex),
      newValue,
      ...expression.slice(valueIndex + 1),
    ];

    return this.handleNot(result);
  };

  private handleAnd = (
    expression: ExpressionSupportedCodes[]
  ): ExpressionSupportedCodes[] => {
    if (!expression.includes("AND")) {
      return expression;
    }

    const operatorIndex = expression.indexOf("AND");
    const firstValue = expression[operatorIndex - 1];
    const secondValue = expression[operatorIndex + 1];

    const newValue: SupportedValue = [firstValue, secondValue].includes("FALSE")
      ? "FALSE"
      : "TRUE";

    const result = [
      ...expression.slice(0, operatorIndex - 1),
      newValue,
      ...expression.slice(operatorIndex + 2),
    ];

    return this.handleAnd(result);
  };

  private handleOr = (
    expression: ExpressionSupportedCodes[]
  ): ExpressionSupportedCodes[] => {
    if (!expression.includes("OR")) {
      return expression;
    }

    const operatorIndex = expression.indexOf("OR");
    const firstValue = expression[operatorIndex - 1];
    const secondValue = expression[operatorIndex + 1];

    const newValue: SupportedValue = [firstValue, secondValue].includes("TRUE")
      ? "TRUE"
      : "FALSE";

    const result = [
      ...expression.slice(0, operatorIndex - 1),
      newValue,
      ...expression.slice(operatorIndex + 2),
    ];

    return this.handleAnd(result);
  };

  private findCloseIndex = (openIndex: number, expression: string) => {
    let count = 1;
    let position = openIndex;

    while (count > 0) {
      position++;
      if (expression[position] === "(") count++;
      if (expression[position] === ")") count--;
    }

    return position;
  };

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
}
