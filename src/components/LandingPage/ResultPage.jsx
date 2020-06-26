import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, FormControl, MenuItem, Select, InputLabel, Card, CardContent, CardMedia } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class ResultPage extends Component {

    state = {
        openType: false,
        type: '',
        state: null,
        startD: null,
        endD: null,
        minAttend: null,
        maxAttend: null,
        minSponsorPrice: null,
        maxSponsorPrice: null
    };//end state

    componentDidMount() {
        document.title = "Sponsorship Hub - Results"; // Sets browser's title
        console.log('ResultPage has been MOUNTED');
        // get our event types
        this.props.dispatch({ type: 'FETCH_EVENT_TYPES' });
    };//end componentDidMount

    handleOpen = () => {
        this.setState({ openType: true })
    };//end handleOpen

    handleClose = () => {
        this.setState({ openType: false })
    };// handleClose

    handleType = (event) => {
        this.setState({ type: event.target.value })
    };//end handleChange

    handleAttendance = (event) => {
        this.setState({ type: event.target.value })
    };//end handleAttendance

    // handleEvent allows the user to go to the page of the event on click
    handleEvent = (events) => {
        console.log('take me to the event', events);
        this.props.history.push(`/event/${events.id}`)
    };//end handleEvent

    //handleState allows the user to type in a state search
    handleState = (event) => {
        console.log('changing State in advanced search:', event.target.value);
        //change value of state in our states
        this.setState({ state: event.target.value })
    };//end handleState

    //handleStartD allows user to type select start date
    handleStartD = (event) => {
        console.log('selected START date:', event.target.value);
        // change the data of startD
        this.setState({ startD: event.target.value });
    };//end handleStartD

    //handleEndD allows user to type select end date
    handleEndD = (event) => {
        console.log('selected END date:', event.target.value);
        // change the data of endD
        this.setState({ endD: event.target.value });
    };//end handleStartD

    //handleType allows user to select type value which is a number
    handleType = (event) => {
        console.log('changing the event type:', event.target.value);
        this.setState({ type: event.target.value })
    };//end handleType

    //handleMinAttend allows user to select minimum amount of attendees
    handleMinAttend = (event) => {
        console.log('changing minimum attendee:', event.target.value);
        this.setState({ minAttend: event.target.value });
    };//end handleMinAttend

    //handleMaxAttend allows user to select maximum amount of attendees
    handleMaxAttend = (event) => {
        console.log('changing maximum attendee:', event.target.value);
        this.setState({ maxAttend: event.target.value });
    };//end handleMaxAttend

    //handleMinSponsorPrice allows user to select minimum sponsorship price
    handleMinSponsorPrice = (event) => {
        console.log('changing minimum sponsorship price:', event.target.value);
        this.setState({ minSponsorPrice: event.target.value });
    };//end handleMinSponsorPrice

    //handleMinSponsorPrice allows user to select maximum sponsorship price
    handleMaxSponsorPrice = (event) => {
        console.log('changing maximum sponsorship price:', event.target.value);
        this.setState({ maxSponsorPrice: event.target.value });
    };//end handleMaxSponsorPrice

    /// waiting for karl /// HOUSE HOLD INCOME SEARCH


    //handleFilter will filter the adv search
    handleFilter = () => {
        console.log('clicked on filter for advanced search');
        this.props.dispatch({ type: 'FETCH_ADV_RESULTS', payload: this.state});
    };//end handleFilter

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* temporary header */}
                <Grid className={classes.landHead} item md={12}>
                    <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                </Grid>
                {/* section that holds the advanced search filters */}
                <Box className={classes.box_grey}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12} md={10}><Typography className={classes.landSearchTitle}>Advanced Search</Typography></Grid>
                        {/* state and month selector options */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} md={4}><TextField onChange={(event) => this.handleState(event)} defaultValue={this.props.match.params.state} fullWidth={true} label="State" /></Grid>
                            {/* month selector with date text fields */}
                            <Grid item xs={12} md={2}>
                                <InputLabel>search start date</InputLabel>
                                <TextField onChange={(event) => this.handleStartD(event)} defaultValue={this.props.match.params.startDate} type="date" />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <InputLabel>search end date</InputLabel>
                                <TextField onChange={(event) => this.handleEndD(event)} defaultValue={this.props.match.params.endDate} type="date" />
                            </Grid>
                        </Grid>

                        {/* type and attendance selector options*/}
                        <Grid container justify="center">
                            {/* begin TYPE selector option */}
                            <Grid item xs={12} md={4}>
                                <InputLabel>Type</InputLabel>
                                <FormControl className={classes.advSearch} fullWidth={true}>
                                    <Select variant="outlined" open={this.state.open} onClose={this.handleClose} onOpen={this.handleOpen} value={this.state.type} onChange={(event) => this.handleType(event)}>
                                    {this.props.types.map(types => 
                                            <MenuItem key={types.id} value={types.type}><em>{types.type}</em></MenuItem>
                                    )}
                                    </Select>
                                </FormControl>
                            </Grid> {/* END TYPE SELECTOR */}
                            {/* begin ATTENDANCE selector */}
                            <Grid item xs={12} md={2} className={classes.advSearch}>
                                <TextField onChange={(event) => this.handleMinAttend(event)} label="Min Attendees" />
                            </Grid>
                            <Grid item xs={12} md={2} className={classes.advSearch}>
                                <TextField onChange={(event) => this.handleMaxAttend(event)} label="Max Attendees" />
                            </Grid>
                            {/* END ATTENDANCE SELECTOR */}
                        </Grid>

                        {/* sponsorship cost and household income options */}
                        <Grid container justify="center" spacing={2}>
                            {/* begin SPONSORSHIP PRICE selector */}
                            <Grid item xs={12} md={2}>
                                <TextField onChange={(event) => this.handleMinSponsorPrice(event)} fullWidth={true} label="Min Sponsorship Price" />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField onChange={(event) => this.handleMaxSponsorPrice(event)} fullWidth={true} label="Max Sponsorship Price" />
                            </Grid>
                            {/* END SPONSORSHIP PRICE SELECTOR */}
                            <Grid item xs={12} md={4}><TextField fullWidth={true} label="Household Income" /></Grid>
                        </Grid>
                        {/* button grid that centers it */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} md={1}><Button onClick={this.handleFilter} className={classes.filterBtn} variant="outlined">Filter</Button></Grid>
                        </Grid>
                    </Grid>
                    {/* END ADVANCED FILTER */}
                </Box>
                {/* BEGIN RESULTS VIEW */}
                {/* section that holds mapped EVENTS */}
                <Box bm={2}>
                    <Typography variant="h4" align="center">Events</Typography>
                    {/* BEGIN GRID */}
                    <Grid container justify="space-evenly">
                        {this.props.results.map(events =>
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
                {/* END RESULTS DISPLAY */}
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
ResultPage.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    results: reduxState.results,
    types: reduxState.eventType
});
export default connect(putStateOnProps)(withStyles(styles)(ResultPage));