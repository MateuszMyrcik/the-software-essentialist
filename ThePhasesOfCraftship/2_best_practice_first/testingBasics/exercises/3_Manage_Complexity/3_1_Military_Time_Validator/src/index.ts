export class MilitaryTimeValidator {
  constructor() {}

  static isNumber(input: unknown) {
    return !isNaN(Number(input));
  }

  static exec(timeRange: string) {
    const parts = timeRange.split(" ");

    const isCorrectFormat =
      parts.length === 3 &&
      MilitaryTimeValidator.isNumber(parts[0]) &&
      parts[1] === "-" &&
      MilitaryTimeValidator.isNumber(parts[2]);

    if (!isCorrectFormat) {
      throw new Error("Provide time range in valid format (hh:mm - hh:mm)");
    }
    return true;
  }
}
