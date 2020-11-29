const { clearUpdateCacheExperimentalAsync } = require("expo-updates");
const { interpolate } = require("react-native-reanimated");

import Class1Calc2020 from '../src/2020/Class1Calc2020';

const calc = new Class1Calc2020();

it('returns zero deduction under the threshold', () => {
  expect(calc.class1NI(5000)).toBe(0);
});

it('returns 12% deduction above the PT', () => {
  expect(calc.class1NI(10000)).toBe(164.16);
});

it('returns an additional 2% above the UEL', () => {
  expect(calc.class1NI(60000)).toBe(5164.16);
});

it('will not accept a negative value', () => {
  expect(calc.class1NI(-5000)).toBe("Enter a positive value");
});
