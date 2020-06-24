import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Card, CardContent, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
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
        this.props.dispatch({ type: 'FETCH_LANDING' })
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
                {/* temporary header */}
                <Box className={classes.landHead}>
                    <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                    <Button className={classes.btn_submit} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>
                </Box>

                {/* section to hold search inputs */}
                <Box className={classes.box_grey}>
                    <Box className={classes.landMargin}>
                        <Grid item xs={12} md={12}><Typography className={classes.landSearchTitle}>Search Events</Typography></Grid>
                        {/* grid that wraps location and selector */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} md={4}><TextField fullWidth={true} label="Location" /></Grid>
                            {/* begin month selector option */}
                            <Grid item xs={12} md={2}>
                                <FormControl className={classes.formControl} fullWidth={true}>
                                    <InputLabel style={{ marginLeft: '10%' }} >Select Month</InputLabel>
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
                            </Grid>
                            {/* button search grid */}
                            <Grid item xs={12} md={2}><Button variant="outlined" onClick={this.handleSearch}>Search</Button></Grid>
                        </Grid>
                    </Box>

                    {/* section to hold featured events */}
                    <Box className={classes.landMargin}>
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={12} md={12}><Typography className={classes.landSearchTitle}>Featured Events</Typography></Grid>
                            <Grid container xs={12} item md={4}>
                                <Card onClick={() => this.props.history.push('/event/1')}>
                                    <CardContent>
                                        <Typography>FEATURE 1</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Card>
                                    <CardContent>
                                        <Typography>FEATURE 2</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Card>
                                    <CardContent>
                                        <Typography>FEATURE 3</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* end grid that wraps features */}
                </Box>
            </Box>
        )//end return
    };//end render
};//end LandingPage

// PropTypes allows us to import style.jsx for use
LandingPage.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    reduxState
});

export default connect(putStateOnProps)(withStyles(styles)(LandingPage));