import React, { useState, useRef  } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor='white' />
      <View style={{marginTop: 15,justifyContent: 'space-between'}}>
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
        <Button buttonTitle="Continue" onPress={handleSlideChangeByButton} />
        <Footer slides={OnboardingData} currentSlideIndex={currentSlideIndex} />
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;


