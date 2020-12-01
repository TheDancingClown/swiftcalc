import ReverseCalc from '../ReverseCalc'
import TakeHomeCalc2020 from './TakeHomeCalc2020'


class ReverseCalc2020 extends ReverseCalc{

  constructor() {
    super()
    this.calc = new TakeHomeCalc2020()
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

export default ReverseCalc2020;