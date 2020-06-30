import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Divider } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';


class SponsorItem extends Component {
    state = {
        editMode: false,

    }
    componentDidMount() {
        console.log('in SponsorItem', this.props.sponsorItem);
        this.setState({
            id: this.props.sponsorItem.id,
            sponsor_image_url: this.props.sponsorItem.sponsor_image_url,
            sponsor_name: this.props.sponsorItem.sponsor_name,
            sponsor_price: this.props.sponsorItem.sponsor_price,
            sponsor_description: this.props.sponsorItem.sponsor_description,
            event_id: this.props.match.params.id

        })
        //scroll to top of page on load
        window.scrollTo(0, 0);
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
        console.log(this.state);

    }

    handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            timer: 10000,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: "DELETE_SPONSOR", payload: this.props.sponsorItem });

            }
        })

    }

    handleEditClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })

    }

    handleSubmitClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.dispatch({ type: "EDIT_SPONSOR", payload: this.state })
    }

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;


        let viewOrEdit =
            <Grid justify="center" container item md={12}>
                <Grid item md={2} sm={2} xs={12}>{this.props.sponsorItem.sponsor_image_url ?
                    <img className={classes.sponsorshipIcon} src={this.props.sponsorItem.sponsor_image_url}></img> :
                    <img className={classes.sponsorshipIcon} src="./images/sponsor_icon.png"></img>}
                    {/* provides placeholder if icon if there isn't an image*/}
                </Grid>
                <Grid container item md={7} xs={7}>

                    <Grid container item md={4} xs={7}>
                        <Grid item md={12} xs={7}><Typography>{this.props.sponsorItem.sponsor_name}</Typography></Grid>
                        <Grid item md={12} xs={7}><Typography>${this.props.sponsorItem.sponsor_price}</Typography></Grid>
                    </Grid>

                    <Grid item md={8} xs={7}><Typography>{this.props.sponsorItem.sponsor_description}</Typography></Grid>
                </Grid>
                <Grid item md={2} xs={7}>
                    <EditIcon onClick={this.handleEditClick}></EditIcon>
                    <DeleteIcon onClick={this.handleDelete}></DeleteIcon>
                </Grid>
                <Grid item md={9} xs={7}></Grid>
            </Grid>

        if (this.state.editMode) {
            viewOrEdit =
                <Box borderBottom={1}>
                    <Grid container item spacing={3}>
                        {/* input fields go here */}

                        <Grid justify="center" container item md={12}>
                            <Grid item md={1}>{this.props.sponsorItem.sponsor_image_url ?
                                <img className={classes.sponsorshipIcon} src={this.props.sponsorItem.sponsor_image_url}></img> :
                                <img className={classes.sponsorshipIcon} src="./images/sponsor_icon.png"></img>
                            }
                            </Grid>
                            <Grid container item md={10}>

                                <Grid container item md={4}>
                                    <Grid item md={12} xs={9}><TextField fullWidth label="Package Name" defaultValue={this.props.sponsorItem.sponsor_name} placeholder="Package Name" onChange={(event) => this.handleChange(event, 'sponsor_name')}></TextField></Grid>
                                    <Grid item md={12} xs={9}><TextField fullWidth label="Package Price" type="number" defaultValue={this.props.sponsorItem.sponsor_price} placeholder="$" onChange={(event) => this.handleChange(event, 'sponsor_price')}></TextField></Grid>
                                </Grid>

                                <Grid item md={8} xs={9}><TextField fullWidth multiline variant="outlined" label="Package Description" defaultValue={this.props.sponsorItem.sponsor_description} placeholder="Package Description" onChange={(event) => this.handleChange(event, 'sponsor_description')}></TextField></Grid>
                            </Grid>
                            <Grid item md={1} xs={9}></Grid>
                            <Grid item md={9} xs={9}>
                                <TextField fullWidth label="Image URL" defaultValue={this.props.sponsorItem.sponsor_image_url} placeholder="http://" onChange={(event) => this.handleChange(event, 'sponsor_image_url')}></TextField>
                            </Grid>
                            <Grid item md={1} sm={9} xs={9}>
                                <Button fullWidth className={classes.btn_def} onClick={this.handleSubmitClick}>Submit</Button>
                            </Grid>

                        </Grid>
                        <Grid item md={9} xs={9}></Grid>
                    </Grid>
                </Box>
        }


        return (
            <>
                {viewOrEdit}
            </>

        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
SponsorItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    sponsors: state.sponsors,

});

// const putStateOnProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(withStyles(styles)(SponsorItem));