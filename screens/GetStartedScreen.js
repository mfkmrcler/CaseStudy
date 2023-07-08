import React from "react";
import { SafeAreaView , View, Image, Dimensions, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";
import BottomNote from "../components/BottomNote";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const GetStartedScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('OnboardingScreen');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='white' />
            <View style={{flex:1, marginTop: 15,justifyContent: 'space-between'}}>
                <View style={styles.bodyContainer}>
                    <Header title="Welcome to PlantApp"/>
                    <Subtitle subtitle="Identify more than 3000+ plants and 88% accuracy." color="#6C6D6C"/>
                    <Image source={require('../assets/screen2.png')} style={{ height: '65%', width, resizeMode: 'contain' }}/>
                </View>
                <View style={styles.bottomContainer}>
                    <Button buttonTitle="Get Started" onPress={handlePress}/>
                    <BottomNote bottomNote="By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy." />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
      flex:7
    },
    bottomContainer: {
      flex:2
    }
  });

export default GetStartedScreen;
