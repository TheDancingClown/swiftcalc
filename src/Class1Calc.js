class Class1Calc {

    constructor() {
      this.class1Thresholds = {};
      this.class1Rates = {};
    };

    class1NI(gross) {
      if(gross > this.class1Thresholds["UEL"]) {
        return(this._aboveUEL(gross) + this._primaryBandNI());
      } else if(gross > this.class1Thresholds["PT"]) {
        return this._abovePT(gross);
      } else if(gross > 0) {
        return 0;
      } else {
        return "Enter a positive value";
      };
    };

    _primaryBandNI() {
      return (this.class1Thresholds["UEL"] - this.class1Thresholds["PT"]) * this.class1Rates["primary"];
    };

    _aboveUEL(gross) {
      return (gross - this.class1Thresholds["UEL"]) * this.class1Rates["upper"];
    };

    _abovePT(gross) {
      return (gross - this.class1Thresholds["PT"]) * this.class1Rates["primary"];
    };
};

export default Class1Calc;