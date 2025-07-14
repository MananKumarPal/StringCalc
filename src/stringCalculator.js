class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = ",";
    let numberString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0];
      delimiter = delimiterLine.substring(2);
      numberString = numbers.split("\n")[1];
    }

    // Replace newlines and custom delimiters with commas
    const cleanNumbers = numberString
      .replace(/\n/g, ",")
      .replace(new RegExp(this.escapeRegex(delimiter), "g"), ",");

    const numbersArray = cleanNumbers.split(",");
    const negatives = [];
    let sum = 0;

    for (let num of numbersArray) {
      if (num !== "") {
        const number = parseInt(num);
        if (number < 0) {
          negatives.push(number);
        } else {
          sum += number;
        }
      }
    }

    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    return sum;
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

module.exports = StringCalculator;
