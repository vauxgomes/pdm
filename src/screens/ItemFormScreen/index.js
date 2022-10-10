import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import Button from '../../components/Button'

import { color, flex, font, form, margin, space } from '../../styles'

import { Context } from '../../../providers/contexts/context'
import api from '../../../providers/services/api'

export default function ItemsScreen({ navigation, route }) {
  const {
    category_id = null,
    item = null,
    onAddItem = () => {},
    onUpdateItem = () => {},
  } = route.params

  const { token } = useContext(Context)

  const [name, setName] = useState(item?.name || '')
  const [description, setDescription] = useState(item?.description || '')
  const [price, setPrice] = useState(item?.price || 0)

  function handleSubmit() {
    const item__ = {
      name,
      description,
      price,
    }

    if (!category_id) {
    }

    if (name && description && price) {
      if (!item?.id) {
        // POST
        api
          .token(token)
          .postItem(category_id, item__)
          .then((res) => {
            // Update id
            item__.id = res.id

            // Reset inputs
            setName('')
            setDescription('')
            setPrice('')

            // Update screen
            onAddItem(item__)
            navigation.pop()
          })
      } else {
        // PUT
      }
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <View style={styles.container}>
      <View style={margin.bottom.md}>
        <Text style={styles.title}>{item ? 'Atualização' : 'Cadastro'}</Text>
      </View>

      {/* Name */}
      <View style={margin.bottom.sm}>
        <Text style={form.label}>Nome</Text>
        <TextInput value={name} onChangeText={setName} style={form.input} />
      </View>

      {/* Description */}
      <View style={margin.bottom.sm}>
        <Text style={form.label}>Descrição</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={form.input}
          editable
          multiline
          numberOfLines={4}
        />
      </View>

      {/* Price */}
      <View style={margin.bottom.md}>
        <Text style={form.label}>Preço</Text>
        <TextInput value={price} onChangeText={setPrice} style={form.input} />
      </View>

      <View style={[flex.flex, flex.row]}>
        <Button
          title="Salvar"
          type="primary"
          style={[margin.bottom.sm, margin.end.sm, { flex: 1 }]}
          onPress={handleSubmit}
        />
        <Button
          title="Cancelar"
          type="secondary"
          onPress={() => navigation.pop()}
        />
      </View>
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
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 30,
    width: 30,

    padding: space.xs,
    backgroundColor: color.secondary,
    borderRadius: 4,
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#000000aa',
    paddingTop: space.xl,
  },

  modalView: {
    width: '80%',

    padding: space.md,
    backgroundColor: color.white,
    borderRadius: 4,
  },
})
