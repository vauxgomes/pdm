import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Menu from '../../components/Menu'

import { color, font, space } from '../../styles'

export default function MenusScreen() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>Cardápios</Text>

        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={font.size.xl} color={color.white} />
        </TouchableOpacity>
      </View>

      {/* Entradas */}
      <ScrollView>
        <Menu menu={{ name: 'Entrada', size: 3 }} />
        <Menu menu={{ name: 'Clássico', size: 5 }} />
        <Menu menu={{ name: 'Especiais', size: 4 }} />
        <Menu menu={{ name: 'Bebidas', size: 8 }} />
        <Menu menu={{ name: 'Sobremesas', size: 4 }} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: space.lg,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: space.lg,
  },

  title: {
    fontFamily: font.family,
    fontSize: font.size.header,
    fontWeight: 'bold',
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 30,
    width: 30,

    padding: space.xs,
    backgroundColor: color.primary,
    borderRadius: 50,
  },
})
