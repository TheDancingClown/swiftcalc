import TakeHomeCalc2020 from '../src/2020/TakeHomeCalc2020'

const calc = new TakeHomeCalc2020()

it('has no deduction under the personal allowance', () => {
  expect(calc.calculate(5000)).toBe(5000);
});

it('deducts basic rates of tax and NI', () => {
  expect(calc.calculate(25000)).toBe(20535.84)
})

it('deducts higher rates of tax and NI', () => {
  expect(calc.calculate(75000)).toBe(52035.84)
})

it('reduces the allowance and deducts tax and NI', () => {
  expect(calc.calculate(110000)).toBe(70335.84)
})

it('eliminates the allowance and deducts tax and NI', () => {
  expect(calc.calculate(175000)).toBe(103785.84)
})