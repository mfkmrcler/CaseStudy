import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import Card from '../components/Card';
import FeaturesData from '../data/FeaturesData';
import ChoicesData from '../data/ChoicesData';
import Button from '../components/Button';
import Choices from '../components/Choices';
import BottomNote from '../components/BottomNote';

const PaywallScreen = ({ navigation }) => {
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(1);
  const goHomeScreen = () => {
    navigation.navigate('MainScreen');
  };

  const handleChoiceSelection = (index) => {
    setSelectedChoiceIndex(index);
  };

  
  const selectedChoice = ChoicesData[selectedChoiceIndex];
  const buttonTitle = selectedChoice ? selectedChoice.buttonTitle : '';
  const bottomNote = selectedChoice ? selectedChoice.bottomNote : '';

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <ImageBackground
        source={require('../assets/background_cleanup.png')}
        resizeMode="stretch"
        style={styles.img}
      >
        <View style={{flex: 2.5, top:30, right:30, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={goHomeScreen} style={styles.closeButton}>
            <Text style={{color: 'white', fontSize: 20,}}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:4.5 }}>
          <View>
          <Header title="PlantApp Premium" color="white"/>
          <Subtitle subtitle="Access all features" color="#9FA59F"/>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FeaturesData.map((item) => <Card key={item.id} item={item} />)}
          </ScrollView>
          {ChoicesData.map((item, index) => (
  <Choices
    key={item.id}
    item={item}
    index={index}
    selectedIndex={selectedChoiceIndex}
    handleChoiceSelection={handleChoiceSelection}
  />
))}
          </View>
          </View>
          <View style={{flex:2}}>
            <Button buttonTitle={buttonTitle} onPress={goHomeScreen} />
            <BottomNote bottomNote={bottomNote}/>
            <BottomNote bottomNote="Terms · Privacy · Restore"/>
          </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaywallScreen;
