import React, { useContext, useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Item from '../../components/Item'

import { color, font, space } from '../../styles'

import { Context } from '../../../providers/contexts/context'
import api from '../../../providers/services/api'

export default function ItemsScreen({ navigation, route }) {
  const { id, name: title } = route.params
  const { token } = useContext(Context)

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setLoading(true)

    api
      .token(token)
      .getItens(id)
      .then((res) => {
        setItems(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [token])

  function onAddItem(item) {
    setItems((prev) => [item, ...prev])
  }

  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={(e) => {
            navigation.push('Item', { category_id: id, onAddItem })
          }}
        >
          <Icon name="add" size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      {/* Empty */}
      {items.length === 0 && !loading && (
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

      <ScrollView>
        {items.map((item, key) => (
          <Item item={item} key={key} />
        ))}
      </ScrollView>
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
