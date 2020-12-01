import ReverseCalc2021 from '../src/2021/ReverseCalc2021'

const calc = new ReverseCalc2021()

it('returns salary under the personal allowance and NI threshold', () => {
  expect(calc.calculateSalaryFromMonthly(300)).toBe(3600);
});

it('has calclates salary based on basic rate deductions', () => {
  expect(calc.calculateSalaryFromMonthly(2000)).toBe(29942);
});

it('has calclates salary based on higher rate deductions', () => {
  expect(calc.calculateSalaryFromMonthly(5000)).toBe(88552);
});

it('has calclates salary based on personal allowance reduction', () => {
  expect(calc.calculateSalaryFromMonthly(9000)).toBe(182755);
});

it('has calclates salary based on additional rate reduction', () => {
  expect(calc.calculateSalaryFromMonthly(15000)).toBe(318604);
});