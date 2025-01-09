export class StatusCalculator {
  constructor(private numberSequence: number[]) {
    this.numberSequence = numberSequence;
  }

  public getMin() {
    let min: number | undefined;

    this.numberSequence.forEach((number) => {
      if (!min) {
        min = number;
        return;
      }
      if (number <= min) {
        min = number;
        return;
      }
    });

    return min;
  }
}
