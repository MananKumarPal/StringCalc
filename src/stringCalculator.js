class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    const numbersArray = numbers.split(",");
    let sum = 0;

    for (let num of numbersArray) {
      sum += parseInt(num);
    }

    return sum;
  }
}

module.exports = StringCalculator;
