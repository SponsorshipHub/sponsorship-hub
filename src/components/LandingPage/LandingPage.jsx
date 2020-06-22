import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Typography, TextField, Box, Button} from '@material-ui/core';

const styles = () => {
    return({
    })
}

class LandingPage extends Component {
    render(){
        const {classes} = this.props;
        return(
            <h1>LANDING PAGE</h1>
        )//end return
    };//end render
};//end LandingPage

export default connect()(withStyles(styles)(LandingPage));