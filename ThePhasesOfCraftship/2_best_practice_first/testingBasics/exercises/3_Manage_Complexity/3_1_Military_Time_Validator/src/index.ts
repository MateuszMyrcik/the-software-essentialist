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

    const parsedInput = {
      from: {
        hours: Number(from.slice(0, 2)),
        separator: from.slice(2, 3),
        minutes: Number(from.slice(3, 5)),
      },
      to: {
        hours: Number(to.slice(0, 2)),
        separator: to.slice(2, 3),
        minutes: Number(to.slice(3, 5)),
      },
    };

    if (
      [
        parsedInput.to.hours,
        parsedInput.to.minutes,
        parsedInput.from.hours,
        parsedInput.from.minutes,
      ].some(isNaN)
    ) {
      throw new Error("Provide time range with digit only values");
    }

    if (
      [parsedInput.from.separator, parsedInput.to.separator].some(
        (separator) => separator !== ":"
      )
    ) {
      throw new Error("Separate time values with ':'");
    }

    if (
      parsedInput.from.hours < 0 ||
      parsedInput.from.hours > 23 ||
      parsedInput.to.hours < 0 ||
      parsedInput.to.hours > 23
    ) {
      throw new Error("Provide time range with hours in range (0-23)");
    }

    if (
      parsedInput.from.minutes < 0 ||
      parsedInput.from.minutes > 59 ||
      parsedInput.to.minutes < 0 ||
      parsedInput.to.minutes > 59
    ) {
      throw new Error("Provide time range with minutes in range (0-59)");
    }

    return true;
  }
}
