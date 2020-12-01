import TakeHomeCalc from '../TakeHomeCalc';
import PayeCalc2020 from './PayeCalc2020'
import Class1Calc2020 from './Class1Calc2020';

class TakeHomeCalc2020 extends TakeHomeCalc {

  constructor() {
    super()
    this.payeCalc = new PayeCalc2020();
    this.class1Calc = new Class1Calc2020();
  };
};

export default TakeHomeCalc2020;