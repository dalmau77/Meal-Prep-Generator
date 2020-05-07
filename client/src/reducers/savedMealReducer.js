import { FETCH_MEALS } from '../actions/types';

export default function (state = [], action) {
  console.log(action.payload, 'reducer')
  switch (action.type) {
    case FETCH_MEALS:
      return action.payload;
    default:
      return state;
  }
}