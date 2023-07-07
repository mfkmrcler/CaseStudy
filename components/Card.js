import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({item}) => {
    return(
        <View style={styles.container} key={item.id}>
            <View style={styles.imgcontainer}>
                <Image source={item.image} style={styles.img}/>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#223028",
        padding: 5,
        margin:10,
        borderRadius: 8,
        height: 140,
        width: 140,
        
    },
    imgcontainer:{
        backgroundColor: '#1A241F',
        height: 46,
        width: 46,
        margin: 6,
        borderRadius: 5,
    },
    img: {
        height: 30,
        width: 30,
        margin: 7,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: {
        color: "white",
        fontSize: 12,
    }
});

export default Card;