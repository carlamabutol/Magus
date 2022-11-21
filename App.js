import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Animated, Image, Dimensions, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, Button } from 'react-native';
import Magusone from './Magusone';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Choose from './screens/login/Choose';
import LoginForm from './screens/login/LoginForm';
import Home from './screens/homepage/Home';
import { useEffect } from 'react';
import SignupForm from './screens/login/SignupForm';
import ChangePass from './screens/login/ChangePass';
const Stack = createNativeStackNavigator();
const {width} = Dimensions.get('window');
export default function App() {
  const fetchDataSubliminal = async () => {
    const resp = await fetch("https://dev.magusaudio.com/api/v1/subliminal");
    const data = await resp.json();
    global.data=data
    global.datas=data
  };
  useEffect(() => {
    fetchDataSubliminal()
   }, []);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Magusone' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Magusone' component={Magusone} />
          <Stack.Screen name='Choose' component={Choose} />
          <Stack.Screen name='Change' component={ChangePass} />
          <Stack.Screen name='Signup' component={SignupForm}/>
          <Stack.Screen options={{gestureEnabled: false}} name='Login' component={LoginForm}/>
          <Stack.Screen options={{gestureEnabled: false}} name='Home' component={Home}/>

        </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
