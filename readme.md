# Deno Random BigInt Generator 
## Description
A random integer generator made for Deno. 

It either accepts a desired bit-length for the integer and outputs the integer as a `bigint`, or a desired range for the random `bigint` to be within.

## Usage

### Generate a Random BigInt from a Bit Length
```typescript
import { randomBigIntBits } from "https://deno.land/x/random_bigint/mod.ts";

// Choose a bit-length
const bitlength = 2048;

// Create the random bigint
const random = randomBigIntBits(bitlength); // or randomBigInt(2048)
```
### Generate a Random BigInt from a Range
```typescript
import { randomBigIntRange } from "https://deno.land/x/random_bigint/mod.ts"

// Choose a minimum and maximum integer value
const min = 1n;
const max = 2**2048n;

// Generate the bigint
const random = randomBigIntRange(min, max);
```

## License
MIT License.
