class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    //
    const cleanNumbers = numbers.replace(/\n/g, ",");
    const numbersArray = cleanNumbers.split(",");
    let sum = 0;

    for (let num of numbersArray) {
      sum += parseInt(num);
    }

    return sum;
  }
}

module.exports = StringCalculator;
