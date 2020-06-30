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

class CreateSponsor extends Component {

    state = {
        event_id: this.props.match.params.id,
        sponsor_name: "",
        sponsor_price: "",
        sponsor_image_url: "./images/sponsor_icon.png",
        sponsor_description: "",

    }

    componentDidMount() {
        this.props.dispatch({ type: "FETCH_SPONSORS", payload: this.state.event_id })
    }

    backClick = () => {
        this.props.history.push(`/event/edit/${this.props.match.params.id}`)
        // this should be disabled or a sweet alert explaining that they should complete all steps of event creation to prevent errors.
    }

    forwardClick = () => {
        //this conditional sends to either CreateDemo or EditDemo depending on 
        if (this.props.history.location.pathname === `/sponsor/edit/${this.props.match.params.id}`){
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
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SPONSOR', payload: this.state })
        this.setState({
            sponsor_name: "",
            sponsor_price: "",
            sponsor_image_url: "./images/sponsor_icon.png",
            sponsor_description: ""
        });
        
        console.log(this.state);
    }
   

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box className={classes.margin}>
                {/* Header */}
                <Header history={this.props.history} />
                
                {/* Breadcrumbs go up here */}
                <Typography align="center" variant="h2">Create Sponsorship Package</Typography>
                <Box mx={10}>
                    {/* input fields */}
                    <Grid justify="center" container className={classes.formMargin}>
                        <Grid item md={3} sm={9} className={classes.formMargin}>
                            <TextField fullWidth label="Package Name" value={this.state.sponsor_name} placeholder="Package Name" onChange={this.handleInputChangeFor('sponsor_name')}></TextField>
                        </Grid>
                        <Grid item md={3} sm={9} className={classes.formMargin}>
                            <TextField fullWidth label="Package Price" type="number" value={this.state.sponsor_price} placeholder="Package Name" onChange={this.handleInputChangeFor('sponsor_price')}></TextField>
                        </Grid>
                        <Grid item md={3} sm={9} className={classes.formMargin}>
                            <TextField fullWidth label="Image URL" defaultValue={this.state.sponsor_image_url} placeholder="http://" onChange={(event) => this.handleChange(event, 'sponsor_image_url')}></TextField>
                        </Grid>
                        <Grid item md={8} sm={9} className={classes.formMargin}>
                            <TextField fullWidth multiline variant="outlined" label="Package Description" value={this.state.sponsor_description} placeholder="Package Name" onChange={this.handleInputChangeFor('sponsor_description')}></TextField>
                        </Grid>
                        <Grid item md={1} sm={9} className={classes.formMargin}>
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
          
                    <Box mx={10} >
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