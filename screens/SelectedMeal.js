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
      <View style={styles.imagesView}>
        <Image
          style={styles.images}
          source={{
            uri: `${meal.picture}`,
          }}
        />
      </View>
      <Text style={styles.mealTitle}>{meal.title}</Text>
      <Text style={styles.descriptionText}>{meal.description}</Text>
      <Text style={styles.ingredientsTitle}>ingredients</Text>
      <ScrollView style={{ fontSize: 24, marginLeft: '2,5%' }}>
        <Text style={styles.ingredientsText}>
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
  ingredientsTitle: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: '2,5%',
  },
  ingredientsText: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: '2,5%',
  },
  descriptionText: {
    marginTop: 15,
    width: '90%',
    fontSize: 24,
    marginLeft: '2,5%',
  },
  mealTitle: {
    marginTop: 15,
    fontSize: 26,
    marginLeft: '2,5%',
    fontWeight: 'bold',
  },
  imagesView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
  },
})
