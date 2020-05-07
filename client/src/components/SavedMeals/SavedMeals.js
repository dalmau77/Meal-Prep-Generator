import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMeals } from '../../actions'


class SavedMeals extends Component {
  componentDidMount() {
    this.props.fetchMeals()
  }
  renderMeals() {
    console.log(fetchMeals)

    return this.props.savedMeals.map(meal => {
      return (
        <div key={meal._id} className='card darken-1'>
          <div className='card-content'>
            <span className='card-title'>
              {meal.title}
            </span>
            <div>
              <img src={`https://spoonacular.com/recipeImages/${meal.MealID}-90x90.jpg`} alt="food" />
            </div>
            <a href={`https://api.spoonacular.com/recipes/${meal.MealID}/ingredientWidget`}>Recipes</a>
          </div>
        </div>

      )
    })
  }



  render() {
    return (
      <div>
        {this.renderMeals()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { savedMeals: state.savedMeals }
}

export default connect(mapStateToProps, { fetchMeals })(SavedMeals)