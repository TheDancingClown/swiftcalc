import Class1Calc from '../src/Class1Calc';

class Class1Calc2021 extends Class1Calc {

  constructor() {
    super()
    this.class1Thresholds = {"PT": 9500, "UEL": 50000}
    this.class1Rates = {"primary": 0.12, "upper": .02}
  }

}

export default Class1Calc2021;