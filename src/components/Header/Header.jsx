import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Header extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (<>
            <Box className={classes.header}>
                <Box className={classes.header_spacing}>Sponsorship Hub</Box>
            </Box>
            
            {/* <Grid><img src="../images/header_darker.jpg" width="100%" /></Grid> */}
        </>)//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Header.propTypes = {classes: PropTypes.object.isRequired};

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(Header));