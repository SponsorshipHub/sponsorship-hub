import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, TextField, Box, Button } from '@material-ui/core';
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
import Header_Event from '../Header/Header_Event';

class Event extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "FETCH_ONE_EVENT", payload: this.props.match.params.id })
        window.scrollTo(0, 0);
    }

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        document.title = `Sponsorship Hub - ${this.props.oneEvent.event_name}`; // Sets browser's title
        return (
            <Box>
                <Box>
                    {/* Header */}
                    <Header_Event history={this.props.history} match={this.props.match} />
                    
                    
                    <Box m={2}>
                        <Button onClick={() => this.props.history.push(`/results`)} variant="outlined">Back to Results</Button>
                    </Box>
                    
                </Box>

                <Grid container justify="center">
                    <Grid item md={10}>
                        <h3>Event Overview</h3>
                    </Grid>
                </Grid>
                <Grid container justify="space-evenly">
                    <Grid item md={4} sm={10}>
                        <Grid container>
                            <Grid item md={12} sm={12} xs={12}>
                                <Box className={classes.eventTextBoxes} p={2}>
                                    {/* event_description */}
                                    <Typography>
                                        {this.props.oneEvent.event_description}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid container justify='space-evenly'>
                                <Grid item md={6} sm={12} mt={2}>
                                    <Typography>Type: {this.props.oneEvent.type}</Typography>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <Box textAlign="center" mt={1}>
                                        <CalendarTodayIcon mr={2} />
                                        {/* year_established */}
                                        <Typography display="inline">Established in {this.props.oneEvent.year_established}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={10}>
                        {/* Sponsorship link - Conditionally Rendered */}
                        {this.props.oneEvent.event_sponsorship_kit ? <a href={this.props.oneEvent.event_sponsorship_kit} target='_blank'><Button fullWidth variant="outlined">View Sponsorship Kit</Button></a> : <Button fullWidth variant="outlined" disabled>Sponsorship Kit Not Available</Button>}
                        {/* estimated_attendance */}
                        <Typography>Estimated Attendance: {this.props.oneEvent.estimated_attendance}</Typography>
                        <OpenInNewIcon />
                        {/* event_website */}
                        <Typography display="inline"><a href={this.props.oneEvent.event_website} target="_blank">{this.props.oneEvent.event_website ? this.props.oneEvent.event_website : 'No Website Provided'}</a> </Typography>
                        <Box>
                            <PersonIcon />
                            <Typography display="inline">Contact Info</Typography>
                            {/* contact_name & contact_title */}
                            <Typography>{this.props.oneEvent.contact_name}{this.props.oneEvent.contact_title && ', '+this.props.oneEvent.contact_title}</Typography>
                            {/* contact_email*/}
                            <Typography>{this.props.oneEvent.contact_email}</Typography>
                            {/* contact_phone*/}
                            <Typography>{this.props.oneEvent.contact_phone}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <DemoView />
                <SponsorshipView />
                <Venue />
                {this.props.oneEvent.event_notes && 
                <Box>
                <Grid container justify="center">
                    <Grid item md={10}>
                        <h2>Additional Details</h2>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item md={8}>
                        <Box className="DemoBackground" p={2}>
                            <Typography>
                                {this.props.oneEvent.event_notes}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
                    }
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Event.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent,
    user: reduxState.user
});
export default connect(putStateOnProps)(withStyles(styles)(Event));