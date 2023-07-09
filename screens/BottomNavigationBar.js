import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ScanScreen from "./ScanScreen";
import DiagnoseScreen from './DiagnoseScreen';
import MyGardenScreen from './MyGarden';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.scanContainer}>{children}</View>
    </TouchableOpacity>
)


const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                elevation: 0,
                height: 75,
            }
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false,tabBarIcon: ({focused}) => (
        <View style={styles.container}>
            <Image source={require('../assets/home.png')} resizeMode='contain' style={[styles.iconStyle, {tintColor: focused ? '#28AF6E' : 'gray',}]}/>
            <Text style={{color: focused ? '#28AF6E' : 'gray',}}>Home</Text>
        </View>
      )}}/>
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} options={{ headerShown: false,tabBarIcon: ({focused}) => (
        <View style={styles.container}>
            <Image source={require('../assets/stethoscope.png')} resizeMode='contain' style={[styles.iconStyle, {tintColor: focused ? '#28AF6E' : 'gray',}]}/>
            <Text style={{color: focused ? '#28AF6E' : 'gray',}}>Diagnose</Text>
        </View>
      )}}/>
      <Tab.Screen name=" " component={ScanScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
            <Image 
            source={require('../assets/scan.png')} 
            resizeMode='contain' 
            style={styles.scanIcon}
            />
      ),
      tabBarButton: (props) => (
        <CustomTabBarButton {...props} />
      )
      }}/>
      <Tab.Screen name="MyGarden" component={MyGardenScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
        <View style={styles.container}>
            <Image source={require('../assets/gardening.png')} resizeMode='contain' style={[styles.iconStyle, {tintColor: focused ? '#28AF6E' : 'gray',}]}/>
            <Text style={{color: focused ? '#28AF6E' : 'gray',}}>My Garden</Text>
        </View>
      )}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false,tabBarIcon: ({focused}) => (
        <View style={styles.container}>
            <Image source={require('../assets/user.png')} resizeMode='contain' style={[styles.iconStyle, {tintColor: focused ? '#28AF6E' : 'gray',}]}/>
            <Text style={{color: focused ? '#28AF6E' : 'gray',}}>Profile</Text>
        </View>
      )}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    iconStyle: {
        width: 25, 
        height: 25,   
    },
    container: {
        alignItems: 'center', 
        justifyContent: 'center', 
        top: 5,
    },
    scanIcon: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
    scanContainer: {
        width: 70, 
        height: 70, 
        borderRadius: 35, 
        backgroundColor: '#28AF6E',
    },
    buttonContainer: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center', 
    },
}); 



export default BottomNavigationBar;
