const exstat = {};

const string = {};
const array = {};
const number = {};

// array methods

/**
 * normalize - normalizes an array to a certain range, or the set [0, 1] by default
 *
 * @param {array}  set        set of numbers to normalize
 * @param {array} range range to normalize to
 *
 * @returns {array} normalized set of numbers
 */
const normalize = (set, range = [0, 1]) => {
  if (range.length > 2 || !Array.isArray(set) || !Array.isArray(range))
    throw new Error("invalid arguments to normalize");

  const min = Math.min(...set);
  let newSet = set.map(n => n - min);
  const max = Math.max(...newSet);
  newSet = newSet.map(n => n / max);

  // newSet is now in range [0, 1]

  let newRange = range[1] - range[0];
  let initial = range[0];

  // normalized = (array * new range) + range[0];

  return newSet.map(n => n * newRange + initial);
};

/**
 * median - finds the median of an array
 *
 * @param {array} arr array of numbers
 *
 * @returns {number} the median of the array of numbers
 */
const median = arr => {
  if (!arr.every(n => typeof n == "number"))
    throw new Error("invalid argument to median");

  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

/**
 * mean - finds the median of an array
 *
 * @param {array} arr array of numbers
 *
 * @returns {number} the median of the array
 */
const mean = arr => {
  if (!arr.every(n => typeof n == "number"))
    throw new Error("invalid argument to mean");

  const n = arr.length / arr[0];
  let sum = 0;

  for (let i = 0; i < n; i++) sum += arr[i];

  return sum / n;
};

// string methods

/**
 * toUTF8Array - converts a string to a byte array
 *
 * @param {string} str string to be converted
 *
 * @returns {array} byte array
 */
const toUTF8Array = str => {
  if (typeof str != "string") throw new Error("invalid input to toUTF8Array");

  let utf8 = [];

  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);

    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode > 0x80) {
      utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(
        0xe0 | (charcode >> 12),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f)
      );
    } else {
      i++;
      charcode =
        0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));

      utf8.push(
        0xf0 | (charcode >> 18),
        0x80 | ((charcode >> 12) & 0x3f),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f)
      );
    }
  }

  return utf8;
};

/**
 * binAdd - add two string representations of binary numbers
 *
 * @param {string} str1 first binary string
 * @param {string} str2 second binary string
 *
 * @returns {string} binary representation of the result of the operation
 */
const binAdd = (str1, str2) => {
  if (typeof str1 != "string" || typeof str2 != "string")
    throw new Error("invalid input to binAdd");

  const num1 = parseInt(str1, 2);
  const num2 = parseInt(str2, 2);

  let sum = (num1 + num2).toString(2);
  let len = str1.length;

  while (sum.length < len) sum = "0" + sum;

  return sum.length === length ? "1" + sum : sum;
};

/**
 * binToInt - convert binary number to integer
 *
 * @param {string} bin string representation of binary number
 *
 * @returns {number} interger result of binary string
 */
const binToInt = bin => {
  if (typeof bin != "string") throw new Error("invalid input to binToInt");
  parseInt(bin, 2);
};

/**
 * trunc - truncate a string to a certain length
 *
 * @param {string} str string to be truncated
 * @param {number} len length to truncate to
 *
 * @returns {string} truncated string
 */
const trunc = (str, len) => {
  if (typeof str != "string" || typeof len != "number")
    throw new Error("invalid input to trunc");

  while (str.length > len) str = str.slice(1);
  return str;
};

/**
 * binToHex - convert binary number to hex number
 *
 * @param {string} str binary number to convert
 *
 * @returns {string} hexadecimal number from the result of conversion
 */
const binToHex = str => {
  if (typeof str != "string") throw new Error("invalid input to binToHex");

  let dec = parseInt(str, 2);
  if (dec == NaN) throw new Error("invalid input to binToHex");
  return dec.toString(16);
};

// number methods

/**
 * inRange - determine wether a number is within a certain range
 *
 * @param {number} num   the number to check
 * @param {array} range the range that num should be within
 *
 * @returns {boolean} returns true if number is in range, false if not.
 */
const inRange = (num, range) => {
  if (typeof num != "number" || !Array.isArray(range))
    throw new Error("invalid argument passed to inRange");

  return range[0] <= num ? (range[1] >= num ? true : false) : false;
};

/**
 * mod - finds the remainder after division of one number by another
 *
 * @param {number} a number to perform modulo operation on
 * @param {number} b number to perform modulo operation on
 *
 * @returns {number} result of operation
 */
const mod = (a, b) => {
  if (typeof a != "number" || typeof b != "number")
    throw new Error("invalid input to mod");

  return ((a % b) + b) % b;
};

/**
 * padZero - pad a number with zeros
 *
 * @param {number} num number to pad
 * @param {number} len final length of resulting string
 *
 * @returns {string} string resulting from padding of number with zeros
 */
const padZero = (num, len) => {
  if (typeof num != "number" || typeof len != "number")
    throw new Error("invalid input to padZero");

  let arr = num.toString().split("");
  if (len <= arr.length) throw new Error("zero padding failed");

  while (arr.length < len) arr.unshift("0");

  return arr.join("");
};

exstat.array = {
  normalize: normalize,
  median: median,
  mean: mean
};

exstat.string = {
  toUTF8Array: toUTF8Array,
  binAdd: binAdd,
  binToInt: binToInt,
  trunc: trunc,
  binToHex: binToHex
};

exstat.number = {
  mod: mod,
  padZero: padZero,
  inRange: inRange
};

module.exports = exstat;
