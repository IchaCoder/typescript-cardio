# Syntax Cardio

A collection of 10 TypeScript array exercises designed to work out your coding skills! These exercises range from easy to hard, organized into four difficulty bands.

## 📋 What's Included

The project contains **10 exercises** split across difficulty levels:

### Easy

- `sum()` — Sum an array of numbers
- `unique()` — Remove duplicates while preserving order

### Medium

- `sortTitlesIgnoringArticles()` — Sort movie titles ignoring leading articles ("The", "A", "An")
- `chunk()` — Split arrays into consecutive chunks of a given size

### Harder

- `runningTotal()` — Calculate cumulative sum at each step
- `topNPerSubject()` — Find top N scores per subject

### Hard

- `invertedIndex()` — Create a word-to-document index
- `groupStatesByPopulation()` — Group cities by state with population totals

### Bonus

- `partition()` — Split elements that satisfy a predicate vs those that don't
- `findNameById()` — Look up a user's name by ID

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running Tests

Run all tests once:

```bash
npm test
```

Run tests in watch mode (re-runs when files change):

```bash
npm run test:watch
```

## 💡 How to Use

1. Open [syntax-cardio.ts](syntax-cardio.ts) — this is where you'll implement the functions
2. Each function has a JSDoc comment explaining what it should do
3. Return values are currently stubbed out (empty arrays, null, etc.)
4. Run the tests to check your implementations against the test cases
5. Watch mode makes iteration fast — edit, save, see results immediately

## ✅ Tests

Tests are in [syntax-cardio.test.ts](syntax-cardio.test.ts). They verify:

- Correct output for various inputs
- Edge cases (empty arrays, single elements, etc.)
- Type correctness (TypeScript)

## 🔧 Solutions

Solutions are available on the **`solution`** branch. If you'd like to see how to solve these exercises:

```bash
git checkout solution
```

Then compare with your own implementation or study the approaches used.

## 📚 TypeScript Setup

This project uses:

- **TypeScript** for type safety and better developer experience
- **Vitest** for fast, ESM-friendly testing
- **ES modules** for modern JavaScript syntax

Configuration files:

- `tsconfig.json` — TypeScript compiler settings
- `vitest.config.ts` — Test runner configuration

## 💪 Tips

- Start with the **Easy** exercises to build confidence
- Use TypeScript's type system as a guide — it tells you what you need to work with
- Read the JSDoc comments carefully; they contain important details
- Check out the test file to understand expected behavior
- When stuck, branch to the `solution` branch for reference

Happy coding! 🎉
