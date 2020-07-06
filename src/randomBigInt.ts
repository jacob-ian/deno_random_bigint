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
export function randomBigIntBits(bitsize: number): bigint {
  // Find the largest integer possible from the bitsize
  const max = 2n ** BigInt(bitsize);

  // Find the smallest integer possible from the bitsize
  const min = 2n ** BigInt(bitsize - 1);

  // Create a variable to store the random integer
  var random: bigint = 0n;

  // Check the number of bits to determine whether to use hex or not
  if (bitsize >= 8) {
    // Get the number of bytes from the bitsize
    const n = bitsize / 8;

    // Define the hexadecimal characters
    const chars = "0123456789abcdef";

    // Generate n random bytes and append them to a hexadecimal string
    var hexstring = "0x";

    // Create an output variable
    var random = 0n;

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

    // Convert the byte string into a bigint
    random = BigInt(hexstring);
  } else {
    // There is less than one byte, so we must use binary.
    // Create a binary string with a 1 in the first position
    var binary = "1";

    // We can now choose random 0s or 1s for the remaining bits (bitsize - 1)
    const bits = bitsize - 1;
    for (var i = 0; i < bits; i++) {
      // Generate a random decimal number
      const rNum = Math.random();

      // Round the number to 0 or 1
      const bin = Math.round(rNum);

      // Add the number to the binary string
      binary += bin;
    }

    // Convert the binary string to a bigint
    random = BigInt(binary);
  }

  // Compare the random integer to the maximum integer
  if (max > random && min < random) {
    // Return the random integer
    return random;
  } else {
    // Restart the function
    return randomBigIntBits(bitsize);
  }
}

/**
 * Generate a random bigint from within a provided range such that
 * min < random < max
 * @param min the minimum integer in the range
 * @param max the maximum integer in the range
 */
export function randomBigIntRange(min: bigint, max: bigint): bigint {
  // We will first find how many bits are in the inputted
  // min and max values
  const minBits = min.toString(2).length;
  const maxBits = max.toString(2).length;

  // Find a random bit length within the range for the integer
  const randBits = randomInt(minBits, maxBits);

  // Get a random integer at that bitsize
  const random = randomBigIntBits(randBits);

  // Ensure it is within the proper range
  if (random < max && random > min) {
    // Return the bigint
    return random;
  } else {
    // Re-run the function
    return randomBigIntRange(min, max);
  }
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
