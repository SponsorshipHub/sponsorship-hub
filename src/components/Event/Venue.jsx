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
                        <h2>Venue Name</h2>
                        {/* Capacity Need to fix spacing */}
                        {/* venue_capacity */}
                        <Typography>Capacity</Typography>
                        <Box>
                            <PlaceIcon />
                            <Typography display="inline">Address</Typography>
                            {/* Address */}
                            <Typography>8570 University Ave.</Typography>
                            <Typography>Minneapolis, MN</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box p={2} my={2} className="venue">
                            {/* venue_notes */}
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
Venue.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(Venue));