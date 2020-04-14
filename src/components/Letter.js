import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { COLORS } from '../themes';

// function Letter (initialValue) {
//   const [value, setValue] = useState(initialValue);
//   console.log(value.initialValue)
//   return value.initialValue;
// }

const Letter = ({ original, value }) => (
  <Text className={styles.text}>{ value }</Text>
)

const styles = StyleSheet.create({
  text: {
    color: COLORS.red.hexCode
  }
});

export default Letter;