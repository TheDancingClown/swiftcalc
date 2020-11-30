import TakeHomeCalc2020 from './2020/TakeHomeCalc2020'
import TakeHomeCalc2021 from './2021/TakeHomeCalc2021'


class Calculator {
  constructor(userInput, taxYear) {
    this.userInput = userInput;
    this.taxYear = taxYear;
  }

  displayResult(year = this.taxYear) {
    const calc = this._selectCalc(this.taxYear)
    return calc.takeHome(this.userInput)
  }

  _selectCalc(year) {
    if(year == '2020') {
      return new TakeHomeCalc2020()
    } 
  }
}

export default Calculator;
