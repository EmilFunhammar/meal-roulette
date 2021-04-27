import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { getMealsFromApi } from '../UserActions/userACtions'

let acctiveNum = 0

export default function MealSelection({ navigation }) {
  const [mealsById, setMealsById] = useState(['', '', '', ''])

  const refresh = () => {
    acctiveNum += 4
    getMealsFromApi(setMealsById, acctiveNum)
  }

  useEffect(() => {
    getMealsFromApi(setMealsById, acctiveNum)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '81%',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('Selected Meal', {
                itemId: mealsById[0].id,
              })
            }}
          >
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[0].picture}`,
              }}
            />
            <Text style={styles.imagesText}>
              {mealsById[0].title.split(' ').slice(0, 3).join(' ')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Selected Meal', {
                itemId: mealsById[1].id,
              })
            }}
          >
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[1].picture}`,
              }}
            />
            <Text style={styles.imagesText}>
              {' '}
              {mealsById[1].title.split(' ').slice(0, 3).join(' ')}{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('Selected Meal', {
                itemId: mealsById[2].id,
              })
            }}
          >
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[2].picture}`,
              }}
            />
            <Text style={styles.imagesText}>
              {mealsById[2].title.split(' ').slice(0, 3).join(' ')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('Selected Meal', {
                itemId: mealsById[3].id,
              })
            }}
          >
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[3].picture}`,
              }}
            />
            <Text style={styles.imagesText}>
              {mealsById[3].title.split(' ').slice(0, 3).join(' ')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          borderTopColor: 'black',
          borderTopWidth: 2,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            refresh()
          }}
        >
          <View style={styles.refreshButton}>
            <Text style={{ fontSize: 22 }}>Refresh</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  images: {
    height: 180,
    width: 180,
    borderRadius: 20,
  },
  imagesText: {
    fontSize: 18,
    width: 150,
    fontWeight: '600',
  },
  refreshButton: {
    height: 120,
    width: 120,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
})
