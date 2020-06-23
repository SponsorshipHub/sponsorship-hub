import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, FormControl, MenuItem, Select, InputLabel, Input, TypeDate, Card, CardContent } from '@material-ui/core';
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


    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* section that holds the main header */}
                <Grid className={classes.landHead} item md={12}>
                    <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                </Grid>
                {/* section that holds the advanced search filters */}
                <Box className={classes.box_grey}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12} md={12}><Typography className={classes.landSearchTitle}>Results View</Typography></Grid>
                        {/* location and month selector options */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} md={6}><TextField fullWidth={true} label="Location" /></Grid>
                            {/* month selector with date text fields */}
                            <Grid item xs={12} md={2}>
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
                            {/* begin TYPE selector option */}
                            <Grid item xs={12} md={6}>
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
                                <TextField label="MIN attendees" />
                            </Grid>
                            <Grid item xs={12} md={2} className={classes.advSearch}>
                                <TextField label="MAX attendees" />
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
                            <Grid item xs={12} md={2}></Grid>
                            {/* END SPONSORSHIP PRICE SELECTOR */}
                            <Grid item xs={12} md={4}><TextField fullWidth={true} label="Household Income" /></Grid>
                        </Grid>
                        {/* button grid that centers it */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} md={1}><Button className={classes.filterBtn} variant="outlined">Filter</Button></Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* END ADVANCED FILTER */}
                {/* BEGIN RESULTS DISPLAY */}
                <Box>
                    {/* origin grid wrapper */}
                    <Grid container spacing={2}>
                        <Grid item md={12}><Typography className={classes.landSearchTitle}>RESULTS</Typography></Grid>
                        <Grid item md={4}>
                            <Card onClick={()=>this.props.history.push('/event')}>
                                <CardContent>
                                    <Typography>FEATURE</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                          <Grid item md={4}>
                            <Card>
                                <CardContent>
                                    <Typography>FEATURE</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card>
                                <CardContent>
                                    <Typography>FEATURE</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    {/* end original grid wrapper */}
                </Box>
                {/* END RESULTS DISPLAY */}
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
ResultPage.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(ResultPage));