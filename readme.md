# Deno Random BigInt Generator 🦕 
## Description
A random integer generator made for Deno. 

It accepts a desired bit-size for the integer and outputs the integer as a `bigint`.

## Usage
```typescript
import { randomBigInt } from "https://deno.land/x/random_bigint/mod.ts";

// Choose a bitsize
const bitsize = 2048;

// Create the random bigint
const bigint = randomBigInt(bitsize); // or randomBigInt(2048)
```

## License
MIT License.
