import React,{useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import DespesasScreen from './screens/DespesasScreen';
import ReceitasScreen from './screens/ReceitasScreen';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App(){
  const [isLoggedIn, SetIsLoggedIn] = useState(false)

  useEffect(() =>{
    setTimeout(async()=> {
      await SplashScreen.hideAsync();
    },3000)
  },[])



  const handleLogin = () => {
    SetIsLoggedIn(true)
  }

  
  const handleLogout = () => {
    SetIsLoggedIn(false)
  }

  if (!isLoggedIn){
    return <LoginScreen onLogin = {handleLogin} />
  }

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' />
      {(props) => <HomeScreen {...props} onLogout={handleLogout}/>}</Stack.Screen>
        


        <Stack.Screen name='Receitas' component={ReceitasScreen} options={[title: "Receitas"]} />
        <Stack.Screen name='Despesas' component={DespesasScreen} options={[title: "Despesas"]} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
