const { clearUpdateCacheExperimentalAsync } = require("expo-updates");
const { interpolate } = require("react-native-reanimated");

import Class1Calc from '../src/Class1Calc'

const calc = new Class1Calc()

it('returns zero deduction under the threshold', () => {
  expect(calc.class1NI()).toBe(0.00);
});