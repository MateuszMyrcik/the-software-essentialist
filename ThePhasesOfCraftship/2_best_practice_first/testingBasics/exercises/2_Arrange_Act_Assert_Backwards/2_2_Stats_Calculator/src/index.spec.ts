import { StatusCalculator } from "./index";

// Description: Your task is to process a sequence of integer numbers to determine
// the following statistics: Without using system Math library functions,
// process a sequence of integers to determine the following statistics:

// For example: [2, 4, 21, -8, 53, 40]

// minimum value = -8, maximum value = 53, number of elements in the sequence = 6, average value = 18.666666666667

describe("stats calculator", () => {
  it("for empty sequence throw an error", () => {
    expect(() => StatusCalculator.calculate([])).toThrow(
      "Provide at least 1 element sequence"
    );
  });

  it.each([
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], { min: 1, max: 9, length: 9, average: 5 }],
    [
      [2, 4, 21, -8, 53, 40],
      { min: -8, max: 53, length: 6, average: 18.666666666667 },
    ],
    [[2, 5, 9], { min: 2, max: 9, length: 3, average: 5.333333333333 }],
  ])(
    "for given sequence %s calculate min, average and length",
    (sequence, expectedStats) => {
      const { average, length, max, min } =
        StatusCalculator.calculate(sequence);

      expect(average).toBe(expectedStats.average);
      expect(min).toBe(expectedStats.min);
      expect(max).toBe(expectedStats.max);
      expect(length).toBe(expectedStats.length);
    }
  );
});
