export function getMealsFromApi(setMeals) {
  return fetch(
    'https://playground.devskills.co/api/rest/meal-roulette-app/meals',
  )
    .then((response) => response.json())
    .then((json) => {
      setMeals(json.meal_roulette_app_meals)
    })
    .catch((error) => {
      console.error(error)
    })
}

export function getMealsFromApiById(setMealsById, acctiveNum) {
  return fetch(
    'https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/4/offset/' +
      ac,
  )
    .then((response) => response.json())
    .then((json) => {
      console.log('här')

      setMealsById(json.meal_roulette_app_meals_aggregate.nodes)
    })
    .catch((error) => {
      console.error(error)
    })
}
