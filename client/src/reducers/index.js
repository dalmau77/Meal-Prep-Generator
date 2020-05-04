import { combineReducers } from 'redux';
import authReducer from './authReducer';
import generatorReducer from '../components/Generator/generatorReducer';

export default combineReducers({
  auth: authReducer,
  generator: generatorReducer,
})
