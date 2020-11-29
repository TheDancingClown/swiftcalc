import Class1Calc from '../Class1Calc';

class Class1Calc2020 extends Class1Calc {

  constructor() {
    super()
    this.class1Thresholds = {"PT": 8632, "UEL": 50000}
    this.class1Rates = {"primary": 0.12, "upper": .02}
  };
};

export default Class1Calc2020;