const StringCalculator = require("../src/stringCalculator");

describe("StringCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  test("should return sum for two comma-separated numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("1,5")).toBe(6);
  });

  test("should handle any amount of numbers", () => {
    expect(calculator.add("1,2,3")).toBe(6);
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

  test("should handle newlines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("1\n2\n3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3")).toBe(6);
  });

  test("should throw exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow("negatives not allowed: -2");
    expect(() => calculator.add("1,-2,3,-4")).toThrow(
      "negatives not allowed: -2,-4"
    );
  });
});
