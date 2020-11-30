import TakeHomeCalc from '../TakeHomeCalc';
import PayeCalc20201 from './PayeCalc2021'
import Class1Calc2021 from './Class1Calc2021';

class TakeHomeCalc2021 extends TakeHomeCalc {

  constructor() {
    super()
    this.payeCalc = new PayeCalc2021();
    this.class1Calc = new Class1Calc2021();
  };

  takeHome(gross) {
    return gross - this.class1Calc.class1NI(gross) - this.payeCalc.paye(gross);
  };
};

export default TakeHomeCalc2021;