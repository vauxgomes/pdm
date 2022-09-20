import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'

export default function App() {
  const [loadedFonts] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
  })

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Montserrat' }}>
        This is just the beginning!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
