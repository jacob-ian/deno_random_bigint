/**
 * This file contains the tests for the randomBigInt function.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 04/07/2020
 */

// Imports
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { randomBigIntBits, randomBigIntRange } from "./mod.ts";

// Create the random bigint by bits test
Deno.test("Random BigInt by Bit-size", () => {
  // Define the bit-length
  const bitlength = 2048;

  // Generate the 2048-bit random integer
  const random = randomBigIntBits(bitlength);

  // Calculate the minimum and maximum values
  const min = 2n ** BigInt(bitlength - 1);
  const max = 2n ** BigInt(bitlength);

  // Check to see if the random integer is in the correct range
  assertEquals(random > min && random < max, true);
});

// Create the random bigint by range test
Deno.test("Random BigInt by Range", () => {
  // Define the minimum and maximum values
  const min = 1n;
  const max = 2n ** 1024n;

  // Generate the the random bigint
  const random = randomBigIntRange(min, max);

  // Assert that the random bigint is within the range
  assertEquals((random > min) && (random < max), true);
});
