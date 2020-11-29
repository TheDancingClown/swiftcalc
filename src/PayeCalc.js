class PayeCalc {

  constructor() {
    this.payeThresholds = {"PA": 12500, "basic": 50000};
    this.payeRates = {"basic": 0.20, "higher": 0.40};
    this.allowanceReducer = {"min": 100000, "max": 1250000};
  };

  paye(gross) {
    if(gross > this.payeThresholds["basic"]) {
      return this._aboveBasic(gross) + this._basicBandTax()
    } else if(gross > this.payeThresholds["PA"]) {
      return this._aboveAllowance(gross)
    } else {
      return 0
    };
  };

  _basicBandTax() {
    return (this.payeThresholds["basic"] - this.payeThresholds["PA"]) * this.payeRates["basic"]
  };

  _aboveAllowance(gross) {
    return (gross - this.payeThresholds["PA"]) * this.payeRates["basic"]
  };

  _aboveBasic(gross) {
    return (gross - this.payeThresholds["basic"] + this._reducePersonalAllowance(gross)) * this.payeRates["higher"]
  };

  _reducePersonalAllowance(gross) {
    if(gross > this.allowanceReducer["min"]) {
      var reducedAllowance = this.payeThresholds["PA"]
      for (i = this.allowanceReducer["min"]; i < gross; i += 2) {
        reducedAllowance --
      }
      return (reducedAllowance > 0 ? this.payeThresholds["PA"] - reducedAllowance : this.payeThresholds["PA"]); 
    } else {
    return 0
    }
  };
};

export default PayeCalc;