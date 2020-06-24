import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

import {PieChart, Pie, Sector, Cell} from 'rechart';

import '../App/App.css';

class DemoView extends Component {

    state = {
        age: [
            {
                // name: this.props.oneEvent.age[0].age_range,
                // value: this.props.oneEvent.age[0].age_percentage
            }
        ],
        gender: {

        },
        income: {

        },
        residency: {

        }
    }

    render() {
        console.log(`Age Demo:`, this.props.oneEvent.age);
        
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box className='DemoBackground' my={2}>
                <Box>
                    <Grid container justify="space-evenly">
                        <Grid item md={10}>
                            <h2>Attendee Demographics</h2>

                        </Grid>
                    </Grid>
                    <Grid container justify="space-evenly">
                        <Grid item md={8}>
                            <Grid container>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Gender</h4>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Household Income</h4>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Age Ranges</h4>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Attendees Location</h4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
DemoView.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(DemoView));