import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputAdornment, Radio, TextField, InputLabel, Select, MenuItem, Grid, Paper, Typography, Input, Box, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateEvent extends Component {
    state = { 
        newVenue: false, 
        venue_id: '', 
        event_name: '',
        year_established: '',
        start_date: '',
        end_date: '',
        event_image_url: '',
        event_website: '',
        event_status: 'false',
        event_type: '',
        estimated_attendance: '',
        event_notes: '',
        contact_name: '',
        contact_title: '',
        contact_email: '',
        contact_phone: '',
        event_facebook: '',
        event_instagram: '',
        event_twitter: '',
        event_description: '', 
        event_sponsorship_kit: '',
        event_open: false,
        venue_open: false,
    }

    cancelSelect = (event) => {
        this.setState({ event_status: event.target.value });
    };

    handleChange = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value})
        console.log(this.state)
    }

    nextClick = () => {
        // TODO - Post Dispatch Goes Here 
        this.props.history.push('/create-sponsor')
    }

    venueSelect(event) {
        console.log(event.target.value)
        // this.setState({ venue: event.target.value })
    }

    // SELECTOR EVENT TYPE START
    eventOpen = () => {
        this.setState({
            event_open: true
        })
    }
    eventClose = () => {
        this.setState({
            event_open: false
        })
    }
    eventSelector = (event) => {
        console.log('You have set the event type to:', event.target.value);
        this.setState({
            event_type: event.target.value
        })
    }  // SELECTOR EVENT TYPE END

    // SELECTOR EVENT TYPE START
    venueOpen = () => {
        this.setState({
            venue_open: true
        })
    }
    venueClose = () => {
        this.setState({
            venue_open: false
        })
    }
    venueSelector = (event) => {
        console.log('You have set the event type to:', event.target.value);
        if (event.target.value == 0) {
            this.setState({
                newVenue: true,
                venue_id: event.target.value
            })}
        else {this.setState({
            newVenue: false,
            venue_id: event.target.value
        })}
    }  // SELECTOR EVENT TYPE END

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        let cancelValue = String(this.state.event_status);

        return (
            <>
                <Box className={classes.margin}>
                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h1>Create Event</h1></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>

                    {/* <FormControl>
                        <InputLabel>Test</InputLabel>
                        <Select
                            open={this.state.event_open}
                            onClose={this.eventClose}
                            onOpen={this.eventOpen}
                            value={this.state.event_type}
                            onChange={(event) => this.eventSelector(event)}>
                            <MenuItem value={1}><em>Buy</em></MenuItem>
                            <MenuItem value={2}><em>Sell</em></MenuItem>
                            <MenuItem value={3}><em>Trade</em></MenuItem>
                        </Select>
                    </FormControl> */}
                    
                    {/* SECTION - FIRST */}
                    {/* Row Start */}
                    <Box mb={2}>
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Event Name" placeholder="Name of the Event" onChange={(event)=>this.handleChange(event, 'event_name')}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <TextField inputProps={{ min: 1800, max: 2200 }} type="number" label="Year Established" placeholder="#" fullWidth={true} onChange={(event) => this.handleChange(event, 'year_established')}/>
                        </Grid>
                    </Grid>
                    </Box>

                    {/* Row Start */}
                    <Box mb={2}>
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={2}></Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>Start Date</InputLabel>
                                <TextField type="date" placeholder="Start Date" onChange={(event) => this.handleChange(event, 'start_date')}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>End Date</InputLabel>
                                    <TextField type="date" placeholder="End Date" onChange={(event) => this.handleChange(event, 'end_date')}/>
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                    </Box>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={2}></Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>Venue</InputLabel>
                            <FormControl>
                                <Select
                                    open={this.state.venue_open}
                                    onClose={this.venueClose}
                                    onOpen={this.venueOpen}
                                    value={this.state.venue_id}
                                    onChange={(event) => this.venueSelector(event)}>
                                    <MenuItem value={1}>The Armory</MenuItem>
                                    <MenuItem value={2}>State Fairgrounds</MenuItem>
                                    <MenuItem value={0}>Other - Create New</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>Event Type</InputLabel>
                            <FormControl>
                                <Select
                                    open={this.state.event_open}
                                    onClose={this.eventClose}
                                    onOpen={this.eventOpen}
                                    value={this.state.event_type}
                                    onChange={(event) => this.eventSelector(event)}>
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
                            </FormControl>
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                </Box>

                {/* SECTION - VENUE */}
                {/* Show Only if newVenue=true */}
                {this.state.newVenue && 
                <Box className={classes.box_grey}>
                <Box className={classes.margin}>
                        <Grid justify="center" container>
                            <Grid item xs={12} md={4}><h2>New Venue</h2></Grid>
                            <Grid item xs={12} md={4}></Grid>  
                        </Grid>

                        {/* Row Start */}
                        <Grid justify="center" container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Venue Name" placeholder="Name" />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField fullWidth={true} type="number" label="Capacity" placeholder="#" />
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid justify="center" container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <TextField fullWidth={true} multiline={true} label="Street Address" placeholder="Notes about the Venue" />
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid justify="center" container spacing={4}>
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
                        <Grid justify="center" container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <TextField variant="outlined" fullWidth={true} multiline={true} label="Notes" placeholder="Notes about the Venue" />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                }

                {/* SECTION - WEBSITE - IMAGE - CANCELLED */}
                {/* Row Start */}
                <Box className={classes.margin}>
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} label="Website" placeholder="URL" fullWidth={true} onChange={(event) => this.handleChange(event, 'event_website')} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} label="Event Image" placeholder="URL" fullWidth={true} onChange={(event) => this.handleChange(event, 'event_image_url')}/>
                        </Grid>
                    </Grid>

                    
                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
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
                            <TextField type="number" label="Estimated Attendance" placeholder="#" fullWidth={true} onChange={(event) => this.handleChange(event, 'estimated_attendance')}/>
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid justify="center" container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <TextField variant="outlined" fullWidth={true} multiline={true} label="Event Description" placeholder="A short description of the event" onChange={(event) => this.handleChange(event, 'event_description')}/>
                        </Grid>
                    </Grid></Box>

                {/* SECTION - CONTACT INFO */}
                <Box className={classes.box_grey}><Box className={classes.margin}>
                    
                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h2>Event Contact Information</h2></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Contact Name" placeholder="Name of Event Contact" onChange={(event) => this.handleChange(event, 'contact_name')}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Title" placeholder="Title or Occupation" onChange={(event) => this.handleChange(event, 'contact_title')}/>
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label="Email Address" placeholder="Email Address" onChange={(event) => this.handleChange(event, 'contact_email')}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth={true} label="Phone Number" placeholder="#" onChange={(event) => this.handleChange(event, 'contact_phone')}/>
                        </Grid>
                    </Grid></Box>
                </Box>

                {/* SECTION - SOCIAL TAGS */}
                <Box className={classes.margin}>
                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h2>Social Tags</h2></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.facebook.com/</InputAdornment>,
                            }} label={<><FacebookIcon /><span> Facebook</span></>} placeholder="social-tag" onChange={(event) => this.handleChange(event, 'event_facebook')}/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.instagram.com/</InputAdornment>,
                            }} label={<><InstagramIcon /><span> Instagram</span></>} placeholder="social-tag" onChange={(event) => this.handleChange(event, 'event_instagram')}/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.twitter.com/</InputAdornment>,
                            }} label={<><TwitterIcon /><span> Twitter</span></>} placeholder="social-tag" onChange={(event) => this.handleChange(event, 'event_twitter')}/>
                        </Grid>
                    </Grid>
                </Box>

                {/* SECTION - SPONSOR KIT - NOTES */}
                <Box className={classes.box_grey}><Box className={classes.margin}>
                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TextField fullWidth={true} label="Sponsorship Kit" placeholder="URL" onChange={(event) => this.handleChange(event, 'event_sponsorship_kit')}/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField variant="outlined" fullWidth={true} multiline={true} label="Additional Notes" placeholder="Further notes on the event" onChange={(event) => this.handleChange(event, 'event_notes')}/>
                        </Grid>
                    </Grid></Box>
                </Box>

                <Grid justify="center" container>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={3}><Button fullWidth={true} variant="outlined" className={classes.btn_def} onClick={this.nextClick}>Next</Button></Grid>
                    <Grid item xs={12} md={3}>
                    </Grid>
                </Grid>
                

            </>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateEvent.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateEvent));