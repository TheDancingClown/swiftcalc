import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch } from 'react-native';
import Header from './components/Header'
import UserEntryField from './components/UserEntryField'
import CalculateBtn from './components/CalculateBtn'
import ResultsDisplay from './components/ResultsDisplay'
import TakeHomeCalc2020 from './src/2020/TakeHomeCalc2020'
import TakeHomeCalc2021 from './src/2021/TakeHomeCalc2021'

export default function App() {
  const [calculation, setCalculation] = useState(''), 
  [userInput, onChangeText] = useState(''),
  [isNetCalc, setIsNetCalc] = useState(false),
  [isFuture, setIsFuture] = useState(false);
  
  const performCalculation = (userInput, year, calculator) => {
    var calc = new Calculator(isFuture, isNetCalc)
    return (calc.takeHome(userInput)).toLocaleString("en-GB", {style: 'currency', currency: 'GBP', minumumFractionDigits: 2})
  }

  const toggleCalc = () => setIsNetCalc(previousState => !previousState),
  toggleYear = () => setIsFuture(previousState => !previousState),
  taxYear = isFuture ? '2020/21' : '2019/20',
  calculatorName = isNetCalc ? 'Salary Calculator' : 'Take Home Calculator',
  entryInstructions = isNetCalc ? 'Enter a monthly take home figure' : 'Enter an annual salary figure';

  return (
    
    <View style={styles.container}>
      <Header />
      <Text styles = {styles.textInput}>Toggle to change the calculator</Text>
      <Switch
        trackColor={{ true: "#767577", false: "#767577" }}
        thumbColor={isNetCalc ? "darkorange" : "darkorange"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleCalc}
        value={isNetCalc}
      />
      <Text style = {styles.displayResults}>{calculatorName}</Text>
      <Text styles = {styles.textInput}>{entryInstructions}</Text>
      <TextInput style = {styles.textInput} 
        onChangeText = {text => onChangeText(text)}
        value = {userInput} />
      <Text styles = {styles.textInput}>Select the tax year</Text>
      <Switch
        trackColor={{ true: "#767577", false: "#767577" }}
        thumbColor={isFuture ? "darkorange" : "darkorange"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleYear}
        value={isFuture}
      />
      <Text style = {styles.displayResults}>{taxYear}</Text>
      
      
      <TouchableOpacity style={styles.submitButton} 
        onPress ={() => setCalculation(performCalculation(userInput))}>
          <Text style = {styles.submitButtonText}>Calculate</Text>
      </TouchableOpacity>
      <Text style = {styles.displayResults} >{calculation}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    textAlign: "center",
    margin: 15,
    width: 200,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  displayResults: {
    textAlign: "center",
    margin: 15,
    fontSize: 30,
  },
  submitButton: {
    backgroundColor: 'darkorange',
    padding: 10,
    marginTop: 15,
    width: 150,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
