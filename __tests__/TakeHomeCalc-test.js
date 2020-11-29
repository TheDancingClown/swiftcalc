import TakeHomeCalc from '../src/TakeHomeCalc'

const calc = new TakeHomeCalc()

it('has no deduction under the personal allowance', () => {
  expect(calc.takeHome(5000)).toBe(5000);
});