import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import Button from '../../components/Button'

import { color, flex, font, form, margin, space } from '../../styles'

export default function ItemsFromScreen({ navigation, route }) {
  const { category_id = null, item = null, onSubmit } = route.params

  const [name, setName] = useState(item?.name || '')
  const [description, setDescription] = useState(item?.description || '')
  const [price, setPrice] = useState(item?.price || 0)
  const [imgUrl, setImgUrl] = useState(item?.img_url || '')

  function handleSubmit() {
    if (name && description && price) {
      onSubmit({
        ...item, // Aproveito tudo que está em item
        name,
        description,
        price,
        img_url: imgUrl,
      })

      // Espero o retorno do submit
      navigation.pop()
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <View style={styles.container}>
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
          multiline={true}
          numberOfLines={4}
        />
      </View>

      {/* Price */}
      <View style={margin.bottom.md}>
        <Text style={form.label}>Preço</Text>
        <TextInput value={price} onChangeText={setPrice} style={form.input} />
      </View>

      {/* Image */}
      <View style={margin.bottom.md}>
        <Text style={form.label}>Imagem (URL)</Text>
        <TextInput value={imgUrl} onChangeText={setImgUrl} style={form.input} />
      </View>

      {/* Botões */}
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
    backgroundColor: color.white,
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
