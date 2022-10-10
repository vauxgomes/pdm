import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { color, font, shadow, space } from '../../styles'

export default function Item({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>Salmão e Cebola</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
        </View>

        <Text style={styles.price}>R$ 6,50</Text>
      </View>

      <View style={styles.img}>
        <Image
          source={require('../../../assets/imgs/dummy.jpg')}
          style={{ height: 100, width: 100 }}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    fontFamily: font.family,
    fontSize: font.size.lg,
    fontWeight: 'bold',
    marginBottom: space.xs,
    color: color.white,
  },

  description: {
    fontFamily: font.family,
    fontSize: font.size.md,
    color: color.white,
    marginBottom: space.sm,
  },

  price: {
    fontFamily: font.family,
    fontSize: font.size.md,
    fontWeight: '900',
    color: color.white,
  },

  img: {
    width: 100,
  },
})
