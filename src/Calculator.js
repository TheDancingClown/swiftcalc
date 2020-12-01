import TakeHomeCalc2020 from './2020/TakeHomeCalc2020'
import TakeHomeCalc2021 from './2021/TakeHomeCalc2021'
import ReverseCalc2020 from './2020/ReverseCalc2020'
import ReverseCalc2021 from './2021/ReverseCalc2021'


class Calculator {

  select(currentYear, netCalc) {
    var selection
    if(currentYear == true && netCalc == true){ 
      selection = new TakeHomeCalc2020()
    } else if(currentYear == true && netCalc == false){ 
      selection = new ReverseCalc2020()
    } else if(currentYear == false && netCalc == true) {
      selection = new TakeHomeCalc2021()
    } else if(currentYear == false && netCalc == false) {
      selection = new ReverseCalc2021()
    }
    return selection
  }
  
}

export default Calculator;
