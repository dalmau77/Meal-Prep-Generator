import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login With Google</a></li>
        )
      default:
        return [
          <li key='3'><a href='/saved-meals'>Saved Meals</a></li>,
          <li key='2'><a href='/api/logout'>Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper blue'>
          <Link
            key={1}
            to={this.props.auth ? '/meal-generator' : '/'}
            className='left brand-logo'>
            Meal-Generator
         </Link>
          <ul className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
