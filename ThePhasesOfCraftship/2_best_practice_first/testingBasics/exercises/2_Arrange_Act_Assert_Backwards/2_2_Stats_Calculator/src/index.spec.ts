import { StatusCalculator } from "./index";

// Description: Your task is to process a sequence of integer numbers to determine
// the following statistics: Without using system Math library functions,
// process a sequence of integers to determine the following statistics:

// For example: [2, 4, 21, -8, 53, 40]

// minimum value = -8, maximum value = 53, number of elements in the sequence = 6, average value = 18.666666666667

describe("stats calculator", () => {
  it("for given sequence of integers [2, 5, 9] minimum value was calculated", () => {
    const stats = new StatusCalculator([2, 5, 9]);

    const minimum = stats.getMin();

    expect(minimum).toBe(2);
  });
});
