import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Grid, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Header_Event extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_APPROVAL' });
    }
    render() {
        const page = window.location.href.split('/')[4];
        console.log('Currentlying viewing page:', page)
        const { classes } = this.props;
        return (
            <div>
                <Box className={classes.header} style={{ backgroundImage: `url(${this.props.oneEvent.event_image_url})` }}>
                    <Grid container justify="space-between">
                        <Grid item md={1}>
                            <img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub" onClick={()=>this.props.history.push('/home')}/>
                        </Grid>

                        <Grid item md={5}>
                            <Grid spacing={1} container direction="row" justify="flex-end" alignItems="flex-start">
                                {/* Home & Login Button */}
                                {this.props.user.id ? <Button onClick={() => this.props.history.push('/home')} className={classes.btn_create_event}>Home</Button> : <Link className="nav-link" to="/home/login"><Button className={classes.btn_create_event}>Login / Register</Button></Link>}
                                {/* Admin Button */}
                                {this.props.user.access_level === 3 && <Link className="nav-link" to="/admin"><Button className={classes.btn_create_event}>Admin{this.props.approval.access_lvl_0 != 0 && <div className={classes.notification}>(<NotificationsIcon className="notification" style={{ fontSize: '80%' }} />{this.props.approval.access_lvl_0})</div>}</Button></Link>}
                                {/* Logout Button */}
                                {this.props.user.id && <Button className={classes.btn_create_event} onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justify="space-between" alignItems="flex-end">
                        <Grid item md={2}>
                            <Box>
                                {this.props.user.access_level > 1 && <Button className={classes.btn_create_event} onClick={() => this.props.history.push(`/event/edit/${this.props.match.params.id}`)} variant="outlined">Edit Event</Button>}
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </div>
        )
    }
}

Header_Event.propTypes = { classes: PropTypes.object.isRequired };
const putStateOnProps = reduxState => ({ user: reduxState.user, oneEvent: reduxState.oneEvent, approval: reduxState.approval, });
export default connect(putStateOnProps)(withStyles(styles)(Header_Event));