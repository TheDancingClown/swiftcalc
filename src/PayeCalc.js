class PayeCalc {

  paye(gross) {
    if(gross>12500) {
      return (gross-12500) * 0.2
    } else {
      return 0
    }
  }


}

export default PayeCalc;