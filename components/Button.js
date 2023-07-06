import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    return(
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>{props.buttonTitle}</Text>
        </View>
    </TouchableOpacity>);
};

styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 18,
        paddingVertical: 8,
    },
    buttonTitle: {
        color: 'white',
        padding: 12,
        fontWeight: 'bold',
    }
});


export default Button;