import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd'



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
        return <li><a href='/api/logout'>Logout</a></li>
    }

  }

  render() {
    return (
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          style={{ backgroundColor: '#003a8c' }}
          ghost={false}
          onBack={() => window.history.back()}
          title="Meal Prep Generator"

          extra={[
            <Link
              to={this.props.user ? '/surveys' : '/'}
              className='left brand-logo'>
              Generator
          </Link>,
            <Button style={{ backgroundColor: '#a8071a' }} key="1" type="primary" >
              {this.renderContent()}
            </Button>
          ]}
        ></PageHeader>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
