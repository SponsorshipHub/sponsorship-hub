import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Paper } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateSponsor extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* Breadcrumbs go up here */}
                <Typography align="center" variant="h2">Create Sponsorship Package</Typography>
                <Box mx={10} spacing={3}>
                    {/* input fields go here */}
                    <Grid justify="center" container spacing={3}>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Package Name" placeholder="Package Name"></TextField>
                        </Grid>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Packagae Price" placeholder="$"></TextField>
                        </Grid>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Image URL"placeholder="http://"></TextField>
                        </Grid>
                        <Grid item md={8} sm={9}>
                            <TextField fullWidth multiline variant="outlined" label="Package Description" placeholder="Package Description"></TextField>
                        </Grid>
                        <Grid item md={1} sm={9}>
                            <Button>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography align="center" variant="h2">Current Packages</Typography>
                    <ul>
                        <li>$100</li>
                        <li>$1,000</li>
                        <li>$1,000,000</li>
                    </ul>

                    {/* display sponsorships go here */}
                    <Box mx={10} spacing={3}>
                        <Grid justify="center" container>
                            <Grid item md={3} sm={6}>
                                <Button fullWidth variant="outlined">Back</Button>
                            </Grid>
                            <Grid item md={3}></Grid>
                            <Grid item md={3} sm={6}>
                                <Button fullWidth variant="outlined">Next</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Box>


        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateSponsor.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateSponsor));