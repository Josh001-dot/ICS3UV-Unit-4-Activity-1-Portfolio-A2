/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-01-01
 * @fileOverview This program prints even numbers between two odd numbers.
 */

const prompt = require("prompt-sync")()

const start = Number(prompt("Please enter a starting value (it must be an odd number): "))
const end = Number(prompt("Please enter an ending value (it must be an odd number): "))

let result = ""

for (let i = start + 1; i < end; i++) {
  if (i % 2 === 0) {
    result += i + " "
  }
}

console.log(result.trim())
console.log("\nDone.")
