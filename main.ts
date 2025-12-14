/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-14
 * @fileOverview This program prints even numbers between two odd numbers.
 */

// Hardcoded test values (replace these for different inputs)
const start: number = 3;  // must be odd
const end: number = 21;   // must be odd

let result: string = "";

for (let i = start + 1; i < end; i++) {
  if (i % 2 === 0) {
    result += i + " ";
  }
}

console.log(result.trim());
console.log("\nDone.");
