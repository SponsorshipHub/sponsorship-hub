import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { TextField, InputLabel, Select, MenuItem, Grid, Paper, Typography, Input, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateEvent extends Component {
    state = {newVenue: true}

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                <h1>Create Event</h1>
                <Grid container spacing={2}>

                    <Grid container item md={12}>
                        <Grid item md={3}></Grid>
                        <Grid item md={3}>
                            <TextField inputProps={{ maxLength: 255 }} label="Event Name" placeholder="Name of the Event" />
                        </Grid>
                        <Grid item md={3}>
                            <Grid item md={6}>
                                <TextField fullWidth={true} inputProps={{ min: 1800, max: 2200 }} type="number" label="Year Established" placeholder="#" />
                            </Grid>
                        </Grid>
                        <Grid item md={3}></Grid>
                    </Grid>

                    <Grid container item md={12}>
                        <Grid item md={3}></Grid>
                        <Grid item md={3}>
                            <TextField label="Start Date" placeholder="Start Date" />
                        </Grid>
                        <Grid item md={3}>
                            <TextField label="End Date" placeholder="End Date" />
                        </Grid>
                        <Grid item md={3}></Grid>
                    </Grid>

                    <Grid container item md={12}>
                        <Grid item md={3}></Grid>
                        <Grid item md={3}>
                            <InputLabel>Venue</InputLabel>
                            <Select>
                                <MenuItem value={0}>Other - Create New</MenuItem>
                                <MenuItem value={1}>Hard Coded Location 1</MenuItem>
                                <MenuItem value={2}>Hard Coded Location 2</MenuItem>
                                <MenuItem value={3}>Hard Coded Location 3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item md={3}>
                            <InputLabel>Event Type</InputLabel>
                            <Select>
                                <MenuItem value={0}>None</MenuItem>
                                <MenuItem value={1}>Art Festival</MenuItem>
                                <MenuItem value={2}>Auto Show</MenuItem>
                                <MenuItem value={3}>Beer Festival</MenuItem>
                                <MenuItem value={4}>City Show</MenuItem>
                                <MenuItem value={5}>Cultural Festival</MenuItem>
                                <MenuItem value={6}>Film Show</MenuItem>
                                <MenuItem value={7}>Food & Wine Festival</MenuItem>
                                <MenuItem value={8}>Motorcycle Rally</MenuItem>
                                <MenuItem value={9}>Music Festival</MenuItem>
                                <MenuItem value={10}>Street Market Festival</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item md={3}></Grid>
                    </Grid>

                    {/* Show Only if newVenue=true */}
                    {this.state.newVenue && <><h2>New Venue</h2>
                        
                        <Grid container item md={12}>
                            <Grid item md={3}></Grid>
                            <Grid item md={3}>
                                <TextField inputProps={{ maxLength: 255 }} label="Venue Name" placeholder="Name" />
                            </Grid>
                            <Grid item md={3}>
                                <Grid item md={6}>
                                    <TextField fullWidth={true} inputProps={{ min: 1800, max: 2200 }} type="number" label="Capacity" placeholder="#" />
                                </Grid>
                            </Grid>
                            <Grid item md={3}></Grid>
                        </Grid>
                        

                        
                    </>}


                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateEvent.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateEvent));