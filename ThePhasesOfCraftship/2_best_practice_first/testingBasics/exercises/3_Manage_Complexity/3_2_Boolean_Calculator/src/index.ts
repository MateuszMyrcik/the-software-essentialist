export class BooleanCalculator {
  constructor() {}

  static exec(expression: string) {
    if (expression === "TRUE") {
      return true;
    }
    return false;
  }
}
