import React, { Component } from 'react';
import { connect } from 'react-redux';


//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Paper } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateSponsor extends Component {

    state = {
        sponsor_name: "",
        sponsor_price: "",
        sponsor_image_url: "",
        sponsor_description: ""
    }

    backClick = () =>{
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

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SPONSOR', payload: this.state})
        this.setState({
            sponsor_name: "",
            sponsor_price: "",
            sponsor_image_url: "",
            sponsor_description: "",
            default_sponsor_name: "",
            default_sponsor_price: "",
            default_image_url: "", 
            default_description: ""
        });
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
                    <ul>
                        <li>$100</li>
                        <li>$1,000</li>
                        <li>$1,000,000</li>
                    </ul>

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

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateSponsor));