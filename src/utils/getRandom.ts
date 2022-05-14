const { crypto } = window;
const array = new Uint32Array(1);

export const getRandom = (base = 4294967296): number =>
  Math.floor((crypto.getRandomValues(array)[0] * base) / 4294967296); // max 4294967296
