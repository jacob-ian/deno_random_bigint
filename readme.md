# Deno Random BigInt Generator 
## Description
A random integer generator made for Deno. 

It accepts a desired bit-size for the integer and outputs the integer as a `bigint`.

## Usage

### Generate a BigInt from a Bit Size
```typescript
import { randomBigIntByBits } from "https://deno.land/x/random_bigint/mod.ts";

// Choose a bitsize
const bitsize = 2048;

// Create the random bigint
const random = randomBigIntByBits(bitsize); // or randomBigInt(2048)
```
### Generate a BigInt from a Range
```typescript
import { randomBigIntByRange } from "https://deno.land/x/random_bigint/mod.ts"

// Choose a minimum and maximum integer value
const min = 1n;
const max = 2**2048n;

// Generate the bigint
const random = randomBigIntByRange(min, max);
```

## License
MIT License.
