/**
 * This file contains the methods to generate a random bigint.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 04/07/2020
 */

/* FUNCTIONS */
/**
 * Generate a random BigInt given a bit-size
 * @param bitsize the bit-size (e.g. 2048, 1024, etc.)
 */
export function randomBigInt(bitsize: number): bigint {
  // Get the number of bytes from the bitsize
  const n = bitsize / 8;

  // Define the hexadecimal characters
  const chars = "0123456789abcdef";

  // Generate n random bytes and append them to a hexadecimal string
  var hexstring = "0x";

  // Loop through to choose random bytes
  for (var i = 0; i < n; i++) {
    // Generate two random integers from 0 to 15
    const rand1 = randomInt(0, 15);
    const rand2 = randomInt(0, 15);

    // Select their corresponding characters from those available
    const char1 = chars[rand1];
    const char2 = chars[rand2];

    // Append the characters to the string
    hexstring += `${char1}${char2}`;
  }

  // Convert the hexstring into a bigint
  const random = BigInt(hexstring);

  // Return the random integer
  return random;
}

/**
 * Generate a random integer in a defined range.
 * @param min the minimum integer in the range
 * @param max the maximum integer in the range
 */
function randomInt(min: number, max: number): number {
  // Generate a random number
  const rand = Math.random();

  // Return an integer from within the desired range
  return Math.floor(rand * (1 + max - min) + min);
}
