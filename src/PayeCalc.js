class PayeCalc {

  constructor() {
    this.payeThresholds = {};
    this.payeRates = {};
    this.allowanceReducer = {};
  };

  paye(gross) {
    if(gross > this.payeThresholds["higher"]) {
      return this._aboveHigher(gross) + this._higherBandTax();
    } else if(gross > this.payeThresholds["basic"]) {
      return this._aboveBasic(gross) + this._basicBandTax();
    } else if(gross > this.payeThresholds["PA"]) {
      return this._aboveAllowance(gross);
    } else if(gross > 0) {
      return 0;
    } else {
      return "Enter a positive value";
    };
  };

  _basicBandTax() {
    return (this.payeThresholds["basic"] - this.payeThresholds["PA"]) * this.payeRates["basic"];
  };

  _higherBandTax() {
    var higherBandTax = (this.payeThresholds["higher"] - this.payeThresholds["basic"] + this.payeThresholds["PA"]) * this.payeRates["higher"];
    return higherBandTax + this._basicBandTax();
  };

  _aboveAllowance(gross) {
    return (gross - this.payeThresholds["PA"]) * this.payeRates["basic"];
  };

  _aboveBasic(gross) {
    return (gross - this.payeThresholds["basic"] + this._reducePersonalAllowance(gross)) * this.payeRates["higher"];
  };

  _aboveHigher(gross) {
    return (gross - this.payeThresholds["higher"]) * this.payeRates["additional"];
  };

  _reducePersonalAllowance(gross) {
    if(gross > this.allowanceReducer["min"]) {
      var reducedAllowance = this.payeThresholds["PA"];
      for (i = this.allowanceReducer["min"]; i < gross; i += 2) {
        reducedAllowance --;
      };
      return (reducedAllowance > 0 ? this.payeThresholds["PA"] - reducedAllowance : this.payeThresholds["PA"]); 
    } else {
    return 0
    };
  };
};

export default PayeCalc;