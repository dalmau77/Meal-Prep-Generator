import React, { Component } from 'react';
import { calorie, time, diet, exclude } from './landingAction';
import { connect } from 'react-redux';
import Axios from 'axios';
import qs from 'qs'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.calorieIntake = this.calorieIntake.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  // inputValues({ input, label, meta }) {

  //   return (
  //     <div>
  //       <label>{label}</label>
  //       <input {...input} />
  //     </div>
  //   )
  // }
  calorieIntake = e => {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(calorie(value));
  }
  dayOrWeek = e => {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(time(value));
  }
  dietChoice = e => {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(diet(value));
  }
  excluding = e => {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(exclude(value));
  }
  onSubmit = () => {

    // const data = {
    //   timeFrame: this.props.time,
    //   targetCalories: this.props.calories,
    //   diet: this.props.diet,
    //   exclude: this.props.exclude
    // }
    // console.log(data)
    const options = {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "effe5e8d05msh6027af72dedf0d8p177413jsn9bbeeec1a90a"
      },
      // data: qs.stringify(data),
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${this.props.time}&targetCalories=${this.props.calories}&diet=${this.props.diet}&exclude=${this.props.exclude}`
    };
    Axios(options)
      .then(res => console.log(res.data)
      )
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    const meals = this.props
    return (
      <div style={{ alignContent: 'right' }}>
        <div>
          <label>Would you like a day or a weeks worth of meals?</label>
          <input onChange={this.dayOrWeek} value={this.props.time} type="text" />
          <label>How many Calories would you like to eat?</label>
          <input type="text" value={this.props.calories} onChange={this.calorieIntake} />
          <label>What type of diet would you like to use?</label>
          <select name="diet_type" value={this.props.diet} onChange={this.dietChoice} >
            <option value="low carb">Low Carb</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescetarian">Pescetarian</option>
            <option value="gluten free">Gluten Free</option>
            <option value="grain free">Grain Free</option>
            <option value="grain free high protein">Grain Free High Protein</option>
            <option value="low sodium">Low Sodium</option>
            <option value="Paleo">Paleo</option>
            <option value="Primal">Primal</option>
            <option value="FODMAP">FODMAP</option>
            <option value="Whole 30">Whole 30</option>
          </select>
          <label>anything you want to exclude</label>
          <input type="text" name="exclude" value={this.props.exclude} onChange={this.excluding} />
          <button onClick={this.onSubmit} type="submit">Generate</button>
        </div>
      </div>

    )
  }
}

// const validate = formValues => {
//   const errors = {};
//   if (!formValues.time) {
//     errors.time = 'you must enter either a day or a week'
//   }
//   if (!formValues.calories) {
//     errors.calories = 'you must enter a calorie amount'
//   }
//   return errors
// }

function mapStoreToProps(store) {
  console.log(store)
  return {
    calories: store.landing.calories,
    diet: store.landing.diet,
    exclude: store.landing.exclude,
    time: store.landing.time
  }
}

export default connect(mapStoreToProps)(Landing)
