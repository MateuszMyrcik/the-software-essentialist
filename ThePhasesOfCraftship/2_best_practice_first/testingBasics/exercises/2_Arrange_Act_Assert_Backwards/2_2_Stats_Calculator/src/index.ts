type Stats = {
  min: number;
  max: number;
};
export class StatusCalculator {
  static calculate(numberSequence: number[]) {
    const stats: Partial<Stats> = {
      min: undefined,
      max: undefined,
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
