import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class ResultPage extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* outer grid that wraps all the other grids */}
                <Box>
                    {/* section that holds the main header */}
                    <Grid className={classes.landHead} item md={12}>
                        <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                    </Grid>
                    {/* section that holds the advanced search filters */}
                    <Box className={classes.box_grey}>
                        {/* first 3 inputs */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item md={12}><Typography className={classes.landSearchTitle}>Results View</Typography></Grid>
                            <Grid item xs={12} md={3}><TextField fullWidth={true} label="Location" /></Grid>
                            <Grid item xs={12} md={3}><TextField fullWidth={true} label="Month" /></Grid>
                            <Grid item xs={12} md={3}><TextField fullWidth={true} label="Type" /></Grid>
                            <Grid/>
                            {/* second batch of inputs */}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={3}><TextField fullWidth={true} label="Attendance" /></Grid>
                                <Grid item xs={12} md={3}><TextField fullWidth={true} label="Sponsorship Cost" /></Grid>
                                <Grid item xs={12} md={3}><TextField fullWidth={true} label="Household Income" /></Grid>
                            </Grid>
                            <Grid container justify="center">
                            <Grid item xs={12} md={1}><Button variant="outlined">Filter</Button></Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
ResultPage.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(ResultPage));