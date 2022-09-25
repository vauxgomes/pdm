import { useFonts } from 'expo-font'

import LoginScreen from './src/screens/LoginScreen'
import MenusScreen from './src/screens/MenusScreen'
import DishesScreen from './src/screens/DishesScreen'

export default function App() {
  const [loadedFonts] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  })

  return <LoginScreen />
}
