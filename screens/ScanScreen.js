import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function ScanScreen(){
    return(<View style={styles.container}>
        <Text>ScanScreen</Text>
    </View>);

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ScanScreen;