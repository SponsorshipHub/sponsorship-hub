import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Paper, InputAdornment, TextField, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Header extends Component {
    state = {search: ''}

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_APPROVAL' });
        this.setState({ search: '' })
    }

    searchChange(event, property) {
        this.setState ({[property]: event.target.value})
    }

    submitSearch() {
        // console.log('Searching for:', this.state)
        this.props.dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: this.state, history: this.props.history})
        this.setState({ search: '' })
    }

    render() {
        const page = window.location.href.split('/')[4];
        const { classes } = this.props;
        return (
            <Box className={classes.shadow}>
            <Box className={classes.header} maxHeight="300px" style={{ backgroundImage: `url(./images/header_darker.jpg)` }}>
                <Box 
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                maxHeight="300px"
                width="100%"
                className={classes.header} 
                >
                    
                        <Link className="nav-link" to="/home"><img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub" /></Link>
                        
                        <Box>
                        {/* Home & Login Button */}
                        {!this.props.user.id && <Link className="nav-link" to="/home/login"><Button className={classes.btn_create_event}>Login / Register</Button></Link>}
                        {/* Admin Button */}
                        {this.props.user.access_level === 3 && <Link className="nav-link" to="/admin"><Button className={classes.btn_create_event}>Admin{this.props.approval.access_lvl_0 != 0 && <div className={classes.notification}>(<NotificationsIcon className="notification" style={{ fontSize: '80%' }} />{this.props.approval.access_lvl_0})</div>}</Button></Link>}
                        {/* Logout Button */}
                        {this.props.user.id && <Button className={classes.btn_create_event} onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>}
                        </Box>
                </Box>

                <Box 
                display="flex"
                flexDirection="row"
                justifyContent="center"
                className={classes.header} >
                    <Box className={classes.header_text} style={{ color: 'white' }}>Sponsorship Hub</Box>
                </Box>

                
                <Box
                    display="flex"
                    className={classes.header_button_right}>
                        {this.props.user.access_level > 1 && page === 'home' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>}
                        {this.props.user.access_level > 1 && page === 'admin' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>}
                        {this.props.user.access_level > 1 && page === 'results' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>}
                </Box>
                

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    className={classes.header_button_left_search}>
                    <TextField
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                this.submitSearch()
                            }
                        }}
                        onChange={(event) => this.searchChange(event, 'search')}
                        value={this.state.search} margin="dense"
                        color="primary" placeholder="Search Events"
                        type="search" variant="outlined" id="filled-search" size="small"
                        id="search" autoComplete='off'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment className={classes.search} position="start">
                                    <SearchIcon className={classes.notification} />
                                </InputAdornment>
                            ), 
                            classes: { notchedOutline: classes.searchOutline, class: classes.searchTextField},
                        }}></TextField>
                </Box>
                
                </Box>
                </Box>
        )
    }
}

Header.propTypes = { classes: PropTypes.object.isRequired };
const putStateOnProps = reduxState => ({ user: reduxState.user, oneEvent: reduxState.oneEvent, approval: reduxState.approval, });
export default connect(putStateOnProps)(withStyles(styles)(Header));