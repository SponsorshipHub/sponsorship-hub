import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// MATERIAL ICONS
import PlaceIcon from '@material-ui/icons/Place';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Venue extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box className="DemoBackground" my={2}>
                <Grid container justify="space-evenly">
                    <Grid item md={4}>
                        {/* Venue Name */}
                        <h2>{this.props.oneEvent.name}</h2>
                        {/* Capacity Need to fix spacing */}
                        {/* venue_capacity */}
                        <Typography>Capacity: {this.props.oneEvent.venue_capacity}</Typography>
                        <Box>
                            <PlaceIcon />
                            <Typography display="inline">Address</Typography>
                            {/* Address */}
                            <Typography>{this.props.oneEvent.address}</Typography>
                            <Typography>{this.props.oneEvent.city}, {this.props.oneEvent.state} {this.props.oneEvent.zipcode}</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box p={2} my={2} className={classes.eventTextBoxes}>
                            {/* venue_notes */}
                            <Typography>
                                {this.props.oneEvent.venue_notes}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Venue.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(Venue));