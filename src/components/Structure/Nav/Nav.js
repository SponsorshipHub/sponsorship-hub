import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <Link to="/home">
          <img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="55vh" alt="Sponsorship Hub Logo"/>
          {/* <h2 className="nav-title">Sponsorship Hub</h2> */}
        </Link>
        <div className="nav-right">
          <Link className="nav-link" to="/home/login">
            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? <Button color="primary">Home</Button> : <Button color="primary">Login / Register</Button>}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {this.props.user.access_level === 3 && <Button color="primary">Admin</Button>}
          {this.props.user.id && (
            <>
              {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}
              <Button color="primary" onClick={()=>this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>
              {/* <LogOutButton className="nav-link" /> */}
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
