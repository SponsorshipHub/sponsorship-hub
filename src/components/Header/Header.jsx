import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Paper, Grid, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Header extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_APPROVAL' });
    }
    render() {
        const page = window.location.href.split('/')[4];
        const { classes } = this.props;
        return (
            <div>
                <Box className={classes.header} style={{ backgroundImage: `url(./images/header_darker.jpg)` }}>
                    <Link className="nav-link" to="/home"><img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub" /></Link>
                    {/* Home & Login Button */}
                    {this.props.user.id ? <Link className="nav-link" to="/home"><Button className={classes.btn_create_event}>Home</Button></Link> : <Link className="nav-link" to="/home/login"><Button className={classes.btn_create_event}>Login / Register</Button></Link>}
                    {/* Admin Button */}
                    {this.props.user.access_level === 3 && <Link className="nav-link" to="/admin"><Button className={classes.btn_create_event}>Admin{this.props.approval.access_lvl_0 != 0 && <div className={classes.notification}>(<NotificationsIcon className="notification" style={{ fontSize: '80%' }} />{this.props.approval.access_lvl_0})</div>}</Button></Link>}
                    {/* Logout Button */}
                    {this.props.user.id && <Button className={classes.btn_create_event} onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>}


                <Grid item md={12}>
                    <Grid container>
                        <Grid item md={1}>
                            <Link className="nav-link" to="/home"><img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub"/></Link>
                        </Grid>

                        <Grid item md={5}>
                            <Grid spacing={1} container direction="row" justify="flex-end" alignItems="flex-start">
                                {/* Home & Login Button */}
                                {this.props.user.id ? <Link className="nav-link" to="/home"><Button className={classes.btn_create_event}>Home</Button></Link> : <Link className="nav-link" to="/home/login"><Button className={classes.btn_create_event}>Login / Register</Button></Link>}
                                {/* Admin Button */}
                                {this.props.user.access_level === 3 && <Link className="nav-link" to="/admin"><Button className={classes.btn_create_event}>Admin{this.props.approval.access_lvl_0 != 0 && <div className={classes.notification}>(<NotificationsIcon className="notification" style={{ fontSize: '80%' }} />{this.props.approval.access_lvl_0})</div>}</Button></Link>}
                                {/* Logout Button */}
                                {this.props.user.id && <Button className={classes.btn_create_event} onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>}
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>

                    {/* <Grid item md={12}> */}
                    <Grid
                        container
                    >
                            <Grid item md={2}>
                            <Paper className={classes.header_text} style={{color: 'white'}}>Sponsorship Hub</Paper>
                            </Grid>
                        </Grid>
                    {/* </Grid> */}

                    <Grid container direction="row" justify="space-between" alignItems="flex-end">
                        <Grid item md={2}>
                            <Box>
                                {this.props.user.access_level > 1 && page === 'home' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>}
                                {this.props.user.access_level > 1 && page === 'admin' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>}
                                {this.props.user.access_level > 1 && page === 'results' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push('/create-event')} variant="outlined">Create Event</Button>}
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </div>
        )
    }
}

Header.propTypes = { classes: PropTypes.object.isRequired };
const putStateOnProps = reduxState => ({ user: reduxState.user, oneEvent: reduxState.oneEvent, approval: reduxState.approval, });
export default connect(putStateOnProps)(withStyles(styles)(Header));