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
                <Grid container spacing={2} item md={12}>
                    {/* section that holds the main header */}
                    <Grid className={classes.landHead} item md={12}>
                        <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                    </Grid>
                    {/* section that holds the advanced search filters */}
                    <Grid container item md={12}>
                        <Grid item md={12}><Typography className={classes.landSearchTitle}>Results View</Typography></Grid>
                        <Grid item md={6}><TextField label="Location"/></Grid>
                        <Grid item md={6}><TextField label="Month" /></Grid>
                        <Grid item md={6}><TextField label="Type" /></Grid>
                        <Grid item md={6}><TextField label="Attendance" /></Grid>
                        <Grid item md={6}><TextField label="Sponsorship Cost" /></Grid>
                        <Grid item md={6}><TextField label="Household Income" /></Grid>
                        <Grid item md={6}><Button variant="outlined">Filter</Button></Grid>
                    </Grid>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
ResultPage.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(ResultPage));