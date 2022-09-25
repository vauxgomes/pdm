import React, { useState } from 'react'
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

export default function DishesScreen() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>Entradas</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={(e) => setModalVisible(true)}
        >
          <Icon name="add" size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Dish dish={{}} />
        <Dish dish={{}} />
        <Dish dish={{}} />
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
              <TextInput style={form.input} />
            </View>

            {/* Description */}
            <View style={margin.bottom.sm}>
              <Text style={form.label}>Descrição</Text>
              <TextInput
                style={form.input}
                editable
                multiline
                numberOfLines={4}
              />
            </View>

            {/* Price */}
            <View style={margin.bottom.sm}>
              <Text style={form.label}>Preço</Text>
              <TextInput style={form.input} />
            </View>

            <Button title="Salvar" type="primary" style={margin.bottom.sm} />
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
