import React, { Component, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const UserEntryField = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput style = {styles.textInput} 
        onChangeText = {text => onChangeText(text)}
        value = {value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
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
});

export default UserEntryField;