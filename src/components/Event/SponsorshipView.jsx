import React, { Component } from 'react';
import { connect } from 'react-redux';
import SponsorshipPackage from './SponsorshipPackage';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Modal, Dialog, DialogTitle, DialogContent, Divider, DialogContentText } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class SponsorshipView extends Component {

    state = {
        sponsorship: [],
        openModal: false,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.oneEvent.sponsorship != this.props.oneEvent.sponsorship) {
            this.setState({
                sponsorship: this.props.oneEvent.sponsorship
            })
        }
    }

    render() {
        // allows us to connect this.props to styles 
        console.log(`Sponsorship: `, this.state.openModal);
        console.log('BREAKING POINT', this.props);

        const { classes } = this.props;
        return (
            <Box my={2}>
                <Divider className="venue" />
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
                                        {this.state.sponsorship.map(item =>
                                            <SponsorshipPackage item={item} />
                                        )}
                                        {/* <Dialog open={this.state.openModal}
                                            onClose={this.handleOpen}
                                            aria-labelledby="simple-model-title"
                                            aria-describedby="simple-model-description"
                                            className={classes.modal}
                                        > */}
                                        {/* {this.props.oneEvent.sponsorship.filter(sponsorship => sponsorship.sponsorship_id === this.state.sponsorshipId).map(filterSponsor => (
                                                <DialogTitle>
                                                    <Typography>{filterSponsor.sponsor_name}</Typography>
                                                </DialogTitle>
                                            ))} */}
                                        {/* <DialogTitle>
                                                <Typography>HELLO THERE</Typography>
                                                <Typography variant='h2'>{this.props.oneEvent.sponsorship[1].sponsor_name}</Typography>
                                                {/* <Typography variant='h4'>Price: ${item.sponsor_price}</Typography> */}
                                        {/* </DialogTitle> */}
                                        {/* <DialogContent> */}
                                        {/* <Paper> */}
                                        {/* <img className={classes.modalImg} src={item.sponsor_image_url} alt={item.sponsor_name} /> */}
                                        {/* <DialogContentText> */}
                                        {/* </DialogContentText> */}
                                        {/* </Paper> */}
                                        {/* </DialogContent> */}
                                        {/* </Dialog> */}
                                        
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