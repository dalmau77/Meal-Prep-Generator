import Axios from "axios"


export function calorie(calories) {
  return {
    type: 'HANDLE_CALORIE_INTAKE',
    payload: { calories }
  }
}

export function time(time) {
  return {
    type: 'HANDLE_DAY_OR_WEEK',
    payload: { time }
  }
}

export function diet(diet) {
  return {
    type: 'HANDLE_DIET_CHOICE',
    payload: { diet }
  }
}

export function exclude(exclude) {
  return {
    type: 'HANDLE_EXCLUDING',
    payload: { exclude }
  }
}


export function OnSubmit(time, calories, diet, exclude) {

  return function action(dispatch) {
    dispatch({ type: 'ON_SUBMIT' })
    const request = Axios(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${time}&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "effe5e8d05msh6027af72dedf0d8p177413jsn9bbeeec1a90a"
      },
      time: time,
      calories: calories,
      diet: diet,
      exclude: exclude
    })
  return request.then(
    res => dispatch({
      type:'ON_SUBMIT_SUCCESS',
      payload: res.data
    }),
    err => dispatch({
      type: 'ON_SUBMIT_ERROR',
      payload: err
    })
  );
}
}




