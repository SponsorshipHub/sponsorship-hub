import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { InputAdornment, TextField, Box, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

class Footer extends Component {
    state = {search: ''}

    componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_APPROVAL' });
        // this.setState({ search: '' })
    }

    searchChange(event, property) {
        // this.setState ({[property]: event.target.value})
    }

    submitSearch() {
        // console.log('Searching for:', this.state)
        // this.props.dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: this.state, history: this.props.history})
        // this.setState({ search: '' })
    }

    render() {
        // const page = window.location.href.split('/')[4];
        const { classes } = this.props;
        return (
            <Box className={classes.shadow}>
            <Box className={classes.footer} maxHeight="150px">
                <Box 
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                maxHeight="300px"
                width="100%"
                className={classes.footer} 
                >
                    
                        <Link className="nav-link" to="/home"><img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub" /></Link>
                        
                        <Box>
                            <Box>
                                <Link to={`/details/${this.props.cardId}`} />
                                <a href={`https://www.facebook.com/${this.props.oneEvent.event_facebook}`} target="_blank"><FacebookIcon color="secondary" className={classes.header_social} style={{ margin: '8px' }} /></a>
                                <a href={`https://www.instagram.com/${this.props.oneEvent.event_instagram}`} target="_blank"><InstagramIcon color="secondary" className={classes.header_social} style={{ margin: '8px' }} /></a>
                                <a href={`https://www.twitter.com/${this.props.oneEvent.event_twitter}`} target="_blank"><TwitterIcon color="secondary" className={classes.header_social} style={{ margin: '8px' }} /></a>
                            </Box>
                        </Box>
                </Box>

                {/* <Box 
                display="flex"
                flexDirection="row"
                justifyContent="center"
                className={classes.header} >
                    <Box className={classes.header_text} style={{ color: 'white' }}>Sponsorship Hub</Box>
                </Box> */}

                <Box className={classes.footer_button_right}>
                        <EmailIcon color="secondary" className={classes.header_social} style={{ margin: '8px' }} />
                </Box>

                {/* <Box
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
                        color="secondary" placeholder="Search Events"
                        type="search" variant="outlined" id="filled-search" size="small"
                        id="search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment className={classes.search} position="start">
                                    <SearchIcon className={classes.notification} />
                                </InputAdornment>
                            ), 
                            className: classes.searchTextField
                        }}></TextField>
                </Box> */}
                </Box>
                </Box>
        )
    }
}

Footer.propTypes = { classes: PropTypes.object.isRequired };
const putStateOnProps = reduxState => ({ user: reduxState.user, oneEvent: reduxState.oneEvent, approval: reduxState.approval, });
export default connect(putStateOnProps)(withStyles(styles)(Footer));