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

  it("for given sequence of integers [2, 5, 9] minimum value was calculated", () => {
    const { min } = StatusCalculator.calculate([2, 5, 9]);

    expect(min).toBe(2);
  });

  it("for given sequence of integers [2, 5, 9] maximum value was calculated", () => {
    const { max } = StatusCalculator.calculate([2, 5, 9]);

    expect(max).toBe(9);
  });

  it("for given sequence of integers [2,5,9] length was calculated", () => {
    const { length } = StatusCalculator.calculate([2, 5, 9]);

    expect(length).toBe(3);
  });

  it("for given sequence of integers [2,5,9] average was calculated", () => {
    const { average } = StatusCalculator.calculate([2, 5, 9]);

    expect(average).toBe(5.333333333333333);
  });
});
