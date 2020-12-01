import TakeHomeCalc from './TakeHomeCalc'

class ReverseCalc {

  constructor(takeHomeCalc) {
    this.calc = takeHomeCalc;
  };

  calculate(net) {
    var gross = 0
    var comparison = 0
    while (comparison < net * 12) {
      gross ++
      comparison = this.calc.calculate(gross)
    }
    return gross
  };
};

export default ReverseCalc;