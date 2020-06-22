import React, {Component} from 'react';
import {connect} from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class LandingPage extends Component {
    render(){
        const {classes} = this.props;
        return(
            <h1>LANDING PAGE</h1>
        )//end return
    };//end render
};//end LandingPage

// PropTypes allows us to import style.jsx for use
LandingPage.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(LandingPage));