class PayeCalc {

  constructor() {
    this.payeThresholds = {"PA": 12500, "basic": 50000};
    this.payeRates = {"basic": 0.20, "higher": 0.40};
    this.allowanceReducer = {"min": 100000, "max": 1250000};
  };

  paye(gross) {
    if(gross > this.payeThresholds["basic"]) {
      return this.aboveBasic(gross) + this.basicBandTax()
    } else if(gross > this.payeThresholds["PA"]) {
      return this.aboveAllowance(gross)
    } else {
      return 0
    };
  };

  basicBandTax() {
    return (this.payeThresholds["basic"] - this.payeThresholds["PA"]) * this.payeRates["basic"]
  };

  aboveAllowance(gross) {
    return (gross - this.payeThresholds["PA"]) * this.payeRates["basic"]
  };

  aboveBasic(gross) {
    return (gross - this.payeThresholds["basic"] + this.reducePersonalAllowance(gross)) * this.payeRates["higher"]
  };

  reducePersonalAllowance(gross) {
    if(gross > this.allowanceReducer["min"]) {
      var reducedAllowance = this.payeThresholds["PA"]
      for (i = this.allowanceReducer["min"]; i < gross; i += 2) {
        reducedAllowance --
      }
    }
    return (reducedAllowance > 0 ? this.payeThresholds["PA"] - reducedAllowance : 0); 
  };
};

export default PayeCalc;