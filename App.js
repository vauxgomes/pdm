import { useContext, useState } from 'react'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './src/screens/LoginScreen'
import MenusScreen from './src/screens/MenusScreen'
import DishesScreen from './src/screens/DishesScreen'

const Stack = createNativeStackNavigator()

import ContextProvider, { Context } from './providers/contexts/context'

function Main() {
  const [loadedFonts] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  })

  const { token } = useContext(Context)

  if (!token) {
    return <LoginScreen />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menus" component={MenusScreen} />
        <Stack.Screen name="Dishes" component={DishesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  )
}
