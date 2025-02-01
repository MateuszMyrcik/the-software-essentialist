type Stats = {
  min: number;
  max: number;
  length: number;
  average: number;
};
export class StatusCalculator {
  static calculate(numberSequence: number[]): Stats {
    if (!numberSequence.length) {
      throw new Error("Provide at least 1 element sequence");
    }

    let totalSum = 0;

    const stats: Stats = {
      min: numberSequence[0],
      max: numberSequence[0],
      length: numberSequence.length,
      average: numberSequence[0],
    };

    numberSequence.forEach((number) => {
      totalSum += number;

      if (number <= stats.min) {
        stats.min = number;
      }

      if (number >= stats.max) {
        stats.max = number;
      }
    });

    stats.average = Number((totalSum / stats.length).toFixed(12));

    return stats;
  }
}
