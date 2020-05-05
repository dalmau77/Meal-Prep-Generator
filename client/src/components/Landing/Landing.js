import React, { Component } from 'react'
import Axios from 'axios';


class Landing extends Component {
  getinfo() {
    Axios.get('/savedMeals', (req, res) => {
      console.log(req.body)
    })
  }
  render() {
    return (
      <div>
        landing
        
      </div>
    )
  }

}
export default Landing;
