import React from "react";
import { StyleSheet, Text, Linking } from 'react-native';

const BottomNote = (props) => {
  return (
    <Text style={styles.bottomNote}>{props.bottomNote}</Text>
  );
};

const styles = StyleSheet.create({
  bottomNote: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '400',
    paddingHorizontal: 20,
    margin: 8,
    textAlign: 'center',
  },
});

export default BottomNote;
