class PayeCalc {

  paye(gross) {
    if(gross>50000) {
      var higher = (gross - 50000) * 0.4
      var basic = (50000-12500) * 0.2
      return higher + basic
    }
    if(gross>12500) {
      return (gross-12500) * 0.2
    } else {
      return 0
    }
  }


}

export default PayeCalc;