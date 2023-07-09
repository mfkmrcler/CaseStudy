import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function DiagnoseScreen(){
    return(<View style={styles.container}>
        <Text>DiagnoseScreen</Text>
    </View>);

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DiagnoseScreen;