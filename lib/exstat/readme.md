## exstat

this is a collection of utility functions that I'm currently working on. I've been using them to work on a cryptography library, so that's what they're geared toward.

### usage
`npm i exstat`
and then
`const exstat = require("exstat")`.
exstat has three groups of functions (`exstat.array`, `exstat.string`, and `exstat.number`), named for the type of input they take. example:

```
const { array: a, string: s, number: n } = require("exstat");

a.normalize([2, 3, 4, 5, 6], [0, 1])
// returns [ 0, 0.25, 0.5, 0.75, 1 ]

n.inRange(0.5, [0, 1])
// returns true
```

detailed information is below.

## functions

<dl>
<dt><a href="#normalize">normalize(set, range)</a> ⇒ <code>array</code></dt>
<dd><p>normalize - normalizes an array to a certain range, or the set [0, 1] by default</p>
</dd>
<dt><a href="#median">median(arr)</a> ⇒ <code>number</code></dt>
<dd><p>median - finds the median of an array</p>
</dd>
<dt><a href="#mean">mean(arr)</a> ⇒ <code>number</code></dt>
<dd><p>mean - finds the median of an array</p>
</dd>
<dt><a href="#toUTF8Array">toUTF8Array(str)</a> ⇒ <code>array</code></dt>
<dd><p>toUTF8Array - converts a string to a byte array</p>
</dd>
<dt><a href="#binAdd">binAdd(str1, str2)</a> ⇒ <code>string</code></dt>
<dd><p>binAdd - add two string representations of binary numbers</p>
</dd>
<dt><a href="#binToInt">binToInt(bin)</a> ⇒ <code>number</code></dt>
<dd><p>binToInt - convert binary number to integer</p>
</dd>
<dt><a href="#trunc">trunc(str, len)</a> ⇒ <code>string</code></dt>
<dd><p>trunc - truncate a string to a certain length</p>
</dd>
<dt><a href="#binToHex">binToHex(str)</a> ⇒ <code>string</code></dt>
<dd><p>binToHex - convert binary number to hex number</p>
</dd>
<dt><a href="#inRange">inRange(num, range)</a> ⇒ <code>boolean</code></dt>
<dd><p>inRange - determine wether a number is within a certain range</p>
</dd>
<dt><a href="#mod">mod(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>mod - finds the remainder after division of one number by another</p>
</dd>
<dt><a href="#padZero">padZero(num, len)</a> ⇒ <code>string</code></dt>
<dd><p>padZero - pad a number with zeros</p>
</dd>
</dl>

<a name="normalize"></a>

## normalize(set, range) ⇒ <code>array</code>
normalize - normalizes an array to a certain range, or the set [0, 1] by default

**kind**: global function
**returns**: <code>array</code> - normalized set of numbers

| param | type | description |
| --- | --- | --- |
| set | <code>array</code> | set of numbers to normalize |
| range | <code>array</code> | range to normalize to |

<a name="median"></a>

## median(arr) ⇒ <code>number</code>
median - finds the median of an array

**kind**: global function
**returns**: <code>number</code> - the median of the array of numbers

| param | type | description |
| --- | --- | --- |
| arr | <code>array</code> | array of numbers |

<a name="mean"></a>

## mean(arr) ⇒ <code>number</code>
mean - finds the median of an array

**kind**: global function
**returns**: <code>number</code> - the median of the array

| param | type | description |
| --- | --- | --- |
| arr | <code>array</code> | array of numbers |

<a name="toUTF8Array"></a>

## toUTF8Array(str) ⇒ <code>array</code>
toUTF8Array - converts a string to a byte array

**kind**: global function
**returns**: <code>array</code> - byte array

| param | type | description |
| --- | --- | --- |
| str | <code>string</code> | string to be converted |

<a name="binAdd"></a>

## binAdd(str1, str2) ⇒ <code>string</code>
binAdd - add two string representations of binary numbers

**kind**: global function
**returns**: <code>string</code> - binary representation of the result of the operation

| param | type | description |
| --- | --- | --- |
| str1 | <code>string</code> | first binary string |
| str2 | <code>string</code> | second binary string |

<a name="binToInt"></a>

## binToInt(bin) ⇒ <code>number</code>
binToInt - convert binary number to integer

**kind**: global function
**returns**: <code>number</code> - interger result of binary string

| param | type | description |
| --- | --- | --- |
| bin | <code>string</code> | string representation of binary number |

<a name="trunc"></a>

## trunc(str, len) ⇒ <code>string</code>
trunc - truncate a string to a certain length

**kind**: global function
**returns**: <code>string</code> - truncated string

| param | type | description |
| --- | --- | --- |
| str | <code>string</code> | string to be truncated |
| len | <code>number</code> | length to truncate to |

<a name="binToHex"></a>

## binToHex(str) ⇒ <code>string</code>
binToHex - convert binary number to hex number

**kind**: global function
**returns**: <code>string</code> - hexadecimal number from the result of conversion

| param | type | description |
| --- | --- | --- |
| str | <code>string</code> | binary number to convert |

<a name="inRange"></a>

## inRange(num, range) ⇒ <code>boolean</code>
inRange - determine wether a number is within a certain range

**kind**: global function
**returns**: <code>boolean</code> - returns true if number is in range, false if not.

| param | type | description |
| --- | --- | --- |
| num | <code>number</code> | the number to check |
| range | <code>array</code> | the range that num should be within |

<a name="mod"></a>

## mod(a, b) ⇒ <code>number</code>
mod - finds the remainder after division of one number by another

**kind**: global function
**returns**: <code>number</code> - result of operation

| param | type | description |
| --- | --- | --- |
| a | <code>number</code> | number to perform modulo operation on |
| b | <code>number</code> | number to perform modulo operation on |

<a name="padZero"></a>

## padZero(num, len) ⇒ <code>string</code>
padZero - pad a number with zeros

**kind**: global function
**returns**: <code>string</code> - string resulting from padding of number with zeros

| param | type | description |
| --- | --- | --- |
| num | <code>number</code> | number to pad |
| len | <code>number</code> | final length of resulting string |
