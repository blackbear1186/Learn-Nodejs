import { expect } from "chai";
import { getPropertyWithDefault } from "./index";

// from mocha
describe("getPropertyWithDefault - basic functionality", () => {
  it("returns the correct value when the property exists", () => {
    const person = { name: 'Berlin Johnson', age: 34, hairColor: 'black'}
    const actual = getPropertyWithDefault(
      'name',
      'N/A', 
      person,
    )
    const expected = 'Berlin Johnson';
    expect(actual).to.equal(expected);
  });

  it('returns the specified default value when the property does not exist');
    const person = {}
    const actual = getPropertyWithDefault(
      'name',
      'N/A',
      person,
    )
    const expected = 'N/A';
    expect(actual).to.equal(expected);
});
