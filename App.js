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
  [isEnabled, setIsEnabled] = useState(false);

  const calc = new TakeHomeCalc2020();
  const performCalculation = (userInput) => {
    var calc
    isEnabled ? calc = new TakeHomeCalc2021() : calc = new TakeHomeCalc2020()
    return (calc.takeHome(userInput)).toLocaleString("en-GB", {style: 'currency', currency: 'GBP', minumumFractionDigits: 2})
  }

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  
  return (
    
    <View style={styles.container}>
      <Header />

      <TextInput style = {styles.textInput} 
        onChangeText = {text => onChangeText(text)}
        value = {userInput} />
      <Switch
        trackColor={{ true: "#767577", false: "#767577" }}
        thumbColor={isEnabled ? "darkorange" : "darkorange"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TouchableOpacity style={styles.submitButton} 
        onPress ={() => setCalculation(performCalculation(userInput))}>
          <Text style = {styles.submitButtonText}>{isEnabled ? 'Calculate 2020/21 Take Home Pay' : 'Calculate 2019/20 Take Home Pay'}</Text>
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
  }
});
