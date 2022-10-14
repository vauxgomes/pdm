import React, { useContext, useEffect, useState } from 'react'
import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Cardapio from '../../components/Cardapio'
import CardapioFormModal from '../../components/CardapioFormModal'

import { color, flex, font, space } from '../../styles'

import api from '../../../providers/services/api'
import { Context } from '../../../providers/contexts/context'

export default function CardapiosScreen({ navigation, route }) {
  const { token } = useContext(Context)

  const [cardapio, setCardapio] = useState(null)
  const [cardapios, setCardapios] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getCardapios()
  }, [token])

  function onRefresh() {
    setRefreshing(true)
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
      setRefreshing(false)
    )

    getCardapios()
  }

  function getCardapios() {
    api
      .token(token)
      .getCardapios()
      .then((res) => {
        setCardapios(res)
      })
  }

  function handlePressLoadCardapio(cardapio) {
    navigation.push('Items', { cardapio })
  }

  function handlePressEditCardapio(cardapio) {
    setCardapio(cardapio)
    setModalVisible(true)
  }

  function handlePressRemoveCardapio(cardapio) {
    Alert.alert('Confirmação', 'Realmente deseja deletar esse registro?', [
      {
        text: 'Sim',
        onPress: () => {
          // TODO API
          setCardapios((prev) => prev.filter((c) => c.id !== cardapio.id))
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function onSubmitModal(cardapio) {
    if (!cardapio.id) {
      api
        .token(token)
        .postCardapio(cardapio)
        .then((res) => {
          cardapio.id = res
          setCardapios((prev) => [cardapio, ...prev])
        })
    } else {
      // TODO API
      const index = cardapios.findIndex((c) => c.id === cardapio.id)
      const cardapios__ = [...cardapios]
      cardapios__[index] = cardapio // Novo cardápio
      setCardapios(cardapios__)
    }
  }

  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>Cardápios</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="add" size={font.size.xl} color={color.white} />
        </TouchableOpacity>
      </View>

      {/* Entradas */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {cardapios.map((cardapio, key) => (
          <Cardapio
            cardapio={cardapio}
            key={key}
            onPress={() => handlePressLoadCardapio(cardapio)}
            onPressEdit={() => handlePressEditCardapio(cardapio)}
            onPressRemove={() => handlePressRemoveCardapio(cardapio)}
          />
        ))}
      </ScrollView>

      {/* Modal */}
      <CardapioFormModal
        cardapio={cardapio}
        visible={modalVisible}
        hide={() => setModalVisible(false)}
        onSubmit={onSubmitModal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: space.lg,
    backgroundColor: 'white',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: space.lg,
  },

  title: {
    // fontFamily: font.family,
    fontSize: font.size.header,
    // fontWeight: 'bold',
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
})
