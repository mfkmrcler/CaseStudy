import React, { useState, useRef  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, FlatList } from "react-native";
import OnboardingData from '../data/OnboardingData';
import Slides from "../components/Slides";
import Footer from "../components/Footer";
import Button from "../components/Button";

const { width, height } = Dimensions.get('window');

function OnboardingScreen({ navigation }) {
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef(null);
  const handleSlideChange = (index) => {
    const contentOffsetX = index.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const handleSlideChangeByButton = () => {
    const nextSlideIndex = currentSlideIndex +1;
    if(nextSlideIndex != OnboardingData.length){
        const offset = nextSlideIndex * width;
        flatListRef?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const goPaywallScreen = () => {
    navigation.navigate('PaywallScreen');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor='white' />
      <View style={{flex: 1, marginTop: 15,justifyContent: 'space-between'}}>
        <View style={{flex:7}}>
          <FlatList
              ref={flatListRef}
              pagingEnabled
              data={OnboardingData}
              contentContainerStyle={{ height: height * 0.8 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <Slides item={item} />}
              onMomentumScrollEnd={handleSlideChange}
          />
        </View>
        <View style={{flex:2}}>
          <Button buttonTitle="Continue" onPress={currentSlideIndex===OnboardingData.length-1 ? goPaywallScreen : handleSlideChangeByButton} />
          <Footer slides={OnboardingData} currentSlideIndex={currentSlideIndex} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;


