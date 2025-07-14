# String Calculator TDD Kata

This project is an implementation of the String Calculator using Test Driven Development

## Features Implemented

- Handles empty string input and returns 0
- Handles a single number input
- Handles two comma-separated numbers
- Handles any amount of comma-separated numbers
- Handles newlines between numbers as valid delimiters
- Supports custom single-character delimiters specified in the input
- Throws an exception when negative numbers are present, listing all negative values in the error message

## Setup

To install dependencies, run:

```bash
npm install
```

## Running Tests

To run the test suite, use:

```bash
npm test
```

## Project Structure

- `src/stringCalculator.js`: String Calculator implementation
- `test/stringCalculator.test.js`: Test cases for the String Calculator

## How it Works

The String Calculator provides an `add` method that takes a string of numbers separated by delimiters (commas, newlines, or a custom delimiter) and returns their sum. If negative numbers are included, an exception is thrown listing all negative values found.
