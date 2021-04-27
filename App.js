import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MealSelection from './screens/MealSelection'
import SelaectedMeal from './screens/SelectedMeal'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Meal Selection">
        <Stack.Screen name="Meal Selection" component={MealSelection} />
        <Stack.Screen name="Selected Meal" component={SelaectedMeal} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
