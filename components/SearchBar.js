import React from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";




function SearchBar(props){
    return(<View style={searchBarStyles.searchBoxContainer}>
        <Image
            style={searchBarStyles.searchIcon}
            source={require("../assets/search.png")}
          />
        <TextInput
          style={searchBarStyles.searchBox}
          placeholder="Search for plants"
          value={props.searchText}
          onChangeText={props.handleSearch}
          />
        </View>);
};
const searchBarStyles = StyleSheet.create({
    searchBoxContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 5,
      paddingLeft: 10,
      paddingRight: 10,
      margin: 20,
      backgroundColor: 'white',
    },
    searchBox: {
      flex: 1,
      fontSize: 16,
      height: 40,
      color: "#ccc",
      paddingLeft: 5,
    },
    searchIcon: {
      width: 20,
      height: 20,
    }, 
         
  });
export default SearchBar;