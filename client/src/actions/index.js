import axios from 'axios'
import { FETCH_USER, FETCH_MEALS } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
};

export const fetchMeals = () => async dispatch => {
  const res = await axios.get('/api/savedMeals');

  dispatch({ type: FETCH_MEALS, payload: res.data })
}
