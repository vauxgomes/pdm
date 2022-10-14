import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import { color, font, form, margin, space } from '../../styles'
import Button from '../Button'

export default function CardapioFormModal({
  cardapio,
  visible,
  hide,
  onSubmit,
}) {
  const [name, setName] = useState(cardapio?.name || '')

  function onSave() {
    if (name) {
      onSubmit({ ...cardapio, name })
      setName('')
      hide()
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Cardápio</Text>

            <TouchableOpacity onPress={hide}>
              <Icon name="close" size={font.size.lg} color={color.dark} />
            </TouchableOpacity>
          </View>

          {/* Body */}
          <View style={styles.body}>
            <View style={margin.bottom.md}>
              <Text style={form.label}>Nome</Text>
              <TextInput
                style={form.input}
                value={name}
                onChangeText={setName}
                placeholder={cardapio?.name}
              />
            </View>

            <Button
              title={cardapio ? 'Atualizar' : 'Salvar'}
              onPress={onSave}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000066',
  },

  modal: {
    minWidth: '80%',
    padding: space.md,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingBottom: space.sm,
    marginBottom: space.sm,
    borderBottomWidth: 1,
    borderBottomColor: color.line,
  },

  title: {
    // fontFamily: font.family,
    fontSize: font.size.xl,
  },
})
