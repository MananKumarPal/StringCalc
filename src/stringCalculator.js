class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = ",";
    let numberString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0];
      delimiter = delimiterLine.substring(2); // Remove '//'
      numberString = numbers.split("\n")[1]; // Get numbers part
    }

    // Replace newlines and custom delimiters with commas
    const cleanNumbers = numberString
      .replace(/\n/g, ",")
      .replace(new RegExp(this.escapeRegex(delimiter), "g"), ",");

    const numbersArray = cleanNumbers.split(",");
    let sum = 0;

    for (let num of numbersArray) {
      if (num !== "") {
        sum += parseInt(num);
      }
    }

    return sum;
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

module.exports = StringCalculator;
