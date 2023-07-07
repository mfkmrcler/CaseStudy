import React from "react";
import { View, Image, Text, Dimensions} from "react-native";
import Header from "./Header";
const { width } = Dimensions.get('window');

function Slides({ item }) {
  return (
    <View key={item.id} >
        <Header title={item.title} color="black"/>
        <Image source={item.image} style={{ height: '75%', width, resizeMode: 'contain' }} />
    </View>
  );
}

export default Slides;

