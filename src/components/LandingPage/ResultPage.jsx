import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, FormControl, MenuItem, Select, InputLabel, Input, TypeDate, Card, CardContent, CardMedia } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class ResultPage extends Component {

    state = {
        openType: false,
        month: '',
        type: '',
        minAttend: 0,
        maxAttend: 0,
        sponsorPriceMin: 0,
        sponsorPriceMax: 0,
        income: 0
    };//end state

    componentDidMount() {
        console.log('ResultPage has been MOUNTED');
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
                                <Grid item xs={12} md={4}><TextField fullWidth={true} label="state" /></Grid>
                                {/* month selector with date text fields */}
                                <Grid item xs={12} md={2}>
                                    <InputLabel>search start date</InputLabel>
                                    <TextField type="date" />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <InputLabel>search end date</InputLabel>
                                    <TextField type="date" />
                                </Grid>
                            </Grid>

                            {/* type and attendance selector options*/}
                            <Grid container justify="center">
                                {/* begin TYPE selector option */}
                                <Grid item xs={12} md={4}>
                                    <FormControl className={classes.advSearch} fullWidth={true}>
                                        <InputLabel>Type</InputLabel>
                                        <Select variant="outlined" open={this.state.open} onClose={this.handleClose} onOpen={this.handleOpen} value={this.state.type} onChange={(event) => this.handleType(event)}>
                                            <MenuItem value={1}><em>Auto Show</em></MenuItem>
                                            <MenuItem value={2}><em>Motorcycle Rally</em></MenuItem>
                                            <MenuItem value={3}><em>Art Festival</em></MenuItem>
                                            <MenuItem value={4}><em>City Festival</em></MenuItem>
                                            <MenuItem value={5}><em>Film Festival</em></MenuItem>
                                            <MenuItem value={6}><em>Beer Festival</em></MenuItem>
                                            <MenuItem value={7}><em>Music Festival</em></MenuItem>
                                            <MenuItem value={8}><em>Cultural Festival</em></MenuItem>
                                            <MenuItem value={9}><em>Street Market Fest</em></MenuItem>
                                            <MenuItem value={10}><em>Food & Wine Festival</em></MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid> {/* END TYPE SELECTOR */}
                                {/* begin ATTENDANCE selector */}
                                <Grid item xs={12} md={2} className={classes.advSearch}>
                                    <TextField label="Min Attendees" />
                                </Grid>
                                <Grid item xs={12} md={2} className={classes.advSearch}>
                                    <TextField label="Max Attendees" />
                                </Grid>
                                {/* END ATTENDANCE SELECTOR */}
                            </Grid>

                            {/* sponsorship cost and household income options */}
                            <Grid container justify="center" spacing={2}>
                                {/* begin SPONSORSHIP PRICE selector */}
                                <Grid item xs={12} md={2}>
                                    <TextField fullWidth={true} label="Min Sponsorship Price" />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextField fullWidth={true} label="Max Sponsorship Price" />
                                </Grid>
                                {/* END SPONSORSHIP PRICE SELECTOR */}
                                <Grid item xs={12} md={4}><TextField fullWidth={true} label="Household Income" /></Grid>
                            </Grid>
                            {/* button grid that centers it */}
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} md={1}><Button className={classes.filterBtn} variant="outlined">Filter</Button></Grid>
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
    results: reduxState.results
});
export default connect(putStateOnProps)(withStyles(styles)(ResultPage));