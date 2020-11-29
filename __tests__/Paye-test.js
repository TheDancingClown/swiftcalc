const { clearUpdateCacheExperimentalAsync } = require("expo-updates");
const { interpolate } = require("react-native-reanimated");

import PayeCalc from '../src/PayeCalc'

const calc = new PayeCalc()

it('returns zero deduction under the personal allowance', () => {
  expect(calc.paye(5000)).toBe(0);
});

it('deducts tax at basic rate', () => {
  expect(calc.paye(25000)).toBe(2500)
})

it('deducts tax at higher rate', () => {
  expect(calc.paye(55000)).toBe(9500)
})

