import React, { Component } from 'react';
import { connect } from 'react-redux';
import SponsorItem from './SponsorItem';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Paper } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StarsIcon from '@material-ui/icons/Stars';

class CreateSponsor extends Component {

    state = {
        id: 2,
        // hardcoded or MN State Fair, will need to change to the just created event in create or the selected event in edit
        sponsor_name: "",
        sponsor_price: "",
        sponsor_image_url: "",
        sponsor_description: "",
        viewOrEdit: "",

    }

    componentDidMount() {
        this.props.dispatch({ type: "FETCH_SPONSORS", payload: this.state.id })
    }

    backClick = () => {
        this.props.history.push('/create-event')
    }

    forwardClick = () => {
        this.props.history.push('/create-demo')
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
        console.log(this.state);

    }

    handleDelete = () => {
        this.props.dispatch({ type: "DELETE", payload: this.state})
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SPONSOR', payload: this.state })
        this.setState({
            sponsor_name: "",
            sponsor_price: "",
            sponsor_image_url: "",
            sponsor_description: ""
        });
        window.location.reload();
        // this is intended to clear the inputs and refresh the page with the added sponsor
        console.log(this.state);
    }
    // This needs to re-render the page with the inputs empty

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
                            <TextField fullWidth label="Package Name" defaultValue={this.state.default_sponsor_name} placeholder="Package Name" onChange={(event) => this.handleChange(event, 'sponsor_name')}></TextField>
                        </Grid>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Package Price" placeholder="$" onChange={(event) => this.handleChange(event, 'sponsor_price')}></TextField>
                        </Grid>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Image URL" placeholder="http://" onChange={(event) => this.handleChange(event, 'sponsor_image_url')}></TextField>
                        </Grid>
                        <Grid item md={8} sm={9}>
                            <TextField fullWidth multiline variant="outlined" label="Package Description" placeholder="Package Description" onChange={(event) => this.handleChange(event, 'sponsor_description')}></TextField>
                        </Grid>
                        <Grid item md={1} sm={9}>
                            <Button className={classes.btn_def} onClick={this.handleClick}>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography align="center" variant="h2">Current Packages</Typography>

                    <Grid container >
                        {
                            this.props.sponsors.map(sponsorItem =>
                                
                                <Grid justify="center" container item key={sponsorItem.id} md={12}>
                                    <Grid item md={2}><img className={classes.sponsor_image} src={sponsorItem.sponsor_image_url}/></Grid>
                                    <Grid container item md={7}>

                                        <Grid container item md={4}>
                                            <Grid item md={12}><Typography>{sponsorItem.sponsor_name}</Typography></Grid>
                                            <Grid item md={12}><Typography>{sponsorItem.sponsor_price}</Typography></Grid>
                                        </Grid>
                                        
                                        <Grid item md={8}><Typography>{sponsorItem.sponsor_description}</Typography></Grid>
                                    </Grid>
                                    <Grid item md={2}><EditIcon onClick={this.toggleEdit}></EditIcon><DeleteIcon onClick={this.handleDelete}></DeleteIcon></Grid>
                                    
                                </Grid>)
                        }
                    </Grid>
          

                    {/* display sponsorships go here */}
                    <Box mx={10} spacing={3}>
                        <Grid justify="center" container>
                            <Grid item md={3} sm={6}>
                                <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.backClick}>Back</Button>
                            </Grid>
                            <Grid item md={3}></Grid>
                            <Grid item md={3} sm={6}>
                                <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.forwardClick}>Next</Button>
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

const mapStateToProps = state => ({
    sponsors: state.sponsors,

});

// const putStateOnProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(withStyles(styles)(CreateSponsor));