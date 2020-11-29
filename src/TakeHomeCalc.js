const { default: Class1Calc } = require("./Class1Calc");
const { default: PayeCalc } = require("./PayeCalc");

class TakeHomeCalc {

  constructor() {
    this.payeCalc = new PayeCalc()
    this.class1Calc = new Class1Calc()
  };

  takeHome(gross) {
    return gross - this.class1Calc.class1NI(gross) + this.payeCalc.paye(gross)
  }

};

export default TakeHomeCalc;