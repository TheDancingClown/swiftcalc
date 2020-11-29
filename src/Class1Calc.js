class Class1Calc {

    constructor() {
      this.class1Thresholds = {"PT": 9500}
      this.class1Rates = {"primary": 0.12}
    }

    class1NI(gross) {
      if(gross > this.class1Thresholds["PT"]) {
        return (gross - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
      }
      return 0.00
    }

    
  

}

export default Class1Calc;