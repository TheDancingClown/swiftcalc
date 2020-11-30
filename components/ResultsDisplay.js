import React, { Component, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ResultsDisplay = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>£40,000</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    alignItems: 'center',
  },
  text: {
    textAlign: "center",
    margin: 15,
    fontSize: 30,
  },
});

export default ResultsDisplay;