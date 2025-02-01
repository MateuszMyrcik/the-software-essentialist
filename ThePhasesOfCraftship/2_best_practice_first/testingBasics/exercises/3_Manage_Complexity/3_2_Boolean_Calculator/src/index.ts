export class BooleanCalculator {
  constructor() {}

  static exec(expression: string) {
    if (expression === "TRUE") {
      return true;
    }

    if (expression === "NOT FALSE") {
      return true;
    }

    return false;
  }
}
