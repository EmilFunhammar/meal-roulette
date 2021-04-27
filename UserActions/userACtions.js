export function getMealFromApiById(setMeal, itemId) {
  return fetch(
    'https://playground.devskills.co/api/rest/meal-roulette-app/meals/' +
      itemId,
  )
    .then((response) => response.json())
    .then((json) => {
      setMeal(json.meal_roulette_app_meals_by_pk)
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
}

export function getMealsFromApi(setMealsById, acctiveNum) {
  return fetch(
    'https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/4/offset/' +
      acctiveNum,
  )
    .then((response) => response.json())
    .then((json) => {
      setMealsById(json.meal_roulette_app_meals_aggregate.nodes)
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
}
