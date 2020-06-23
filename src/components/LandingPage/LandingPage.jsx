import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Paper, CardMedia, Card, CardContent, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class LandingPage extends Component {

    state = {
        month: '',
        open: false
    };//end state

    componentDidMount() {
        console.log('Landing Page has been MOUNTED');
    };//end componentDidMount

    handleSearch = () => {
        console.log('search on Landing Page has been clicked');
        // on click of the search button, the user will be taken to the results view page
        this.props.history.push('/results');
    };//end handleSearch

    handleOpen = () => {
        this.setState({
            open: true
        })
    };//end handleOpen

    handleClose = () => {
        this.setState({
            open: false
        })
    };// handleClose

    handleChange = (event) => {
        this.setState({
            month: event.target.value
        })
    };//end handleChange

    render() {
        const { classes } = this.props;
        return (
            <Box>
                {/* outer grid for landing page */}
                <Grid spacing={2}>
                    {/* top section that holds media image */}
                    {/* <CardMedia image="" title="" height="500px" width="500px"> */}
                    <Box className={classes.landHead}>
                        <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                    </Box>
                    {/* section to hold search inputs */}
                    <Box className={classes.box_grey}>
                        <Box className={classes.landMargin}>
                            <Grid container item md={12} spacing={2}>
                                <Grid item md={12}><Typography className={classes.landSearchTitle}>Search Events</Typography></Grid>
                                <Grid item md={2}></Grid>
                                <Grid item md={4}><TextField fullWidth={true} label="Location" /></Grid>
                                {/* begin month selector */}
                                <FormControl className={classes.formControl}>
                                    <InputLabel style={{marginLeft: '10%'}} >Select Month</InputLabel>
                                    <Select variant="outlined" open={this.state.open} onClose={this.handleClose} onOpen={this.handleOpen} value={this.state.month} onChange={(event) => this.handleChange(event)}>
                                        <MenuItem value={1}><em>January</em></MenuItem>
                                        <MenuItem value={2}><em>February</em></MenuItem>
                                        <MenuItem value={3}><em>March</em></MenuItem>
                                        <MenuItem value={4}><em>April</em></MenuItem>
                                        <MenuItem value={5}><em>May</em></MenuItem>
                                        <MenuItem value={6}><em>June</em></MenuItem>
                                        <MenuItem value={7}><em>July</em></MenuItem>
                                        <MenuItem value={8}><em>August</em></MenuItem>
                                        <MenuItem value={9}><em>September</em></MenuItem>
                                        <MenuItem value={10}><em>October</em></MenuItem>
                                        <MenuItem value={11}><em>November</em></MenuItem>
                                        <MenuItem value={12}><em>December</em></MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid item md={4}><Button className={classes.searchBtn} variant="outlined" onClick={this.handleSearch}>Search</Button></Grid>
                                <Grid item md={2}></Grid>
                            </Grid>
                        </Box>
                    </Box>
                    {/* section to hold featured events */}
                    <Box className={classes.landMargin}>
                        <Grid container item md={12} spacing={2}>
                            <Grid item md={12}><Typography className={classes.landSearchTitle}>Featured Events</Typography></Grid>
                            <Grid container item md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography>FEATURE 1</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid container item md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography>FEATURE 2</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid container item md={4}>
                                <Card>
                                    <CardContent>
                                        <Typography>FEATURE 3</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end LandingPage

// PropTypes allows us to import style.jsx for use
LandingPage.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(LandingPage));