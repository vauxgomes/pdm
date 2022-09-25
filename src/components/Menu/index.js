import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { color, flex, font, margin, space } from '../../styles'

export default function Menu({ menu }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[flex.row, flex.alignCenter]}>
        <Icon
          name="grip-lines"
          size={font.size.lg}
          color={color.muted}
          style={margin.end.sm}
        />
        <Text style={styles.name}>{menu.name}</Text>
      </View>

      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>3</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: space.sm,
    paddingVertical: space.md,
    marginBottom: space.sm,

    backgroundColor: color.line,
    borderRadius: 4,
  },

  name: {
    fontFamily: font.family,
    fontSize: font.size.md,
  },

  tagContainer: {
    alignItems: 'center',

    paddingVertical: space.xs,
    paddingHorizontal: space.sm * 1.5,

    backgroundColor: color.secondary,
    borderRadius: 50,
  },

  tagText: {
    fontFamily: font.family,
    color: 'white',
    fontWeight: 'bold',
    fontSize: font.size.sm,
  },
})
