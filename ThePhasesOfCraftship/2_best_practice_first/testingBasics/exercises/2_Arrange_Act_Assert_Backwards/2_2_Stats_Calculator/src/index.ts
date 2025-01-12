type Stats = {
  min: number;
  max: number;
};
export class StatusCalculator {
  static calculate(numberSequence: number[]): Stats {
    if (!numberSequence.length) {
      throw new Error("Provide at least 1 element sequence");
    }

    const stats: Stats = {
      min: numberSequence[0],
      max: numberSequence[0],
    };

    numberSequence.forEach((number, index) => {
      if (!index) {
        stats.max = number;
        stats.min = number;
        return;
      }

      if (number <= (stats.min as number)) {
        stats.min = number;
        return;
      }

      if (number >= (stats.max as number)) {
        stats.max = number;
        return;
      }
    });

    return stats;
  }
}
