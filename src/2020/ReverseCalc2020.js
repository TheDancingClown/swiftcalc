import ReverseCalc from '../ReverseCalc'
import TakeHomeCalc2020 from './TakeHomeCalc2020'


class ReverseCalc2020 extends ReverseCalc{

  constructor() {
    super()
    this.calc = new TakeHomeCalc2020()
  };
};

export default ReverseCalc2020;