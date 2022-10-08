import React, { useContext, useEffect, useState } from 'react'
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../../components/Button'
import Dish from '../../components/Dish'

import { color, flex, font, form, margin, space } from '../../styles'

import api from '../../../providers/services/api'
import { Context } from '../../../providers/contexts/context'

export default function DishesScreen({ navigation, route }) {
  const { id, name: title } = route.params
  const { token } = useContext(Context)

  const [dishes, setDishes] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    api
      .token(token)
      .getItens(id)
      .then((res) => {
        setDishes(res)
      })
  }, [token])

  function handleAddDish() {
    const dish = {
      name,
      description,
      price,
    }

    if (name && description && price) {
      api
        .token(token)
        .postItem(id, dish)
        .then((res) => {
          dish.id = res.id
          setDishes((prev) => [dish, ...prev])

          setModalVisible(false)
          setName('')
          setDescription('')
          setPrice('')
        })
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={(e) => setModalVisible(true)}
        >
          <Icon name="add" size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {dishes.map((dish, key) => (
          <Dish dish={dish} key={key} />
        ))}
      </ScrollView>

      {/* Modal de cadastro */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            {/* Name */}
            <View style={margin.bottom.sm}>
              <Text style={form.label}>Nome</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={form.input}
              />
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
            <View style={margin.bottom.sm}>
              <Text style={form.label}>Preço</Text>
              <TextInput
                value={price}
                onChangeText={setPrice}
                style={form.input}
              />
            </View>

            <Button
              title="Salvar"
              type="primary"
              style={margin.bottom.sm}
              onPress={handleAddDish}
            />
            <Button
              title="Cancelar"
              type="secondary"
              outline
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
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
    padding: space.xs,
    backgroundColor: color.primary,
    borderRadius: 50,
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
