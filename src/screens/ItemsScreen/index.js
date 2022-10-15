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
import Item from '../../components/Item'

import { color, font, space } from '../../styles'

import api from '../../../providers/services/api'
import { Context } from '../../../providers/contexts/context'

export default function ItemsScreen({ navigation, route }) {
  const { cardapio } = route.params
  const { token } = useContext(Context)

  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const [itens, setItens] = useState([])

  useEffect(() => {
    setLoading(true)
    getItens()

    // Botão Add no Header
    navigation.setOptions({
      title: cardapio.name,
      headerRight: () => (
        <TouchableOpacity
          style={styles.addButton}
          onPress={(e) => {
            navigation.push('ItemForm', { onSubmit })
          }}
        >
          <Icon name="add" size={25} color={color.primary} />
        </TouchableOpacity>
      ),
    })
  }, [token, navigation])

  function onRefresh() {
    setRefreshing(true)
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
      setRefreshing(false)
    )

    getItens()
  }

  function getItens() {
    api
      .token(token)
      .getItens(cardapio.id)
      .then((res) => {
        setItens(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function handleRemoveItem(item) {
    Alert.alert('Confirmação', 'Realmente deseja deletar esse registro?', [
      {
        text: 'Sim',
        onPress: () => {
          api
            .token(token)
            .deleteItem(cardapio.id, item.id)
            .then((res) => {
              if (res.success) {
                setItens((prev) => prev.filter((it) => it.id !== item.id))
              }
            }) 
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function onSubmit(item) {
    if (!item?.id) {
      api
        .token(token)
        .postItem(cardapio.id, item)
        .then((res) => {
          item.id = res
          setItens((prev) => [item, ...prev])
        })
    } else {
      api
        .token(token)
        .putItem(cardapio.id, item.id, item)
        .then((res) => {
          if (res.success) {
            const index = itens.findIndex((it) => it.id === item.id)
            const itens__ = [...itens]
            itens__[index] = item // Novo item
            setItens(itens__)
          }
        })
    }
  }

  return (
    <View style={styles.container}>
      {/* Empty */}
      {itens.length === 0 && !loading && (
        <View>
          <Text>Adicione seu primeiro ítem no botão acima!</Text>
        </View>
      )}

      {/* Loading */}
      {loading && (
        <View>
          <Text>Carregando...</Text>
        </View>
      )}

      {/* Listagem */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {itens.map((item, key) => (
          <Item
            item={item}
            key={key}
            onPress={() =>
              navigation.navigate('ItemForm', {
                item,
                onSubmit,
              })
            }
            onLongPress={() => handleRemoveItem(item)}
          />
        ))}
      </ScrollView>
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

    // height: 30,
    // width: 30,

    padding: space.xs,
    backgroundColor: color.white,
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
