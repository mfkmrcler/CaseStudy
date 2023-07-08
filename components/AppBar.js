import React from 'react';
import { View, Image } from 'react-native';
import Subtitle from './Subtitle';
import Header from './Header';
import SearchBar from './SearchBar';

const getTimeOfDay = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return {
      greeting: 'Good Morning!',
      imageSource: require('../assets/morning.png'),
    };
  } else if (currentHour >= 12 && currentHour < 18) {
    return {
      greeting: 'Good Afternoon!',
      imageSource: require('../assets/cloudy.png'),
    };
  } else {
    return {
      greeting: 'Good Night!',
      imageSource: require('../assets/night.png'),
    };
  }
};

const AppBar = () => {
  const { greeting, imageSource } = getTimeOfDay();

  return (
    <View>
      <Subtitle subtitle="Hi, plant lover!" color="black" />
      <View style={{ flexDirection: 'row' }}>
        <Header title={greeting} color="black" />
        <Image source={imageSource} style={{ width: 50, height: 50 }} />
      </View>
      <SearchBar />
    </View>
  );
};

export default AppBar;
