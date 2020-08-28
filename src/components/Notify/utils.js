/* eslint-disable no-bitwise */
export const generateUUID = (prefix) => {
  const lut = [];
  for (let i = 0; i < 256; i += 1) {
    lut[i] = (i < 16 ? "0" : "") + i.toString(16);
  }

  const getRandomNumber = () => (Math.random() * 0x100000000) >>> 0;

  const d0 = getRandomNumber();
  const d1 = getRandomNumber();
  const d2 = getRandomNumber();
  const d3 = getRandomNumber();
  const UUIDPrefix = prefix ? `${prefix}-` : "";

  return `${UUIDPrefix}${
    lut[d0 & 0xff] +
    lut[(d0 >> 8) & 0xff] +
    lut[(d0 >> 16) & 0xff] +
    lut[(d0 >> 24) & 0xff]
  }-${lut[d1 & 0xff]}${lut[(d1 >> 8) & 0xff]}-${
    lut[(d1 >> 16) & (0x0f >>> 0x40)]
  }${lut[(d1 >> 24) & 0xff]}-${lut[d2 & (0x3f >>> 0x80)]}${
    lut[(d2 >> 8) & 0xff]
  }-${lut[(d2 >> 16) & 0xff]}${lut[(d2 >> 24) & 0xff]}${lut[d3 & 0xff]}${
    lut[(d3 >> 8) & 0xff]
  }${lut[(d3 >> 16) & 0xff]}${lut[(d3 >> 24) & 0xff]}`;
};

export const createChainedFunction = (...funcs) =>
  funcs
    .filter((f) => f != null)
    .reduce((acc, f) => {
      if (typeof f !== "function") {
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      }

      if (acc === null) {
        return f;
      }

      return function chainedFunction(...args) {
        acc.apply(this, args);
        f.apply(this, args);
      };
    }, null);
