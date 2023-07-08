import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import Subtitle from './Subtitle';
import  Header  from './Header';
import SearchBar from './SearchBar';

const AppBar = () => {
    return(
        <View style={{backgroundColor: 'green'}}>
            <Subtitle subtitle="Hi, plant lover!" color="black" />
            <Header title="Good Afternoon!" color="black" />
            <SearchBar />
        </View>
    );
};


export default AppBar;