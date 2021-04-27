import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { getMealsFromApiById } from '../UserActions/userACtions'

export default function MealSelection() {
  const [mealsById, setMealsById] = useState(['', '', '', ''])
  const [num, setNum] = useState(0)

  const refresh = () => {
    let acctiveNum = num
    setNum((prev) => prev + 4)
    getMealsFromApiById(setMealsById, acctiveNum)
  }

  useEffect(() => {
    getMealsFromApiById(setMealsById, num)
    setNum((prev) => prev + 4)
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
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[0].picture}`,
              }}
            />
            <Text
              style={styles.imagesText}
              onPress={() => {
                console.log('emil press', mealsById[0].id)
              }}
            >
              {mealsById[0].title}
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[1].picture}`,
              }}
            />
            <Text style={styles.imagesText}> {mealsById[1].title} </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[2].picture}`,
              }}
            />
            <Text style={styles.imagesText}>{mealsById[2].title}</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.images}
              source={{
                uri: `${mealsById[3].picture}`,
              }}
            />
            <Text
              style={styles.imagesText}
              onPress={() => {
                console.log('id 3', mealsById[3].title)
              }}
            >
              {mealsById[3].title}
            </Text>
          </View>
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
            width: '100%',
            height: '100%',
          }}
          onPress={() => {
            refresh()
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,
              backgroundColor: 'gray',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
          >
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
  button: {
    position: 'absolute',
    top: '50%',
  },
  images: {
    height: 150,
    width: 150,
  },
  imagesText: {
    fontSize: 16,
    width: 100,
  },
})
