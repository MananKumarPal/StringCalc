class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    const { delimiter, numberString } = this.parseInput(numbers);
    const numbersArray = this.extractNumbers(numberString, delimiter);

    this.validateNoNegatives(numbersArray);

    return numbersArray.reduce((sum, num) => sum + num, 0);
  }

  parseInput(numbers) {
    if (numbers.startsWith("//")) {
      const lines = numbers.split("\n");
      return {
        delimiter: lines[0].substring(2),
        numberString: lines[1],
      };
    }

    return {
      delimiter: ",",
      numberString: numbers,
    };
  }

  extractNumbers(numberString, delimiter) {
    const cleanNumbers = numberString
      .replace(/\n/g, ",")
      .replace(new RegExp(this.escapeRegex(delimiter), "g"), ",");

    return cleanNumbers
      .split(",")
      .filter((num) => num !== "")
      .map((num) => parseInt(num));
  }

  validateNoNegatives(numbers) {
    const negatives = numbers.filter((num) => num < 0);

    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

module.exports = StringCalculator;
