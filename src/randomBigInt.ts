/**
 * This file contains the methods to generate a random bigint.
 * 
 * @author Jacob Ian Matthews
 * @version 1.0 04/07/2020
 */

/* FUNCTIONS */
/**
 * Generate a random BigInt given a bit-length
 * @param bitlength the bit-length (e.g. 2048, 1024, etc.). Must be
 * at least 8 (>= 8 ).
 * @return 
 */
export function randomBigIntBits(bitlength: number): bigint {
  // Check the bit-length
  if (bitlength >= 8) {
    // Find the largest integer possible from the bit-length
    const max = 2n ** BigInt(bitlength);

    // Find the smallest integer possible from the bit-length
    const min = 2n ** BigInt(bitlength - 1);

    // Create a variable to store the random integer
    var random: bigint = 0n;

    // Create a loop to generate a random integer within the range
    var generate = true;
    while (generate) {
      // Get the number of bytes from the bit-length
      const n = bitlength / 8;

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

      // Check if the random integer is within the allowed range
      if (max > random && min < random) {
        // End the loop
        generate = false;
      }
    }

    // Return the random integer
    return random;
  } else {
    // Throw an error
    throw new Error(
      "Please use a bit-length greater than 8 for the desired random integer.",
    );
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

  // Find a random bit-length within the range for the integer
  const randBits = randomInt(minBits, maxBits);

  // Create a variable to store the random integer
  var random = 0n;

  // Check the random bit-length for if it is less than 8
  if (randBits < 8) {
    // Create a loop to generate numbers until one in the correct range is found
    var generate = true;
    while (generate) {
      // We can calculate a random integer by finding a random number
      // and multiplying it by the maximum number at this bit-length

      const randNum = Math.random();
      const maxNum = Math.pow(2, randBits);

      // We can thus find var random to be
      random = BigInt(Math.round(randNum * maxNum));

      // Ensure it is within the proper range
      if (random < max && random > min) {
        // Stop the loop
        generate = false;
      }
    }
  } else {
    // Create a loop to generate the random integer by bit-length
    // until it finds one within the correct range
    var generate = true;
    while (generate) {
      // Create a loop to generate the random integer by bit-length
      // until it finds one within the correct range
      // Get a random integer at that bit-length
      random = randomBigIntBits(randBits);

      // Ensure it is within the proper range
      if (random < max && random > min) {
        // Stop the loop
        generate = false;
      }
    }
  }

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
