/*


titleCase("A") should return "A"
*/

const assert = require("chai").assert;
const titleCase = require("../titleCase");

describe("titleCase", () => {
  it("should return 'This Is An Example'", () => {
    assert.strictEqual(titleCase('this is an example'), 'This Is An Example');
  });
  it("should return 'Test'", () => {
    assert.strictEqual(titleCase('test'), 'Test');
  });
  it("Should return 'I R Cool", () => {
    assert.strictEqual(titleCase('i r cool'), 'I R Cool');
  });
  it("Should return 'What Happens Here'", () => {
    assert.strictEqual(titleCase('WHAT HAPPENS HERE'), 'What Happens Here');
  });
  it("Should return ''", () => {
    assert.strictEqual(titleCase(''),'');
  });
  it("Should return 'A'", () => {
    assert.strictEqual(titleCase('A'),'A');
  });
});