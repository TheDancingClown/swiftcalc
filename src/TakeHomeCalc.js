class TakeHomeCalc {

  constructor(payeCalc, class1Calc) {
    this.payeCalc = payeCalc
    this.class1Calc = class1Calc
  };

  takeHome(gross) {
    return gross - this.class1Calc.class1NI(gross) - this.payeCalc.paye(gross)
  }

};

export default TakeHomeCalc;