class Class1Calc {

    constructor() {
      this.class1Thresholds = {"PT": 9500, "UEL": 50000}
      this.class1Rates = {"primary": 0.12, "upper": .02}
    }

    class1NI(gross) {
      if(gross > this.class1Thresholds["UEL"]) {
        return(this._aboveUEL(gross) + this._primaryBandNI())
      } else if(gross > this.class1Thresholds["PT"]) {
        return this._abovePT(gross)
      } else if(gross > 0) {
        return 0
      } else {
        return "Enter a positive value"
      }
    }

    _primaryBandNI() {
      return (this.class1Thresholds["UEL"] - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
    }

    _aboveUEL(gross) {
      return (gross - this.class1Thresholds["UEL"]) * this.class1Rates["upper"]
    }

    _abovePT(gross) {
      return (gross - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
    }

}

export default Class1Calc;