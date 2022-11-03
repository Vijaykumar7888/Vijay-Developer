import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text,View } from 'react-native';
import HomeScreens from './assets/Screens/HomeScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCity from './assets/Screens/ManageCity';
import Settings from './assets/Screens/Settings';
import LogoScreen from './assets/Screens/LogoScreen';
const Stack = createNativeStackNavigator();
export default function App(){
  const [show, setshow] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setshow(false);
  },3000)
  })
  return (
    <>
      {show?(<LogoScreen/>):(<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={HomeScreens} options={{title:"",headerShown:false}}></Stack.Screen>
          <Stack.Screen name = "Manage" component={ManageCity} options={{title:"",headerShown:false}}></Stack.Screen>
          <Stack.Screen name = "Setting" component={Settings} options={{title:"",headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>)}
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
