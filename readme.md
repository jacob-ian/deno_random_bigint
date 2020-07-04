# Deno Random BigInt Generator 
## Description
A random integer generator made for Deno. 

It accepts a desired bit-size for the integer and outputs the integer as a `bigint`.

## Usage

### Generate a Random BigInt from a Bit Size
```typescript
import { randomBigIntBits } from "https://deno.land/x/random_bigint/mod.ts";

// Choose a bitsize
const bitsize = 2048;

// Create the random bigint
const random = randomBigIntBits(bitsize); // or randomBigInt(2048)
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
