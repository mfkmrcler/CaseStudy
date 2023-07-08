import React from "react";
import { View, Text, ImageBackground, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const Categories = ({ item }) => {
    
  return (
    <ImageBackground
      source={{ uri: item["image"].url }}
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
    height: 160,
    width: width * 0.45,
    margin: 8,
    borderRadius: 10, 
  },
  image: {
    borderRadius: 10,
  },
  titleContainer: {
    margin: 8, 
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Categories;
