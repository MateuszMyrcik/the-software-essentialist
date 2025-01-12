type Stats = {
  min: number;
  max: number;
  length: number;
};
export class StatusCalculator {
  static calculate(numberSequence: number[]): Stats {
    if (!numberSequence.length) {
      throw new Error("Provide at least 1 element sequence");
    }

    const stats: Stats = {
      min: numberSequence[0],
      max: numberSequence[0],
      length: numberSequence.length,
    };

    numberSequence.forEach((number) => {
      if (number <= stats.min) {
        stats.min = number;
        return;
      }

      if (number >= stats.max) {
        stats.max = number;
        return;
      }
    });

    return stats;
  }
}
