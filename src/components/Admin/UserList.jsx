import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, TableRow, TableCell } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class UserList extends Component {
    render() {
        console.log(`IN USER LIST:`, this.props.user);
        
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
UserList.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(UserList));