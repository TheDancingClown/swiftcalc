import ReverseCalc2020 from '../src/2020/ReverseCalc2020'

const calc = new ReverseCalc2020()

it('returns salary under the personal allowance and NI threshold', () => {
  expect(calc.calculate(300)).toBe(3600);
});

it('has calclates salary based on basic rate deductions', () => {
  expect(calc.calculate(2000)).toBe(30095);
});

it('has calclates salary based on higher rate deductions', () => {
  expect(calc.calculate(5000)).toBe(88732);
});

it('has calclates salary based on personal allowance reduction', () => {
  expect(calc.calculate(9000)).toBe(182952);
});

it('has calclates salary based on additional rate reduction', () => {
  expect(calc.calculate(15000)).toBe(318801);
});