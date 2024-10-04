import { readFileSync } from 'fs';
import { validatePizza } from './validatePizza'; 


function readJsonFile(filePath: string) {
    try {
        const fileContents = readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContents);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error reading file: ${error.message}`);
        } else {
            throw new Error('Unknown error occurred while reading the file');
        }
    }
}

function main() {
    const args = process.argv.slice(2);

    if (args.length !== 1) {
        console.error('Usage: validate-pizza <path-to-json-file>');
        process.exit(1);
    }

    const filePath = args[0];

    try {
        const pizzaObject = readJsonFile(filePath);
        const validationResult = validatePizza(pizzaObject);

        if (validationResult.isPizza) {
            console.log('Valid Pizza:', validationResult.pizza);
        } else {
            console.error('Invalid Pizza:', validationResult.errors);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('An unknown error occurred');
        }
        process.exit(1);
    }
}

main();
