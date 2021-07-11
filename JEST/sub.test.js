const { expect } = require("@jest/globals");
const sub = require("./sub");
test("should Substract", () => {
  expect(sub(3, 4)).toEqual(-1);
});
