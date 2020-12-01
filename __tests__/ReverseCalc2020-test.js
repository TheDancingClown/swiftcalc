import ReverseCalc2020 from '../src/2020/ReverseCalc2020'

const calc = new ReverseCalc2020()

it('has no deduction under the personal allowance', () => {
  expect(calc.calculateSalaryFromMonthly(300)).toBe(3600);
});

it('has no deduction under the personal allowance', () => {
  expect(calc.calculateSalaryFromMonthly(2000)).toBe(30095);
});