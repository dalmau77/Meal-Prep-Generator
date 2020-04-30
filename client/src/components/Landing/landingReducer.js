const defaultState = {
  calories: '',
  time: '',
  diet: '',
  exclude: '',
  meals:[]
}

export default function landingReducer(state = defaultState, action) {
  const { type, payload } = action;
  console.log(type)
  switch (type) {
    case 'HANDLE_CALORIE_INTAKE': {
      return {
        ...state,
        calories: payload.calories
      }
    }
    case 'HANDLE_DAY_OR_WEEK': {
      return {
        ...state,
        time: payload.time
      }
    }
    case 'HANDLE_DIET_CHOICE': {
      return {
        ...state,
        diet: payload.diet
      }
    }
    case 'HANDLE_EXCLUDING': {
      return {
        ...state,
        exclude: payload.exclude
      }
    }
    case 'ON_SUBMIT': {
      console.log(payload)
      return {
        ...state,
        meals: payload.meals
      }
    }
    case 'ON_SUBMIT': {
      return console.log('error')
    }
    default: {
      return state;
    }
  }
}