import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const Footer = (props) => {
  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        {props.slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              props.currentSlideIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  indicator: {
    height: 7,
    width: 7,
    backgroundColor: 'gray',
    marginHorizontal: 3,
    borderRadius: 5,
  },
  activeIndicator: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

