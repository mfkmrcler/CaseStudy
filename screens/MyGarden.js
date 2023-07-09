import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function MyGardenScreen(){
    return(
    <View style={styles.container}>
        <Text>MyGardenScreen</Text>
    </View>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MyGardenScreen;