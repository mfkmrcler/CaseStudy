import React from 'react';
import { View } from 'react-native';
import Subtitle from './Subtitle';
import  Header  from './Header';

const AppBar = () => {
    return(
        <View>
            <Subtitle subtitle="Hi, plant lover!" color="#6C6D6C" />
            <Header title="Good Afternoon!" color="black" />
        </View>
    );
};


export default AppBar;