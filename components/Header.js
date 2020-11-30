import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>SwiftCalc</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'darkorange',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: "center",
  }
});