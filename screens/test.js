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

export default function Test() {
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
      <Text>emisd</Text>
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
