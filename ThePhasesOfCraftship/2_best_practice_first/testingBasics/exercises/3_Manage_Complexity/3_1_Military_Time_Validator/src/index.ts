export class MilitaryTimeValidator {
  constructor() {}

  static exec(timeRange: string) {
    const [from, seperator, to] = timeRange.split(" ");

    const isCorrectFormat =
      timeRange.length === 13 &&
      from.length === 5 &&
      seperator.length === 1 &&
      to.length === 5;

    if (!isCorrectFormat) {
      throw new Error("Provide time range in valid format [from - to]");
    }

    return true;
  }
}
