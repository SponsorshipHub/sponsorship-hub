import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Paper, CardMedia, Card, CardContent } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class LandingPage extends Component {

    componentDidMount(){
        console.log('Landing Page has been MOUNTED');
    };//end componentDidMount

    handleSearch = () => {
        console.log('search on Landing Page has been clicked');
        // on click of the search button, the user will be taken to the results view page
        this.props.history.push('/results');
    };//end handleSearch

    render() {
        const { classes } = this.props;
        return (
            <Box>
                {/* outer grid for landing page */}
                <Grid container spacing={2} item md={12}>
                    {/* top section that holds media image */}
                    {/* <CardMedia image="" title="" height="500px" width="500px"> */}
                    <Grid className={classes.landHead} item md={12}>
                        <Typography className={classes.landHeadText}>Sponsorship Hub</Typography>
                    </Grid>
                    {/* section to hold search inputs */}
                    <Grid container item md={12} spacing={3}>
                        <Grid item md={12}><Typography className={classes.landSearchTitle}>Search Events</Typography></Grid>
                        <Grid item md={4}><TextField label="Location" /></Grid>
                        <Grid item md={4}><TextField label="Month" /></Grid>
                        <Grid item md={4}><Button variant="outlined" onClick={this.handleSearch}>Search</Button></Grid>
                    </Grid>
                    {/* section to hold featured events */}
                    <Grid container item md={12} spacing={3}>
                        <Grid item md={12}><Typography className={classes.landSearchTitle}>Featured Events</Typography></Grid>
                        <Grid container item md={4}>
                            <Card>
                                <CardContent>
                                    <Typography>FEATURE 1</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container item md={4}>
                            <Card>
                                <CardContent>
                                    <Typography>FEATURE 2</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid container item md={4}>
                            <Card>
                                <CardContent>
                                    <Typography>FEATURE 3</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end LandingPage

// PropTypes allows us to import style.jsx for use
LandingPage.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(LandingPage));