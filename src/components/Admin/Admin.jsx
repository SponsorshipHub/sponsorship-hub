import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Table, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import UserList from './UserList';

class Admin extends Component {

    state = {
        users: []
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_USER_LIST'});
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.userList !== this.props.userList){
            this.setState({
                users: this.props.userList
            })
        }
    }

    render() {
        console.log(`||||||||||`, this.state.users);
        
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                <Grid container justify="space-evenly">
                    <Grid item md={8} xs={11}>

                <Typography variant="h1">User List</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>User</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Company</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Access Level</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.users.map(user => 
                                <TableRow>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.title}</TableCell>
                                    <TableCell>{user.company}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.access_level}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Admin.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    userList: reduxState.adminReducer
});

export default connect(putStateOnProps)(withStyles(styles)(Admin));