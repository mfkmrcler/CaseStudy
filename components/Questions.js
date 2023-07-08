import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const Questions = ({ item }) => {
  return (
    <ImageBackground
      source={{ uri: item.image_uri }}
      resizeMode="stretch"
      style={styles.img}
      imageStyle={styles.image}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 110,
    width: 160,
    margin: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10, 
  },
  image: {
    borderRadius: 10, 
  },
  titleContainer: {
    marginTop: 50,
    marginLeft: 4, 
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Questions;
