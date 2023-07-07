import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

const Choices = ({ item, index, selectedIndex, handleChoiceSelection }) => {
  const handlePress = () => {
    handleChoiceSelection(index);
  };

  const selected = index === selectedIndex;
  const isIndexOne = index === 1;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.choicesContainer, selected ? styles.choicesContainerSelected : null]}>
        {(isIndexOne && selected) && <View style={styles.tagContainer}><Text style={styles.tagText}>Save 50%</Text></View>}
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={[styles.circle, selected ? styles.circleSelected : null]}>
            {selected && <View style={styles.innerCircle} />}
          </View>
        </TouchableWithoutFeedback>
        <View key={item.id}>
          <Text style={styles.choicesTitle}>{item.title}</Text>
          <Text style={styles.choicesSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  choicesContainer: {
    backgroundColor: "#223028",
    borderRadius: 10,
    marginHorizontal: 18,
    paddingVertical: 8,
    borderColor: "#223028",
    borderWidth: 3,
    flexDirection: "row",
    margin: 4,
    position: "relative", // Added to position the tag container
  },
  choicesContainerSelected: {
    backgroundColor: "#223028",
    borderRadius: 10,
    marginHorizontal: 18,
    paddingVertical: 8,
    borderColor: "#28AF6E",
    borderWidth: 3,
    flexDirection: "row",
    margin: 4,
  },
  choicesTitle: {
    color: "white",
    fontWeight: "bold",
  },
  choicesSubtitle: {
    color: "white",
    fontWeight: "200",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "gray",
    margin: 4,
  },
  circleSelected: {
    backgroundColor: "#28AF6E",
  },
  innerCircle: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    top: 7,
    left: 7,
  },
  tagContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#28AF6E",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 16,
  },
  tagText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Choices;
