import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// MATERIAL ICONS
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PersonIcon from '@material-ui/icons/Person';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import DemoView from './DemoView';
import SponsorshipView from './SponsorshipView';
import Venue from './Venue';



class Event extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                <Box m={2}>
                    <Button variant="outlined">Back to Results</Button>
                </Box>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <h3>Event Overview</h3>
                    </Grid>
                </Grid>
                <Grid container justify="space-evenly">
                    <Grid item md={4} sm={10}>
                        <Box className="DemoBackground" p={2}>
                            {/* event_description */}
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.  
                            </Typography>
                        </Box>
                        <Box textAlign="center" mt={1}>
                            <CalendarTodayIcon mr={2}/>
                            {/* year_established */}
                            <Typography display="inline">Established in</Typography>
                        </Box>

                    </Grid>
                    <Grid item md={4} sm={10}>
                        {/* Sponsorship link */}
                        <Button fullWidth variant="outlined">View Sponsorship Kit</Button>
                        {/* estimated_attendance */}
                        <Typography>Estimated Attendance</Typography>
                        <OpenInNewIcon />
                        {/* event_website */}
                        <Typography display="inline">www.something.com</Typography>
                        <Box>
                            <PersonIcon />
                            <Typography display="inline">Contact Info</Typography>
                            {/* contact_name & contact_title */}
                            <Typography>Name, Title</Typography>
                            {/* contact_email*/}
                            <Typography>Email</Typography>
                            {/* contact_phone*/}
                            <Typography>Phone</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <DemoView/>
                <SponsorshipView/>
                <Venue />
                <Grid container justify="center">
                    <Grid item md={10} textAlign="center">
                        <h2>Additional Details</h2>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item md={8} textAlign="center">
                        <Box className="DemoBackground" p={2}>
                            {/* event_notes */}
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.  
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box> 
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Event.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(Event));