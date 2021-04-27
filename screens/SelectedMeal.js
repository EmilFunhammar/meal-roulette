import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { getMealFromApiById } from '../UserActions/userACtions'

export default function SelaectedMeal({ route }) {
  const { itemId } = route.params
  const [meal, setMeal] = useState({
    ingredients: '',
  })

  useEffect(() => {
    getMealFromApiById(setMeal, itemId)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '40%',
        }}
      >
        <Image
          style={styles.images}
          source={{
            uri: `${meal.picture}`,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 15,
          fontSize: 26,
          marginLeft: '2,5%',
          fontWeight: 'bold',
        }}
      >
        {meal.title}
      </Text>
      <Text
        style={{
          marginTop: 15,
          width: '90%',
          fontSize: 24,
          marginLeft: '2,5%',
        }}
      >
        {meal.description}
      </Text>
      <Text
        style={{
          marginTop: 15,
          fontSize: 26,
          fontWeight: 'bold',
          marginLeft: '2,5%',
        }}
      >
        ingredients
      </Text>
      <ScrollView style={{ fontSize: 24, marginLeft: '2,5%' }}>
        <Text style={{ fontSize: 20 }}>
          {meal.ingredients.split(',').join('\n' + '-')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    position: 'absolute',
    top: '50%',
  },
  images: {
    height: '100%',
    width: '95%',
  },
  imagesText: {
    fontSize: 16,
    width: 100,
  },
})
