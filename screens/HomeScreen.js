import { StyleSheet, View, Text } from "react-native";

function HomeScreen (){
    return(
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    }
});