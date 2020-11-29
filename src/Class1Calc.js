class Class1Calc {

    constructor() {
      this.class1Thresholds = {"PT": 9500, "UEL": 50000}
      this.class1Rates = {"primary": 0.12, "upper": .02}
    }

    class1NI(gross) {
      if(gross > this.class1Thresholds["UEL"]) {
        return(this.aboveUEL(gross) + this.primaryBandNI())
      } else if(gross > this.class1Thresholds["PT"]) {
        return this.abovePT(gross)
      } else {
      return 0.00
      }
    }

    primaryBandNI() {
      return (this.class1Thresholds["UEL"] - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
    }

    aboveUEL(gross) {
      return (gross - this.class1Thresholds["UEL"]) * this.class1Rates["upper"]
    }

    abovePT(gross) {
      return (gross - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
    }

}

export default Class1Calc;