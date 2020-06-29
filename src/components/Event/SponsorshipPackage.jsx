import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, TableRow, TableCell, DialogTitle, Dialog, Paper, DialogContent, DialogContentText, InputAdornment } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class SponsorshipPackage extends Component {

    state = {
        openModal: false
    }

    handleOpen = (id, classes) => {
        // console.log('HERE IS OUR SPONSOR:', this.props.oneEvent.sponsorship[this.state.sponsorshipId]);
        this.setState({
            sponsorshipId: id
        })
        if (this.openModal) {
            this.setState({
                openModal: !this.state.openModal,
            })
        }
        else {
            this.setState({
                openModal: !this.state.openModal
            })
        }
    };//end handleOpen

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <>
                <TableCell><img className={classes.sponsorshipIcon} src={this.props.item.sponsor_image_url} alt={this.props.item.sponsor_name} /></TableCell>
                <TableCell>{this.props.item.sponsor_name}</TableCell>
                <TableCell>${this.props.item.sponsor_price}</TableCell>
                <TableCell>
                    <Button variant="outlined" onClick={() => this.handleOpen(this.props.item.sponsorship_id, classes)}>more</Button>
                </TableCell>

                <Dialog open={this.state.openModal}
                    onClose={this.handleOpen}
                    className={classes.modal}
                    fullWidth={true}
                    maxWidth={"sm"}
                >
                <DialogTitle className={classes.modalContent}>
                    <img className={classes.modalImg} src={this.props.item.sponsor_image_url} alt={this.props.item.sponsor_name} />
                    <Typography className={classes.modalTitle} variant='h3'>{this.props.item.sponsor_name}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='subtitle2'>Price: ${this.props.item.sponsor_price}</Typography>
                    <Typography variant='overline'>{this.props.item.sponsor_description}</Typography>
                </DialogContent>
            </Dialog>
            </>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
SponsorshipPackage.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(SponsorshipPackage));