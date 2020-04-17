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
// export function OnSubmit(calories, time, diet, exclude) {
//   return {
//     type: 'HANDLE_ON_SUBMIT',
//     payload: {
//       calories: calories,
//       time: time,
//       diet: diet,
//       exclude: exclude
//     }
//   }
// }
