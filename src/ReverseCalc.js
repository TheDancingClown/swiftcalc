import TakeHomeCalc from './TakeHomeCalc'

class ReverseCalc {

  constructor(takeHomeCalc) {
    this.calc = takeHomeCalc;
  };

  calculate(net) {
    var gross = net * 11
    var comparison = 0
    //try to find a better way to do this. Slow on high salaries
    while (comparison < net * 12) {
      gross ++
      comparison = this.calc.calculate(gross)
    }
    return gross
  };
};

export default ReverseCalc;