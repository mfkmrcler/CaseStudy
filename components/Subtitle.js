import React from "react";
import { StyleSheet, Text } from 'react-native';

const Subtitle = (props) => {
    return(<Text style={[styles.subtitle, { color: props.color }]}>{props.subtitle}</Text>);   
};

const styles = StyleSheet.create({
    subtitle: {
      fontSize: 18,
      fontWeight: '400',
      paddingHorizontal: 20,
      margin: 8,
      textAlign: 'left',
    },
});
  

export default Subtitle;