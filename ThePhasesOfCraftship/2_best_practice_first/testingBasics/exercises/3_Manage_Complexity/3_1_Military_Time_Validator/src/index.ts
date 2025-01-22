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

    if (
      Number(from.slice(0, 2)) < 0 ||
      Number(from.slice(0, 2)) > 23 ||
      Number(to.slice(0, 2)) < 0 ||
      Number(to.slice(0, 2)) > 23
    ) {
      throw new Error("Provide time range with hours in range (0-23)");
    }

    return true;
  }
}
