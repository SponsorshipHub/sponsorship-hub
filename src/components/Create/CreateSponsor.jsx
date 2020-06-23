import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Paper, Input } from '@material-ui/core';
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
                <h2>Create Sponsorship Packages</h2>
                <Box mx={10} spacing={3}>
                    {/* input fields go here */}
                    <Grid container spacing={3}>
                        <Grid item md={4} sm={12}>
                            <TextField fullWidth placeholder="Package Name"></TextField>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <TextField fullWidth placeholder="Packagae Price"></TextField>
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <TextField fullWidth placeholder="Image URL"></TextField>
                        </Grid>
                        <Grid item md={10} sm={12}>
                            <TextField fullWidth label="Package Description" placeholder="Package Description"></TextField>
                        </Grid>
                        <Grid item md={2} sm={12}>
                            <Button>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <h2>Current Sponsorship Packages</h2>
                    <ul>
                        <li>$100</li>
                        <li>$1,000</li>
                        <li>$1,000,000</li>
                    </ul>

                    {/* display sponsorships go here */}
                    <Box mx={10} spacing={3}>
                        <Grid container>


                            <Grid item md={4} sm={6}>
                                <Button>Back</Button>
                            </Grid>
                            <Grid item md={4} sm={0}>
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <Button>Next</Button>
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