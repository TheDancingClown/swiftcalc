import TakeHomeCalc2020 from './2020/TakeHomeCalc2020'
import TakeHomeCalc2021 from './2021/TakeHomeCalc2021'
import ReverseCalc2020 from './2020/ReverseCalc2020'
import ReverseCalc2021 from './2021/ReverseCalc2021'


class Calculator {

  select(futureYear, netCalc) {
    var selection
    if(futureYear == false && netCalc == false){ 
      selection = new TakeHomeCalc2020()
    } else if(futureYear == false && netCalc == true){ 
      selection = new ReverseCalc2020()
    } else if(futureYear == true && netCalc == false) {
      selection = new TakeHomeCalc2021()
    } else if(futureYear == true && netCalc == true) {
      selection = new ReverseCalc2021()
    }
    return selection
  }
  
}

export default Calculator;
