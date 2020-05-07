import React, { Component } from 'react'
import Axios from 'axios';

export default class SavedMeals extends Component {

  getData(){
    Axios.get('/api/savedMeals') 
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        saved meals
        {this.getData()}
      </div>
    )
  }
}
