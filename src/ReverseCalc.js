import TakeHomeCalc from './TakeHomeCalc'

class ReverseCalc {

  constructor(takeHomeCalc) {
    this.calc = takeHomeCalc;
  };

  calculateSalaryFromMonthly(net) {
    var gross = 0
    var comparison = 0
    while (comparison < net * 12) {
      gross ++
      comparison = this.calc.takeHome(gross)
    }
    return gross
  };
};

export default ReverseCalc;