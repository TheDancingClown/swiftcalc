class Class1Calc {

    constructor() {
      this.class1Thresholds = {"PT": 9500, "UEL": 50000}
      this.class1Rates = {"primary": 0.12, "upper": .02}
    }

    class1NI(gross) {
      if(gross > this.class1Thresholds["UEL"]) {
        var upper = (gross - this.class1Thresholds["UEL"]) * this.class1Rates["upper"]
        var primary = (this.class1Thresholds["UEL"] - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
        return(upper + primary)
      } else if(gross > this.class1Thresholds["PT"]) {
        return (gross - this.class1Thresholds["PT"]) * this.class1Rates["primary"]
      }
      return 0.00
    }

    
  

}

export default Class1Calc;