import PayeCalc from '../PayeCalc';

class PayeCalc2021 extends PayeCalc{

  constructor() {
    super()
    this.payeThresholds = {"PA": 12500, "basic": 50000, "higher": 150000};
    this.payeRates = {"basic": 0.20, "higher": 0.40, "additional": 0.45};
    this.allowanceReducer = {"min": 100000, "max": 1250000};
  };
};

export default PayeCalc2021;