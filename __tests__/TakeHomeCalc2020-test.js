import TakeHomeCalc from '../src/TakeHomeCalc'
import PayeCalc2020 from '../src/2020/PayeCalc2020'
import Class1Calc2020 from '../src/2020/Class1Calc2020';

const nICalc = new Class1Calc2020(), 
payeCalc = new PayeCalc2020(), 
calc = new TakeHomeCalc(payeCalc, nICalc)

it('has no deduction under the personal allowance', () => {
  expect(calc.takeHome(5000)).toBe(5000);
});

it('deducts basic rates of tax and NI', () => {
  expect(calc.takeHome(25000)).toBe(20535.84)
})

it('deducts higher rates of tax and NI', () => {
  expect(calc.takeHome(75000)).toBe(52035.84)
})

it('reduces the allowance and deducts tax and NI', () => {
  expect(calc.takeHome(110000)).toBe(70335.84)
})

it('eliminates the allowance and deducts tax and NI', () => {
  expect(calc.takeHome(175000)).toBe(103785.84)
})