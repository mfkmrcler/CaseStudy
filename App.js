import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen.js';
import MainScreen from './screens/MainScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import GetStartedScreen from './screens/GetStartedScreen.js';
import PaywallScreen from './screens/PaywallScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    const checkAppFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
      } else {
        setIsAppFirstLaunched(false);
      }
    };
    checkAppFirstLaunch();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAppFirstLaunched ? (
          <>
            <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
