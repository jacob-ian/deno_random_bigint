/**
 * This file contains the tests for the randomBigInt function.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 04/07/2020
 */

// Import the function
import { randomBigInt } from "./mod.ts";

// Define the bitsize
const bitsize = 2048;

// Generate the 2048-bit random integer
const random = randomBigInt(bitsize);

// Calculate the minimum and maximum values
const min = 2n ** BigInt(bitsize - 1);
const max = 2n ** BigInt(bitsize);

// Check to see if the random integer is in the correct range
// Return true if in range, return false otherwise
console.log(random > min ? random < max ? true : false : false);
