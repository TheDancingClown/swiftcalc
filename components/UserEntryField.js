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
  },
  textInput: {
    textAlign: "center",
    margin: 15,
    marginLeft: 60,
    marginRight: 60,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
});

export default UserEntryField;