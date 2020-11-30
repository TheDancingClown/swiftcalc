import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/Header'
import UserEntryField from './components/UserEntryField'
import CalculateBtn from './components/CalculateBtn'
import ResultsDisplay from './components/ResultsDisplay'
import TakeHomeCalc2020 from './src/2020/TakeHomeCalc2020'
import TakeHomeCalc2021 from './src/2021/TakeHomeCalc2021'

export default function App() {
  const [calculation, setCalculation] = useState(0);
  const [userInput, onChangeText] = useState('');
  const calc = new TakeHomeCalc2020();
  const performCalculation = (userInput) => {
    return calc.takeHome(userInput)
  }

  
  return (
    <View style={styles.container}>
      <Header />
      <TextInput style = {styles.textInput} 
        onChangeText = {text => onChangeText(text)}
        value = {userInput} />
      <button onClick ={() => setCalculation(performCalculation(userInput))}>
        Calculate
      </button>
      <Text>{calculation}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#fff',
  },
  textInput: {
    textAlign: "center",
    margin: 15,
    width: 200,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});
