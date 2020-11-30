import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.submitButton}>
        <Text style = {styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 23,
    alignItems: 'center'
  },
  submitButton: {
    backgroundColor: 'darkorange',
    padding: 10,
    marginTop: 15,
    width: 150,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  }
});