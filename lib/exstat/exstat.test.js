const assert = require("assert");
var { expect } = require("chai");
const exstat = require(".");

describe("exstat tests", function() {
  describe("> [exstat.array.normalize] normalize an array to a certain range", function() {
    const test = exstat.array.normalize([2, 3, 4, 5, 6], [0, 1]);

    it(`should return an array of numbers with correct upper and lower bounds`, function() {
      assert.equal(test[0], 0);
      assert.equal(test[test.length - 1], 1);
    });

    it("should throw an error if passed invalid arguments", function() {
      expect(() => exstat.array.normalize("1", null)).to.throw();
    });
  });

  describe("> [exstat.array.median] find the median of an array of numbers", function() {
    it("should throw an error if the array passed contains anything but numbers", function() {
      expect(() => exstat.array.median(["hello", 2, 3, "four", 5])).to.throw();
    });

    it("should return a single number for a given array", function() {
      assert.equal([exstat.array.median([1, 2, 3, 4, 5])].length, 1);
    });
  });

  describe("> [exstat.array.mean] find the mean of an array of numbers", function() {
    it("should throw an error if the array passed contains anything but numbers", function() {
      expect(() => exstat.array.mean(["hello", 2, 3, "four", 5])).to.throw();
    });

    it("should return a single number for a given array", function() {
      assert.equal([exstat.array.mean([1, 2, 3, 4, 5])].length, 1);
    });
  });

  describe("> [exstat.number.inRange] determine whether a number is within a certain range", function() {
    it("should return false if number is out of range", function() {
      assert.equal(exstat.number.inRange(-4, [0, 1]), false);
    });
    it("should return true if number is in range", function() {
      assert.equal(exstat.number.inRange(4, [0, 5]), true);
    });
  });
});
