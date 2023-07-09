import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';


function UpgradePremium(props){
    return(<TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Image
            style={styles.icon}
            source={require("../assets/email.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>FREE Premium Available!</Text>
            <Text style={styles.text}>Tap to upgrade your account!</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../assets/arrow.png")}
          />
        </TouchableOpacity>);
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 20,
      backgroundColor: '#24201A',
    },
    textContainer:{
        flexDirection: 'column',
    },
    text:{
        color: '#E5C990',
    },
    icon: {
      width: 20,
      height: 20,
    }, 
         
  });

export default UpgradePremium;