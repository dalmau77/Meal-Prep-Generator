import React, { Component } from 'react';
import { calorie, time, diet, exclude, OnSubmit } from './landingAction';
import { connect } from 'react-redux';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.calorieIntake = this.calorieIntake.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

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
    const { dispatch } = this.props;
    dispatch(OnSubmit(this.props.time, this.props.calories, this.props.diet, this.props.exclude))
  }
 
  render() {
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
        <div>
         
        </div>
      </div>

    )
  }
}



function mapStoreToProps(store) {
  return {
    calories: store.landing.calories,
    diet: store.landing.diet,
    exclude: store.landing.exclude,
    time: store.landing.time,
    meals: store.landing.meals
  }
}

export default connect(mapStoreToProps)(Landing)
