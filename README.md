# Pizza-Validator
A lightweight typescript npm package that checks if an object is a valid pizza. It provides both a programmatic API and a command-line interface (CLI) for validating pizza objects based on their size, crust type, toppings, and other properties.

## Features

- **Pizza Validation**: Validates pizza objects based on a set of rules, including pizza size, crust type, and toppings.
- **Command Line Interface (CLI)**: Easily validate pizza data from JSON files directly in the terminal.
- **Customizable Validation Logic**: Extend or modify the pizza validation logic to suit your needs.
- **Lightweight and Easy to Use**: Minimal dependencies and easy integration into any project.

## What is a Valid Pizza?

A valid pizza object must adhere to the following rules:

- **Size**: A number representing the diameter of the pizza in inches.
- **Crust**: A string that can either be `'stuffed'` or `'normal'`.
- **isDeepDish** (Optional): A boolean indicating whether the pizza is deep dish. Defaults to `false` if omitted.
- **Toppings** (Optional): An array of strings representing the pizza's toppings. Any string is allowed except for `'screws'`, `'bolts'`, `'nails'`, and `'pineapple'`. These are case-insensitive, meaning `'PINEAPPLE'` and `'Screws'` will also be considered invalid.

The validator will return detailed error messages if the object does not conform to the above rules.

## Installation

To include Pizza Validator in your project, you can install it via npm:

```bash
npm install pizza-validator
```

## For Global CLI Usage
If you'd like to use the pizza validator directly from your terminal as a command-line tool, install the package globally:

```bash
npm install -g pizza-validator
```

This will allow you to use the pizza-validator command from anywhere on your system to validate pizza data stored in JSON files.

## Using the CLI Tool
The pizza-validator package also comes with a CLI tool that allows you to validate pizza data stored in JSON files directly from the command line.

Run the validator from the command line to check if the pizza is valid:

```bash
pizza-validator test-pizza.json
```