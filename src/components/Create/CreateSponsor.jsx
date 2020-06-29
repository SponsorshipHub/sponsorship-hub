import React, { Component } from 'react';
import { connect } from 'react-redux';
import SponsorItem from './SponsorItem';
import Header from '../Header/Header'

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
        event_id: this.props.match.params.id,
        // hardcoded or MN State Fair, will need to change to the just created event in create or the selected event in edit
        sponsor_name: "",
        sponsor_price: "",
        sponsor_image_url: "./images/sponsor_icon.png",
        sponsor_description: "",

    }

    componentDidMount() {
        this.props.dispatch({ type: "FETCH_SPONSORS", payload: this.state.id })
    }

    backClick = () => {
        this.props.history.push(`/event/edit/${this.props.match.params.id}`)
    }

    forwardClick = () => {
        //this conditional sends to either CreateDemo or EditDemo depending on 
        if (this.props.history.location.pathname === `/sponsor/edit/${this.props.match.params.id}`){
            this.props.dispatch({ type: "FETCH_DEMOGRAPHICS", payload: this.state.id, history: this.props.history})
            this.props.history.push(`/demo/edit/${this.props.match.params.id}`)
        } else {
        this.props.history.push(`/create-demo/${this.props.match.params.id}`)
        }
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
        console.log(this.state);

    }

    // handleDelete = () => {
    //     this.props.dispatch({ type: "DELETE", payload: this.props.sponsors.id})
    // }
    //I can't figure out how to identify and send the id of the sponsorItem clicked, considering shipping it down to a component

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SPONSOR', payload: this.state })
        this.setState({
            sponsor_name: "",
            sponsor_price: "",
            sponsor_image_url: "",
            sponsor_description: ""
        });
        
        console.log(this.state);
    }
   

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* Header */}
                <Header history={this.props.history} />
                
                {/* Breadcrumbs go up here */}
                <Typography align="center" variant="h2">Create Sponsorship Package</Typography>
                <Box mx={10} spacing={3}>
                    {/* input fields go here */}
                    <Grid justify="center" container spacing={3}>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Package Name" defaultValue={this.state.default_sponsor_name} placeholder="Package Name" onChange={(event) => this.handleChange(event, 'sponsor_name')}></TextField>
                        </Grid>
                        <Grid item md={3} sm={9}>
                            <TextField fullWidth label="Package Price" type="number" placeholder="$" onChange={(event) => this.handleChange(event, 'sponsor_price')}></TextField>
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
{/* existing sponsorships display here */}
                    <Grid container >
                        {
                            this.props.sponsors.map(sponsorItem =>
                                <SponsorItem key={sponsorItem.id} sponsorItem={sponsorItem} match={this.props.match}/>)}

                       
                    </Grid>
          
                    <Box mx={10} spacing={3}>
                        <Grid justify="center" container>
                            <Grid item md={3} sm={6}>
                                {/* I need to get rid of this button in create mode or it will switch the user to edit mode */}
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