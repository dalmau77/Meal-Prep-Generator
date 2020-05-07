import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Generator from './Generator/Generator';
import Landing from './Landing/Landing'
import SavedMeals from './SavedMeals/SavedMeals'

// const Dashboard = () => <h2>Dashboard</h2>



class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Route exact path='/meal-generator' component={Generator} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/saved-meals' component={SavedMeals} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default connect(null, actions)(App);
