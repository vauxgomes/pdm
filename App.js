import { useContext, useState } from 'react'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './src/screens/LoginScreen'
import MenusScreen from './src/screens/MenusScreen'
import ItemsScreen from './src/screens/ItemsScreen'
import ItemFormScreen from './src/screens/ItemFormScreen'

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
        <Stack.Screen
          name="Menus"
          component={MenusScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Items" component={ItemsScreen} options={{ title: 'Itens do Cardápio' }}/>
        <Stack.Screen name="Item" component={ItemFormScreen} options={{ title: 'Formulário de Ítem' }}/>
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
