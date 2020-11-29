const { clearUpdateCacheExperimentalAsync } = require("expo-updates");
const { interpolate } = require("react-native-reanimated");

import Class1Calc from '../src/Class1Calc'

const calc = new Class1Calc()

it('returns zero deduction under the threshold', () => {
  expect(calc.class1NI(5000)).toBe(0);
});

it('returns 12% deduction above the PT', () => {
  expect(calc.class1NI(10000)).toBe(60)
});

it('returns an additional 2% above the UEL', () => {
  expect(calc.class1NI(60000)).toBe(5060)
})

it('returns the NI for the primary band', () => {
  expect(calc.primaryBandNI()).toBe(4860)
})

it('will not accept a negative value', () => {
  expect(calc.class1NI(-5000)).toBe("Enter a positive value")
})
