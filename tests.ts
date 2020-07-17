/**
 * This file contains the tests for the randomBigInt function.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 04/07/2020
 */

// Imports
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { randomBigIntBits, randomBigIntRange } from "./mod.ts";

// Create a test at a big bit-length
Deno.test("Random BigInt by Large Bit-length", () => {
  // Define the bit-length
  const bitlength = 2048;

  // Generate the 2048-bit random integer
  const random = randomBigIntBits(bitlength);

  // Calculate the minimum and maximum values
  const min = 2n ** BigInt(bitlength - 1);
  const max = 2n ** BigInt(bitlength);

  // Log the random number
  console.log(`Random BigInt: ${random}`);

  // Check to see if the random integer is in the correct range
  assertEquals(random > min && random < max, true);
});

// Create a test at a small bit-length
Deno.test("Random BigInt by Small Bit-length", () => {
  // Define the bitlength
  const bitlength = 8;

  // Calculate the min and max values
  const min = 2n ** BigInt(bitlength - 1);
  const max = 2n ** BigInt(bitlength);

  // Generate the random integer by bit-length
  const random = randomBigIntBits(bitlength);

  // Log the random number
  console.log(`Random BigInt: ${random}`);

  // Check to see if the random integer is in the correct range
  assertEquals(random > min && random < max, true);
});

// Create the random bigint by range test
Deno.test("Random BigInt by Large Range", () => {
  // Define the minimum and maximum values
  const min = 1n;
  const max = 2n ** 1024n;

  // Generate the the random bigint
  const random = randomBigIntRange(min, max);

  // Log the random number
  console.log(`Random BigInt: ${random}`);

  // Assert that the random bigint is within the range
  assertEquals((random > min) && (random < max), true);
});

// Create a small range to test the function at
Deno.test("Random BigInt by Small Range", () => {
  // Define the minumum and maximum values
  const min = 1n;
  const max = 100n;

  // Generate the random bigint
  const random = randomBigIntRange(min, max);

  // Log the random number
  console.log(`Random BigInt: ${random}`);

  // Asser that the random bigint is within the correct range
  assertEquals((random > min) && (random < max), true);
});
