import ReverseCalc2020 from '../src/2020/ReverseCalc2020';
import TakeHomeCalc2020 from '../src/2020/TakeHomeCalc2020';
import ReverseCalc2021 from '../src/2021/ReverseCalc2021';
import TakeHomeCalc2021 from '../src/2021/TakeHomeCalc2021';
import Calculator from '../src/Calculator';

const calc = new Calculator();

it('returns the correct calculator', () => {
  expect(calc.select(true, true)).toBeInstanceOf(ReverseCalc2021)
})

it('returns the correct calculator', () => {
  expect(calc.select(true, false)).toBeInstanceOf(TakeHomeCalc2021)
})

it('returns the correct calculator', () => {
  expect(calc.select(false, true)).toBeInstanceOf(ReverseCalc2020)
})

it('returns the correct calculator', () => {
  expect(calc.select(false, false)).toBeInstanceOf(TakeHomeCalc2020)
})

