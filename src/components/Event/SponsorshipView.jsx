import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Modal, Dialog, DialogTitle, DialogContent, Divider, DialogContentText } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class SponsorshipView extends Component {

    state = {
        sponsorship: [],
        openModal: false
    }

    componentDidUpdate(prevProps){
        if(prevProps.oneEvent.sponsorship != this.props.oneEvent.sponsorship){
            this.setState({
                sponsorship: this.props.oneEvent.sponsorship
            })
        }
    }


    handleOpen = (item, classes) => {
        if(this.openModal){
            this.setState({
                openModal: !this.state.openModal
            })
        }
        else{
            this.setState({
                openModal: !this.state.openModal
            })
        }

        return(
            <Dialog open={this.state.openModal}
                onClose={this.handleOpen}
                aria-labelledby="simple-model-title"
                aria-describedby="simple-model-description"
                className={classes.modal}
                >
                <DialogTitle>
                    <Typography variant='h2'>{item.sponsor_name}</Typography>
                    <Typography variant='h4'>Price: ${item.sponsor_price}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Paper>
                        <img className={classes.modalImg} src={item.sponsor_image_url} alt={item.sponsor_name} />
                        <DialogContentText>

                        </DialogContentText>
                    </Paper>
                </DialogContent>
            </Dialog>
        )
    }

    render() {
        // allows us to connect this.props to styles 
        console.log(`Sponsorship: `, this.state.openModal);
        
        const { classes } = this.props;
        return (
            <Box my={2}>
                <Divider className="venue"/>
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
                                            <TableRow key={item.sponsorship_id}>
                                                <TableCell><img className={classes.sponsorshipIcon} src={item.sponsor_image_url} alt={item.sponsor_name}/></TableCell>
                                                <TableCell>{item.sponsor_name}</TableCell>
                                                <TableCell>${item.sponsor_price}</TableCell>
                                                <TableCell><Button variant="outlined" onClick={() => this.handleOpen(item, classes)}>more</Button></TableCell>
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