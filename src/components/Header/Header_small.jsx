import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, CardMedia, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Header_small extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <>
                <Box className={classes.header_small}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box style={{ textAlign: "center" }}>
                                <Typography className={classes.header_text_small}>Sponsorship Hub</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Header_small.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(Header_small));