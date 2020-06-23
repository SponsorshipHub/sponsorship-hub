import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, FormControl, MenuItem, Select, InputLabel, Input, TypeDate } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class ResultPage extends Component {

    state = {
        open: false,
        month: '',
        type: '',
        attendance: '',
        sponsorshipCost: '',
        income: ''
    };//end state

    componentDidMount() {
        console.log('ResultPage has been MOUNTED');
    };//end componentDidMount

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* outer grid that wraps all the other grids */}
                <Grid spacing={2}>
                    {/* section that holds the main header */}
                    <Grid className={classes.landHead} item md={12}>
                        <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                    </Grid>
                    {/* section that holds the advanced search filters */}
                    <Box className={classes.box_grey}>
                        <Grid justify="center" spacing={2}>
                            <Grid item xs={12} md={12}><Typography className={classes.landSearchTitle}>Results View</Typography></Grid>
                            {/* location and month selector options */}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={5}><TextField fullWidth={true} label="Location" /></Grid>
                                {/* month selector */}
                                <Grid item xs={12} md={3}>
                                    <InputLabel>start date</InputLabel>
                                    <TextField type="date" />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <InputLabel>end date</InputLabel>
                                    <TextField type="date" />
                                </Grid>
                            </Grid>
                            {/* type and attendance selector options*/}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={5}><TextField fullWidth={true} label="Type" /></Grid>
                                <Grid item xs={12} md={5}><TextField fullWidth={true} label="Attendance" /></Grid>
                            </Grid>
                            {/* sponsorship cost and household income options */}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={5}><TextField fullWidth={true} label="Sponsorship Cost" /></Grid>
                                <Grid item xs={12} md={5}><TextField fullWidth={true} label="Household Income" /></Grid>
                            </Grid>
                            {/* button grid that centers it */}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={1}><Button className={classes.filterBtn} variant="outlined">Filter</Button></Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
ResultPage.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(ResultPage));