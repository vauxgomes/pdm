import React, { useContext, useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Menu from '../../components/Menu'
import MenuModal from '../../components/MenuModal'

import { color, font, space } from '../../styles'

import api from '../../../providers/services/api'
import { Context } from '../../../providers/contexts/context'

export default function MenusScreen({ navigation, route }) {
  const { token } = useContext(Context)

  const [menus, setMenus] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    api
      .token(token)
      .getCardapios()
      .then((res) => {
        setMenus(res)
      })
  }, [token])

  function addMenu(menu) {
    api
      .token(token)
      .postCardapio(menu)
      .then((res) => {
        menu.id = res
        setMenus((prev) => [menu, ...prev])
      })
  }

  function onPress(menu) {
    navigation.push('Dishes', { id: menu.id, name: menu.name })
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
          <Icon name="plus" size={font.size.xl} color={color.white} />
        </TouchableOpacity>
      </View>

      {/* Entradas */}
      <ScrollView>
        {menus.map((menu, key) => (
          <Menu menu={menu} key={key} onPress={() => onPress(menu)} />
        ))}
      </ScrollView>

      <MenuModal
        visible={modalVisible}
        hide={() => setModalVisible(false)}
        addMenu={addMenu}
      />
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
    // fontWeight: 'bold',
  },

  addButton: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 30,
    width: 30,

    padding: space.xs,
    backgroundColor: color.primary,
    borderRadius: 50,
  },
})
