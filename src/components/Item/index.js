import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { color, font, shadow, space } from '../../styles'

export default function Item({ item, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <Text style={styles.price}>
          {item.price &&
            item.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
        </Text>
      </View>

      <Image
        source={item?.img_url || require('../../../assets/imgs/dummy.jpg')}
        style={styles.img}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',

    padding: space.sm,
    marginBottom: space.sm,

    backgroundColor: color.primary,
    borderRadius: 4,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginEnd: space.sm,
  },

  title: {
    // fontFamily: font.family,
    fontSize: font.size.lg,
    fontWeight: 'bold',
    marginBottom: space.xs,
    color: color.white,
  },

  description: {
    // fontFamily: font.family,
    fontSize: font.size.md,
    color: color.white,
    marginBottom: space.sm,
  },

  price: {
    // fontFamily: font.family,
    fontSize: font.size.md,
    fontWeight: '900',
    color: color.white,
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 4,
    shadow,
  },
})
