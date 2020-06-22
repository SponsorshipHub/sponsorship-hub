import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';


class TEMPLATE extends Component {
    render() {
        const { classes } = this.props;
        return (
            <h1>TEMPLATE</h1>
        )//end return
    };//end render
};//end class

TEMPLATE.propTypes = {classes: PropTypes.object.isRequired};

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(TEMPLATE));