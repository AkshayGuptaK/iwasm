// The entry file of your WebAssembly module.

declare function log(n: string): void;

export function minusOne(n: i32): i32 {
  log(`${n}`);
  return n - 1;
}

export function fizzBuzz(n: i32): string {
  if (n % 15 == 0) return "fizzbuzz";
  if (n % 3 == 0) return "fizz";
  if (n % 5 == 0) return "buzz";
  return "";
}

export function writeMemory(): void {
  memory.grow(2);
  store<u8>(0, 21);
  store<u8>(1, 99);
}

export function readMemory(ptr: i32): i32 {
  return load<u8>(ptr);
}
