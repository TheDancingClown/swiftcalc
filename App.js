import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import UserEntryField from './components/UserEntryField'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <UserEntryField />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#fff',
    
  },
});
