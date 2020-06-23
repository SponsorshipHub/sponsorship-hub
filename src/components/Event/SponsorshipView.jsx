import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class SponsorshipView extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box my={2}>
                <Grid container justify="space-evenly">
                    <Grid item md={10}>
                        <h2>Sponsorship</h2>
                    </Grid>
                </Grid>
                <Grid container justify="space-evenly">
                    <Grid item md={8}>
                        <Paper>
                            <TableContainer>
                                <Table>
                                    <TableHead className="DemoBackground">
                                        <TableRow>
                                            <TableCell>Sponsorship Opportunity</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            {/* Example Data */}
                                            <TableCell>Hot Air Balloon</TableCell>
                                            <TableCell>$5,000</TableCell>
                                            <TableCell><Button variant="outlined">more</Button></TableCell>
                                            {/* Will be populated my with map*/}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
SponsorshipView.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(SponsorshipView));