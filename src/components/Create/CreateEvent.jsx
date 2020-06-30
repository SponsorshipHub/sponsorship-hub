import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { Divider, FormControl, InputAdornment, Radio, TextField, InputLabel, Select, MenuItem, Grid, Paper, Typography, Input, Box, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import Header from '../Header/Header';
// Sweetalert 2
import Swal from 'sweetalert2';
import '../Style/Swal.scss';

class CreateEvent extends Component {
    state = { 
        newVenue: false, 
        venue_id: '', 
        event_name: '',
        year_established: null,
        start_date: '',
        end_date: '',
        event_image_url: 'https://unsplash.com/photos/icyZmdkCGZ0/download?force=true&w=1920',
        event_website: null,
        event_status: 'false',
        event_type: '',
        estimated_attendance: '',
        event_notes: null,
        contact_name: null,
        contact_title: null,
        contact_email: null,
        contact_phone: null,
        event_facebook: null,
        event_instagram: null,
        event_twitter: null,
        event_description: null, 
        event_sponsorship_kit: null,
        event_open: false, // Dropdowns
        venue_open: false, // Dropdowns 
        state_open: false, // Dropdowns
        venue_name: null,
        venue_address: null,
        venue_city: null,
        venue_state: '',
        venue_zipcode: null,
        venue_notes: null,
        venue_capacity: null, 
    }

    cancelSelect = (event) => {
        this.setState({ event_status: event.target.value });
    };

    componentDidMount = () => {
        document.title = "Sponsorship Hub - Create Event"; // Sets browser's title
        // console.log('componentDidMount: FETCH_VENUES');
        this.props.dispatch({ type: 'FETCH_VENUES' }); /* Gets all the venues */
        this.props.dispatch({ type: 'FETCH_EVENT_TYPES' });// get our event types
        window.scrollTo(0, 0);
    }

    handleChange = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value})
        // console.log(this.state)
    }

    nextClick = () => {
        if (this.state.event_name === '') { alert('Please enter an Event Name'); return }
        else if (this.state.start_date === '') { alert('Please enter a Start Date'); return }
        else if (this.state.end_date === '') { alert('Please enter an End Date'); return }
        else if (this.state.venue_id === '') { alert('Please choose a Venue'); return; }
        else if (this.state.estimated_attendance === '') { alert('Please enter Estimated Attendance'); return; }
        if (this.state.venue_capacity === '') {this.setState ({venue_capacity: null})}
        if (this.state.event_type === '') {this.setState ({event_type: null})}
        if (this.state.year_established === '') {this.setState ({year_established: null})}
            // DISPATCH AND SETS REDUCER CURRENT_EVENT to NEW ID

        Swal.fire({
            title: `${this.state.event_name}`,
            text: `Create this new event?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#296EC8',
            cancelButtonColor: '#F45255',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Make More Changes'
        }).then(result => {
            if (result.value) {
                this.props.dispatch({ type: 'POST_EVENT', payload: this.state, history: this.props.history })
            }
        })
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

    // SELECTOR EVENT TYPE START
    stateOpen = () => {
        this.setState({
            state_open: true
        })
    }
    stateClose = () => {
        this.setState({
            state_open: false
        })
    }
    stateSelector = (event) => {
        console.log('You have set the state to:', event.target.value);
            this.setState({
                venue_state: event.target.value
            })
    }  // SELECTOR EVENT TYPE END

    render() {
        // window.onbeforeunload = function () {
        //     return "Data will be lost if you leave the page, are you sure?";
        // };
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        let cancelValue = String(this.state.event_status);

        return (
            <>
                <Header history={this.props.history} />
            
                <Box className={classes.margin}>
                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h1>Create Event</h1></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>
                    
                    {/* SECTION - FIRST */}
                    {/* Row Start */}
                    <Box mb={2}>
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={4}>
                                <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label={<><span>Event Name</span> <span className={classes.red}>*</span></>} placeholder="Name of the Event" onChange={(event)=>this.handleChange(event, 'event_name')}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <TextField type="number" label={<><span>Estimated Attendance</span> <span className={classes.red}>*</span></>} placeholder="#" fullWidth={true} onChange={(event) => this.handleChange(event, 'estimated_attendance')} />
                        </Grid>
                    </Grid>
                    </Box>

                    {/* Row Start */}
                    <Box mb={2}>
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={2}></Grid>
                        <Grid item xs={12} md={4}>
                                <InputLabel>Start Date <span className={classes.red}>*</span></InputLabel>
                                <TextField type="date" placeholder="Start Date" onChange={(event) => this.handleChange(event, 'start_date')}/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <InputLabel>End Date <span className={classes.red}>*</span></InputLabel>
                                    <TextField type="date" placeholder="End Date" onChange={(event) => this.handleChange(event, 'end_date')}/>
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                    </Box>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={2}></Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>Venue <span className={classes.red}>*</span></InputLabel>
                            <FormControl>
                                <Select
                                    open={this.state.venue_open}
                                    onClose={this.venueClose}
                                    onOpen={this.venueOpen}
                                    value={this.state.venue_id}
                                    onChange={(event) => this.venueSelector(event)}>
                                        {this.props.venues.map(venue =>
                                            <MenuItem key={venue.id} value={venue.id}>{venue.name}</MenuItem>
                                        )}
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
                                <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label={<><span>Venue Name</span> <span className={classes.red}>*</span></>} placeholder="Name" onChange={(event) => this.handleChange(event, 'venue_name')}/>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextField fullWidth={true} type="number" label="Capacity" placeholder="#" onChange={(event) => this.handleChange(event, 'venue_capacity')}/>
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid justify="center" container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <TextField fullWidth={true} multiline={true} label={<><span>Street Address</span> <span className={classes.red}>*</span></>} placeholder="Notes about the Venue" onChange={(event) => this.handleChange(event, 'venue_address')}/>
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid justify="center" container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label={<><span>City</span> <span className={classes.red}>*</span></>} placeholder="City" onChange={(event) => this.handleChange(event, 'venue_city')}/>
                            </Grid>
                            <Grid item xs={9} md={2}>
                                <InputLabel>State <span className={classes.red}>*</span></InputLabel>

                                <FormControl>
                                    <Select
                                        open={this.state.state_open}
                                        onClose={this.stateClose}
                                        onOpen={this.stateOpen}
                                        value={this.state.venue_state}
                                        onChange={(event) => this.stateSelector(event)}>
                                        <MenuItem value='Alabama'>Alabama</MenuItem>
                                        <MenuItem value='Alaska'>Alaska</MenuItem>
                                        <MenuItem value='Arizona'>Arizona</MenuItem>
                                        <MenuItem value='Arkansas'>Arkansas</MenuItem>
                                        <MenuItem value='California'>California</MenuItem>
                                        <MenuItem value='Colorado'>Colorado</MenuItem>
                                        <MenuItem value='Connecticut'>Connecticut</MenuItem>
                                        <MenuItem value='Delaware'>Delaware</MenuItem>
                                        <MenuItem value='Florida'>Florida</MenuItem>
                                        <MenuItem value='Georgia'>Georgia</MenuItem>
                                        <MenuItem value='Hawaii'>Hawaii</MenuItem>
                                        <MenuItem value='Idaho'>Idaho</MenuItem>
                                        <MenuItem value='Illinois'>Illinois</MenuItem>
                                        <MenuItem value='Indiana'>Indiana</MenuItem>
                                        <MenuItem value='Iowa'>Iowa</MenuItem>
                                        <MenuItem value='Kansas'>Kansas</MenuItem>
                                        <MenuItem value='Kentucky'>Kentucky</MenuItem>
                                        <MenuItem value='Louisiana'>Louisiana</MenuItem>
                                        <MenuItem value='Maine'>Maine</MenuItem>
                                        <MenuItem value='Maryland'>Maryland</MenuItem>
                                        <MenuItem value='Massachusetts'>Massachusetts</MenuItem>
                                        <MenuItem value='Michigan'>Michigan</MenuItem>
                                        <MenuItem value='Minnesota'>Minnesota</MenuItem>
                                        <MenuItem value='Mississippi'>Mississippi</MenuItem>
                                        <MenuItem value='Missouri'>Missouri</MenuItem>
                                        <MenuItem value='Montana'>Montana</MenuItem>
                                        <MenuItem value='Nebraska'>Nebraska</MenuItem>
                                        <MenuItem value='Nevada'>Nevada</MenuItem>
                                        <MenuItem value='New Hampshire'>New Hampshire</MenuItem>
                                        <MenuItem value='New Jersey'>New Jersey</MenuItem>
                                        <MenuItem value='New Mexico'>New Mexico</MenuItem>
                                        <MenuItem value='New York'>New York</MenuItem>
                                        <MenuItem value='North Carolina'>North Carolina</MenuItem>
                                        <MenuItem value='North Dakota'>North Dakota</MenuItem>
                                        <MenuItem value='Ohio'> Ohio </MenuItem>
                                        <MenuItem value='Oklohoma'> Oklohoma </MenuItem>
                                        <MenuItem value='Oregon'> Oregon </MenuItem>
                                        <MenuItem value='Pennsylvania'> Pennsylvania </MenuItem>
                                        <MenuItem value='Rhode Island'> Rhode Island </MenuItem>
                                        <MenuItem value='South Carolina'> South Carolina </MenuItem>
                                        <MenuItem value='South Dakota'> South Dakota </MenuItem>
                                        <MenuItem value='Tennessee'> Tennessee </MenuItem>
                                        <MenuItem value='Texas'> Texas </MenuItem>
                                        <MenuItem value='Utah'> Utah </MenuItem>
                                        <MenuItem value='Vermont'> Vermont </MenuItem>
                                        <MenuItem value='Virginia'> Virginia </MenuItem>
                                        <MenuItem value='Washington'> Washington </MenuItem>
                                        <MenuItem value='West Virginia'> West Virginia </MenuItem>
                                        <MenuItem value='Wisconsin'> Wisconsin </MenuItem>
                                        <MenuItem value='Wyoming'> Wyoming </MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={3} md={2}>
                                <TextField fullWidth={true} type="number" label="Zip Code" placeholder="#" onChange={(event) => this.handleChange(event, 'venue_zipcode')}/>
                            </Grid>
                        </Grid>

                        {/* Row Start */}
                        <Grid justify="center" container spacing={4}>
                            <Grid item xs={12} md={8}>
                                <TextField variant="outlined" fullWidth={true} multiline={true} label="Notes" placeholder="Notes about the Venue" onChange={(event) => this.handleChange(event, 'venue_notes')}/>
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
                                color="primary"
                                checked={cancelValue === 'true'}
                                onChange={this.cancelSelect}
                                value='true'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'TRUE' }}
                            />Yes
                            <Radio
                                color="primary"
                                checked={cancelValue === 'false'}
                                onChange={this.cancelSelect}
                                value='false'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'FALSE' }}
                            />No
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField inputProps={{ min: 1800, max: 2200 }} type="number" label="Year Established" placeholder="#" fullWidth={true} onChange={(event) => this.handleChange(event, 'year_established')} />
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
                    <Grid item xs={10} md={3}><Button fullWidth={true} variant="outlined" className={classes.btn_def} onClick={this.nextClick}>Next</Button></Grid>
                    <Grid item xs={12} md={3}>
                    </Grid>
                </Grid>
                
            </>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateEvent.propTypes = { classes: PropTypes.object.isRequired };

// Destructures reduxState to pull venues only.
const putStateOnProps = reduxState => ({
    venues: reduxState.venues,
    currentEvent: reduxState.currentEvent
});

export default connect(putStateOnProps)(withStyles(styles)(CreateEvent));