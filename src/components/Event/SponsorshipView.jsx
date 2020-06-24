import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class SponsorshipView extends Component {

    state = {
        sponsorship: [],
    }

    componentDidUpdate(prevProps){
        if(prevProps.oneEvent.sponsorship != this.props.oneEvent.sponsorship){
            this.setState({
                sponsorship: this.props.oneEvent.sponsorship
            })
        }
    }


    render() {
        // allows us to connect this.props to styles 
        console.log(`Sponsorship: `, this.state.sponsorship);
        
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
                                            <TableCell>Sponsor Image</TableCell>
                                            <TableCell>Sponsorship Opportunity</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Details</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            {/* Will be populated my with map*/}
                                            {/* {JSON.stringify(this.props.oneEvent.sponsorship)} */}

                                        {this.state.sponsorship.map(item => 
                                            <TableRow key={item.sponsorship_id}>
                                                <TableCell><img className={classes.sponsorshipIcon} src={item.sponsor_image_url} alt={item.sponsor_name}/></TableCell>
                                                <TableCell>{item.sponsor_name}</TableCell>
                                                <TableCell>{item.sponsor_price}</TableCell>
                                                <TableCell><Button variant="outlined">more</Button></TableCell>
                                            </TableRow>
                                        )}
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

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(SponsorshipView));