import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Card, CardContent, FormControl, MenuItem, Select, InputLabel, CardMedia } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class LandingPage extends Component {

    state = {
        startDate: 'null',
        endDate: 'null',
        state: 'null',
    };//end state

    componentDidMount() {
        console.log('Landing Page has been MOUNTED');
        // on landing page load, get our data for the featured events
        this.props.dispatch({ type: 'FETCH_LANDING' });
        // default our results so when we click back from a featured events results page shows data
        this.props.dispatch({ type: 'FETCH_DEFAULT_RESULTS' });
    };//end componentDidMount

    handleSearch = () => {
        console.log('search on Landing Page has been clicked');
        //IF STATEMENT SO THAT THEY DO BOTH START AND END DATE IF SELECTED
        if (this.state.startDate !== 'null' && this.state.endDate === 'null') {
            alert('Please fill in both date inputs');
            return
        } else if (this.state.endDate !== 'null' && this.state.startDate === 'null'){
            alert('Please fill in both date inputs');
            return
        };//end if statement
        // on click of the search button, the user will be taken to the results view page
        this.props.history.push('/results');
        // send our inputs to our results view page
        this.props.dispatch({ type: 'FETCH_RESULTS', payload: this.state })
    };//end handleSearch

    //handles state input change
    handleState = (event) => {
        console.log('setting input for state', event.target.value);
        this.setState({ state: event.target.value });
    };//end handle state

    //handle start and end date selectors
    handleStart = (event) => {
        console.log('selected START date:', event.target.value);
        // change the data of startDate
        this.setState({ startDate: event.target.value });
    };//end handleStart
    handleEnd = (event) => {
        console.log('selected END date:', event.target.value);
        // change the data of endDate
        this.setState({ endDate: event.target.value });
    };//end handleEnd

    // handleEvent allows the user to go to the page of the event on click
    handleEvent = (events) => {
        console.log('take me to the event', events);
        this.props.history.push(`/event/${events.id}`)
    };//end handleEvent

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
                        <Grid container justify="center">
                            {/* location and month selector options */}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={4}><TextField fullWidth={true} label="State" onChange={(event) => this.handleState(event)} /></Grid>

                                {/* month selector with date text fields */}
                                <Grid item xs={12} md={2}>
                                    <InputLabel>start date</InputLabel>
                                    <TextField type="date" onChange={(event) => this.handleStart(event)} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <InputLabel>end date</InputLabel>
                                    <TextField type="date" onChange={(event) => this.handleEnd(event)} />
                                </Grid>
                            </Grid>
                            {/* end location and month selector */}
                            {/* button search grid */}
                            <Grid item xs={12} md={1}><Button className={classes.advSearch} variant="outlined" onClick={this.handleSearch}>Search</Button></Grid>
                        </Grid>
                    </Box>
                </Box>

                {/* section that holds mapped EVENTS */}
                <Box bm={2}>
                    <Typography variant="h4" align="center">Featured Events</Typography>
                    {/* BEGIN GRID */}
                    <Grid container justify="space-evenly">
                        {this.props.landing.map(events =>
                            <Box key={events.id}>
                                <Card variant="outlined" className={classes.landCard} onClick={(event) => this.handleEvent(events)}>
                                    <CardContent>
                                        <CardMedia className={classes.landMedia} component="img" image={events.event_image_url} title={events.event_name} />
                                    </CardContent>
                                    <CardContent>
                                        <Typography>{events.event_name}</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        )}
                        {/* end of mapping for landing page GET */}
                    </Grid>
                </Box>
                {/* end of mapped data */}
            </Box>
            // Box that wraps page
        )//end return
    };//end render
};//end LandingPage

// PropTypes allows us to import style.jsx for use
LandingPage.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    reduxState,
    landing: reduxState.landing,
});

export default connect(putStateOnProps)(withStyles(styles)(LandingPage));