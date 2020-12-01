import TakeHomeCalc from '../TakeHomeCalc';
import PayeCalc2021 from './PayeCalc2021'
import Class1Calc2021 from './Class1Calc2021';

class TakeHomeCalc2021 extends TakeHomeCalc {

  constructor() {
    super()
    this.payeCalc = new PayeCalc2021();
    this.class1Calc = new Class1Calc2021();
  };
};

export default TakeHomeCalc2021;