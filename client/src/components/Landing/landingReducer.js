const defaultState = {
  calories:'',
  time:'',
  diet: '',
  exclude:'',
  meals: []
}

export default function landingReducer(state = defaultState, action){
  const { type, payload } = action;
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
        time:  payload.time
      }
    }
    case 'HANDLE_DIET_CHOICE': {
      return {
        ...state,
        diet:  payload.diet
      }
    }
    case 'HANDLE_EXCLUDING': {
      return {
        ...state,
        exclude:  payload.exclude
      }
    }
    case 'HANDLE_ON_SUBMIT_FUFILLED':{
      console.log(payload.data)
      console.log('text')
      return {
        ...state,
        meals: payload.data
      }
    }
    case 'HANDLE_ON_SUBMIT_REJECT':{
      return console.log('error')
    }
    default: {
      return state;
    }
  }
}