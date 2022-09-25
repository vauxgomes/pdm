import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { color, font, space } from '../../styles'

export default function Button({
  title,
  type = 'primary',
  outline = false,
  onPress,
  style,
}) {
  const getContainerStyle = () => {
    if (outline) {
      return [styles.container, styles.containerOutline]
    }

    return [styles.container, { backgroundColor: color[type] }]
  }

  return (
    <TouchableOpacity style={[getContainerStyle(), style]} onPress={onPress}>
      <Text style={[styles.text, outline && styles.textOutline]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 40,
    padding: space.sm,

    borderRadius: 4,
  },

  containerOutline: {
    borderWidth: 2,
    borderColor: color.line,
  },

  text: {
    color: '#fff',
    fontFamily: font.family,
    fontSize: font.size.md,
    fontWeight: '400',
  },

  textOutline: {
    color: color.dark,
    fontSize: font.size.md,
  },

  buttonsView: {
    flexDirection: 'row',
    marginVertical: space.md,
  },
})
