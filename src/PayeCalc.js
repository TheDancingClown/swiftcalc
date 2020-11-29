class PayeCalc {

  constructor() {
    this.payeThresholds = {"PA": 12500, "basic": 50000, "higher": 150000};
    this.payeRates = {"basic": 0.20, "higher": 0.40, "additional": 0.45};
    this.allowanceReducer = {"min": 100000, "max": 1250000};
  };

  paye(gross) {
    if(gross > this.payeThresholds["higher"]) {
      return this._aboveHigher(gross) + this._higherBandTax()
    } else if(gross > this.payeThresholds["basic"]) {
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

  _higherBandTax() {
    var higherBandTax = (this.payeThresholds["higher"] - this.payeThresholds["basic"] + this.payeThresholds["PA"]) * this.payeRates["higher"]
    return higherBandTax + this._basicBandTax()
  }

  _aboveAllowance(gross) {
    return (gross - this.payeThresholds["PA"]) * this.payeRates["basic"]
  };

  _aboveBasic(gross) {
    return (gross - this.payeThresholds["basic"] + this._reducePersonalAllowance(gross)) * this.payeRates["higher"]
  };

  _aboveHigher(gross) {
    return (gross - this.payeThresholds["higher"]) * this.payeRates["additional"]
  }

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