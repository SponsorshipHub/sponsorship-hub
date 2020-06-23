import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { InputAdornment, Radio, TextField, InputLabel, Select, MenuItem, Grid, Paper, Typography, Input, Box, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateEvent extends Component {
    state = { newVenue: true, venue: '', cancel: false }

    cancelSelect = (event) => {
        this.setState({ cancel: event.target.value });
    };

    venueSelect(event) {
        console.log(event.target.value)
        // this.setState({ venue: event.target.value })
    }

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        let cancelValue = String(this.state.cancel);

        return (
            <>
                <Box className={classes.margin}>
                    <h1>Create Event</h1>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={4}>
                            <TextField inputProps={{ maxLength: 255 }} label="Event Name" placeholder="Name of the Event" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField inputProps={{ min: 1800, max: 2200 }} type="number" label="Year Established" placeholder="#" fullWidth={true} />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={4}>
                            <TextField label="Start Date" placeholder="Start Date" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField label="End Date" placeholder="End Date" />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={4}>
                            <InputLabel id="venue">Venue</InputLabel>
                            <Select onChange={this.venueSelect}>
                                <MenuItem value='text'>Create New</MenuItem>
                                <MenuItem value='text2'>Hard Coded Location 1</MenuItem>
                                <MenuItem value={2}>Hard Coded Location 2</MenuItem>
                                <MenuItem value={3}>Hard Coded Location 3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={4}>
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
                    </Grid>
                </Box>

                {/* Show Only if newVenue=true */}
                {this.state.newVenue && <Box className={classes.box_grey}>
                    <Box className={classes.margin}>
                        <h2>New Venue</h2>

                        {/* Row Start */}
                        <Grid container spacing={4} item md={12}>
                            <Grid item xs={6} md={4}>
                                <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Venue Name" placeholder="Name" />
                            </Grid>
                            <Grid item xs={3} md={1}>
                                <TextField fullWidth={true} type="number" label="Capacity" placeholder="#" />
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid container spacing={4} item md={12}>
                            <Grid item xs={12} md={8}>
                                <TextField fullWidth={true} multiline={true} label="Street Address" placeholder="Notes about the Venue" />
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid container spacing={4} item md={12}>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="City" placeholder="City" />
                            </Grid>
                            <Grid item xs={9} md={2}>
                                <InputLabel>State</InputLabel>
                                <Select>
                                    <MenuItem value={1}>Alabama</MenuItem>
                                    <MenuItem value={2}>Alaska</MenuItem>
                                    <MenuItem value={3}>Arizona</MenuItem>
                                    <MenuItem value={4}>Arkansas</MenuItem>
                                    <MenuItem value={5}>California</MenuItem>
                                    <MenuItem value={6}>Colorado</MenuItem>
                                    <MenuItem value={7}>Connecticut</MenuItem>
                                    <MenuItem value={8}>Delaware</MenuItem>
                                    <MenuItem value={9}>Florida</MenuItem>
                                    <MenuItem value={10}>Georgia</MenuItem>
                                    <MenuItem value={11}>Hawaii</MenuItem>
                                    <MenuItem value={12}>Idaho</MenuItem>
                                    <MenuItem value={13}>Illinois</MenuItem>
                                    <MenuItem value={14}>Indiana</MenuItem>
                                    <MenuItem value={15}>Iowa</MenuItem>
                                    <MenuItem value={16}>Kansas</MenuItem>
                                    <MenuItem value={17}>Kentucky</MenuItem>
                                    <MenuItem value={18}>Louisiana</MenuItem>
                                    <MenuItem value={19}>Maine</MenuItem>
                                    <MenuItem value={20}>Maryland</MenuItem>
                                    <MenuItem value={21}>Massachusetts</MenuItem>
                                    <MenuItem value={22}>Michigan</MenuItem>
                                    <MenuItem value={23}>Minnesota</MenuItem>
                                    <MenuItem value={24}>Mississippi</MenuItem>
                                    <MenuItem value={25}>Missouri</MenuItem>
                                    <MenuItem value={26}>Montana</MenuItem>
                                    <MenuItem value={27}>Nebraska</MenuItem>
                                    <MenuItem value={28}>Nevada</MenuItem>
                                    <MenuItem value={29}>New Hampshire</MenuItem>
                                    <MenuItem value={30}>New Jersey</MenuItem>
                                    <MenuItem value={31}>New Mexico</MenuItem>
                                    <MenuItem value={32}>New York</MenuItem>
                                    <MenuItem value={33}>North Carolina</MenuItem>
                                    <MenuItem value={34}>North Dakota</MenuItem>
                                    <MenuItem value={35}> Ohio </MenuItem>
                                    <MenuItem value={36}> Oklohoma </MenuItem>
                                    <MenuItem value={37}> Oregon </MenuItem>
                                    <MenuItem value={38}> Pennsylvania </MenuItem>
                                    <MenuItem value={39}> Rhode Island </MenuItem>
                                    <MenuItem value={40}> South Carolina </MenuItem>
                                    <MenuItem value={41}> South Dakota </MenuItem>
                                    <MenuItem value={42}> Tennessee </MenuItem>
                                    <MenuItem value={43}> Texas </MenuItem>
                                    <MenuItem value={44}> Utah </MenuItem>
                                    <MenuItem value={45}> Vermont </MenuItem>
                                    <MenuItem value={46}> Virginia </MenuItem>
                                    <MenuItem value={47}> Washington </MenuItem>
                                    <MenuItem value={48}> West Virginia </MenuItem>
                                    <MenuItem value={49}> Wisconsin </MenuItem>
                                    <MenuItem value={50}> Wyoming </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={3} md={2}>
                                <TextField fullWidth={true} type="number" label="Zip Code" placeholder="#" />
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid container spacing={4} item md={12}>
                            <Grid item xs={12} md={8}>
                                <TextField variant="outlined" fullWidth={true} multiline={true} label="Notes" placeholder="Notes about the Venue" />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                }

                <Box className={classes.margin}>
                    {/* Row Start */}
                    <Grid container spacing={2} item md={8}>
                        <Grid item xs={12} md={12}>
                            <TextField multiline={true} label="Website" placeholder="URL" fullWidth={true} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField multiline={true} label="Event Image" placeholder="URL" fullWidth={true} />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={2}>
                            <InputLabel>Cancelled?</InputLabel>
                            <Radio
                                checked={cancelValue === 'true'}
                                onChange={this.cancelSelect}
                                value='true'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'TRUE' }}
                            />Yes
                            <Radio
                                checked={cancelValue === 'false'}
                                onChange={this.cancelSelect}
                                value='false'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'FALSE' }}
                            />No
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField type="number" label="Estimated Attendance" placeholder="#" fullWidth={true} />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid container spacing={4} item md={12}>
                        <Grid item xs={12} md={8}>
                            <TextField variant="outlined" fullWidth={true} multiline={true} label="Event Description" placeholder="A short description of the event" />
                        </Grid>
                    </Grid></Box>

                <Box className={classes.box_grey}><Box className={classes.margin}>
                    <h2>Event Contact Information</h2>
                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Contact Name" placeholder="Name of Event Contact" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Title" placeholder="Contact's Title" />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Email Address" placeholder="Email Address" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} label="Phone Number" placeholder="#" />
                        </Grid>
                    </Grid></Box>
                </Box>

                <Box className={classes.margin}>
                    <h2>Social Tags</h2>
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.facebook.com/</InputAdornment>,
                            }} label={<><FacebookIcon /><span> Facebook</span></>} placeholder="social-tag" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.instagram.com/</InputAdornment>,
                            }} label={<><InstagramIcon /><span> Instagram</span></>} placeholder="social-tag" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.twitter.com/</InputAdornment>,
                            }} label={<><TwitterIcon /><span> Twitter</span></>} placeholder="social-tag" />
                        </Grid>
                    </Grid>
                </Box>

                <Box className={classes.box_grey}><Box className={classes.margin}>
                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item xs={12} md={8}>
                            <TextField fullWidth={true} label="Sponsorship Kit" placeholder="URL" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField variant="outlined" fullWidth={true} multiline={true} label="Additional Notes" placeholder="Further notes on the event" />
                        </Grid>
                    </Grid></Box>
                </Box>

                <Button variant="outlined" className={classes.btn_def}>Next</Button>

            </>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateEvent.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateEvent));