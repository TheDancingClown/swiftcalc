class PayeCalc {

  constructor() {
    this.payeThresholds = {"PA": 12500, "basic": 50000}
    this.payeRates = {"basic": 0.20, "higher": 0.40}
  }

  paye(gross) {
    if(gross > this.payeThresholds["basic"]) {
      return this.aboveBasic(gross) + this.basicBandTax()
    } else if(gross > this.payeThresholds["PA"]) {
      return this.aboveAllowance(gross)
    } else {
      return 0
    }
  }

  basicBandTax() {
    return (this.payeThresholds["basic"] - this.payeThresholds["PA"]) * this.payeRates["basic"]
  }

  aboveAllowance(gross) {
    return (gross - this.payeThresholds["PA"]) * this.payeRates["basic"]
  }

  aboveBasic(gross) {
    return (gross - this.payeThresholds["basic"]) * this.payeRates["higher"]
  }


}

export default PayeCalc;