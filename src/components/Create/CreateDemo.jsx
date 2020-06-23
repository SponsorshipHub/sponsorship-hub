import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateDemo extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                <Typography align="center" variant="h2">Enter Demographics</Typography>
                <Box className={classes.box_grey}>
                    <Grid></Grid>
{/* Gender */}

                </Box>
                <Box>
{/* Household Income */}
                </Box>
                <Box className={classes.box_grey}>
{/* Age Range */}
                </Box>
                <Box>
{/* Residency */}
                </Box>
            </Box>
            
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateDemo.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateDemo));