import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { color, flex, font, margin, shadow, space } from '../../styles'

export default function Cardapio({
  cardapio,
  onPress,
  onPressEdit,
  onPressRemove,
}) {
  return (
    <TouchableOpacity style={[styles.container, shadow.sm]} onPress={onPress}>
      <Text style={styles.name}>{cardapio.name}</Text>

      <TouchableOpacity
        style={[styles.btn, styles.editButton]}
        onPress={onPressEdit}
      >
        <Icon name="edit" size={font.size.md} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.removeButton]}
        onPress={onPressRemove}
      >
        <Icon name="trash-alt" size={font.size.md} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',

    marginBottom: space.sm,
    borderRadius: 4,

    overflow: 'hidden',
  },

  name: {
    flexGrow: 1,
    backgroundColor: color.primary,

    padding: space.sm,
    paddingVertical: space.md,

    // fontFamily: font.family,
    fontSize: font.size.lg,
    color: 'white',
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: space.md * 1.5,
  },

  editButton: {
    backgroundColor: color.warning,
  },

  removeButton: {
    backgroundColor: color.darkGray,
  },
})
