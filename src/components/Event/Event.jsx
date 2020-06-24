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

    componentDidMount(){
        this.props.dispatch({ type: "FETCH_ONE_EVENT", payload: this.props.match.params.id})
    }

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                <Box m={2}>
                    <Button onClick={()=>this.props.history.push('/results')} variant="outlined">Back to Results</Button>
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
                                {this.props.oneEvent.event_description} 
                            </Typography>
                        </Box>
                        <Box textAlign="center" mt={1}>
                            <CalendarTodayIcon mr={2}/>
                            {/* year_established */}
                            <Typography display="inline">Established in {this.props.oneEvent.year_established}</Typography>
                        </Box>

                    </Grid>
                    <Grid item md={4} sm={10}>
                        {/* Sponsorship link */}
                        <a href={this.props.oneEvent.event_sponsorship_kit} target='_blank'><Button fullWidth variant="outlined">View Sponsorship Kit</Button></a>
                        {/* estimated_attendance */}
        <Typography>Estimated Attendance: {this.props.oneEvent.estimated_attendance}</Typography>
                        <OpenInNewIcon />
                        {/* event_website */}
        <Typography display="inline">{this.props.oneEvent.event_website}</Typography>
                        <Box>
                            <PersonIcon />
                            <Typography display="inline">Contact Info</Typography>
                            {/* contact_name & contact_title */}
                            <Typography>{this.props.oneEvent.contact_name}, {this.props.oneEvent.contact_title}</Typography>
                            {/* contact_email*/}
                            <Typography>{this.props.oneEvent.contact_email}</Typography>
                            {/* contact_phone*/}
                            <Typography>{this.props.oneEvent.contact_phone}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <DemoView/>
                <SponsorshipView/>
                <Venue/>
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
                                {this.props.oneEvent.event_notes}
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

const putStateOnProps = reduxState => ({
    oneEvent:reduxState.oneEvent
});
export default connect(putStateOnProps)(withStyles(styles)(Event));