import TakeHomeCalc from '../src/TakeHomeCalc'
import PayeCalc2021 from '../src/2021/PayeCalc2021'
import Class1Calc2021 from '../src/2021/Class1Calc2021';

const nICalc = new Class1Calc2021(), 
payeCalc = new PayeCalc2021(), 
calc = new TakeHomeCalc(payeCalc, nICalc)

it('has no deduction under the personal allowance', () => {
  expect(calc.takeHome(5000)).toBe(5000);
});

it('deducts basic rates of tax and NI', () => {
  expect(calc.takeHome(25000)).toBe(20640)
})

it('deducts higher rates of tax and NI', () => {
  expect(calc.takeHome(75000)).toBe(52140)
})

it('reduces the allowance and deducts tax and NI', () => {
  expect(calc.takeHome(110000)).toBe(70440)
})

it('eliminates the allowance and deducts tax and NI', () => {
  expect(calc.takeHome(175000)).toBe(103890)
})