import React, { Component } from 'react';
import { calorie, time, diet, exclude, OnSubmit } from './generatorAction';
import { connect } from 'react-redux';
import axios from 'axios';
import M from 'materialize-css';
import { Select } from 'react-materialize';

class Generator extends Component {
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
  saveMealsToDb = (title) => {
    axios.post('/api/savedMeals', {
      title: title
    })
  }
  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }

  render() {
    return (
      <div className='container'>
        <div className='field'>
          <div style={{ marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
            <label>Would you like a day or a weeks worth of meals?</label>
            <input onChange={this.dayOrWeek} value={this.props.time} type="text" />
          </div>
          <div style={{ marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
            <label>How many Calories would you like to eat?</label>
            <input type="text" value={this.props.calories} onChange={this.calorieIntake} />
          </div>
          <div style={{ marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
            <Select
              id="Select-9"
              multiple={false}
              onChange={this.dietChoice}
              options={{
                classes: '',
                dropdownOptions: {
                  alignment: 'left',
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  coverTrigger: true,
                  hover: false,
                  inDuration: 150,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 250
                }
              }}
              value={this.props.diet}
            >
              <option disabled value="">Choose your type of diet</option>
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
            </Select>
          </div>
          <div style={{ marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
            <label>Anything you want to exclude?</label>
            <input type="text" name="exclude" value={this.props.exclude} onChange={this.excluding} />
          </div>
          <div style={{ marginBottom: 20, marginLeft: 10, marginTop: 20 }} >
            <button onClick={this.onSubmit} type="submit">Generate</button>
          </div>
        </div>
        <div>
          <ul>
            {this.props.meals.map(item => (
              <li><h3>{item.title}</h3> Servings: {item.servings}
                <img src={`https://spoonacular.com/recipeImages/${item.id}-90x90.jpg`} alt="food" />
                <a href={`https://api.spoonacular.com/recipes/${item.id}/ingredientWidget`}>Recipes</a>
                <button onClick={() => this.saveMealsToDb(item.title)}>Save</button>
              </li>
            ))}
          </ul>
          <h2 style={{ marginLeft: 20 }}>Calories: <p>{this.props.nutrients.calories}</p></h2>
          <h2 style={{ marginLeft: 20 }}>Protein: <p>{this.props.nutrients.protein}</p></h2>
          <h2 style={{ marginLeft: 20 }}>Carbs: <p>{this.props.nutrients.carbohydrates}</p></h2>
          <h2 style={{ marginLeft: 20, paddingBottom:20 }}>Fat: <p>{this.props.nutrients.fat}</p></h2>

        </div>
      </div>

    )
  }
}



function mapStoreToProps(store) {
  return {
    calories: store.generator.calories,
    diet: store.generator.diet,
    exclude: store.generator.exclude,
    time: store.generator.time,
    meals: store.generator.meals,
    nutrients: store.generator.nutrients
  }
}

export default connect(mapStoreToProps)(Generator)
