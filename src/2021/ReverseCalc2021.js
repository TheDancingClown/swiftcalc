import ReverseCalc from '../ReverseCalc'
import TakeHomeCalc2021 from './TakeHomeCalc2021'


class ReverseCalc2021 extends ReverseCalc{

  constructor() {
    super()
    this.calc = new TakeHomeCalc2021()
  };
};

export default ReverseCalc2021;