import React from "react";
import { StyleSheet, Text } from 'react-native';

const Header = (props) => {
    return(<Text style={styles.title} >{props.title}</Text>);   
};

const styles = StyleSheet.create({
    title: {
      color: 'black',
      fontSize: 24,
      fontWeight: '800',
      textAlign: 'left',
      paddingLeft: 20,
      margin: 8,
      maxWidth: '70%',
    },
});
  

export default Header;