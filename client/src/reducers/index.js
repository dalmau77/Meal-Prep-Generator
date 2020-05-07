import { combineReducers } from 'redux';
import authReducer from './authReducer';
import generatorReducer from '../components/Generator/generatorReducer';
import savedMealReducer from './savedMealReducer'

export default combineReducers({
  auth: authReducer,
  generator: generatorReducer,
  savedMeals: savedMealReducer
})

