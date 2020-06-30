import React, { Component } from 'react';
import { connect } from 'react-redux';


//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import Swal from 'sweetalert2';
import Header from '../Header/Header';


class EditDemo extends Component {

    state = {
        event_id: this.props.match.params.id,
        //the id comes from the origin page to identify the event
        female: this.props.oneEvent.gender[0].gender_percentage,
        male: this.props.oneEvent.gender[1].gender_percentage,
        other: this.props.oneEvent.gender[2].gender_percentage,
        Income0_24999: this.props.oneEvent.income[0].income_percentage,
        Income25000_49999: this.props.oneEvent.income[4].income_percentage,
        Income50000_74999: this.props.oneEvent.income[5].income_percentage,
        Income75000_99999: this.props.oneEvent.income[6].income_percentage,
        Income100000_149999: this.props.oneEvent.income[1].income_percentage,
        Income150000_199999: this.props.oneEvent.income[2].income_percentage,
        Income200000: this.props.oneEvent.income[3].income_percentage,
        Age0_17: this.props.oneEvent.age[0].age_percentage,
        Age18_24: this.props.oneEvent.age[1].age_percentage,
        Age25_34: this.props.oneEvent.age[2].age_percentage,
        Age35_44: this.props.oneEvent.age[3].age_percentage,
        Age45_54: this.props.oneEvent.age[4].age_percentage,
        Age55_64: this.props.oneEvent.age[5].age_percentage,
        Age65: this.props.oneEvent.age[6].age_percentage,
        in_state: this.props.oneEvent.residency[0].residency_percentage,
        out_of_state: this.props.oneEvent.residency[1].residency_percentage,
    }

    backClick = () => {
        this.props.history.push(`/sponsor/edit/${this.props.match.params.id}`)
    }

    forwardClick = () => {
        this.props.history.push('/home')
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: Number(event.target.value),
        });
    }

    handleSubmit = () => {
        let genderTotal = this.state.female + this.state.male + this.state.other;
        let incomeTotal = this.state.Income0_24999 + this.state.Income25000_49999 + this.state.Income50000_74999 + this.state.Income75000_99999 + this.state.Income100000_149999 + this.state.Income150000_199999 + this.state.Income200000;
        let ageTotal = this.state.Age0_17 + this.state.Age18_24 + this.state.Age25_34 + this.state.Age35_44 + this.state.Age45_54 + this.state.Age55_64 + this.state.Age65;
        let residentTotal = this.state.in_state + this.state.out_of_state;
        if ((genderTotal === 100 || genderTotal === 0) &&
            (incomeTotal === 100 || incomeTotal === 0) &&
            (ageTotal === 100 || ageTotal === 0) &&
            (residentTotal === 100 || residentTotal === 0)
        ){  console.log("ALL 100");
            this.props.dispatch({ type: 'UPDATE_DEMO', payload: this.state, history: this.props.history })
            // this.props.history.push(`/event/${this.props.match.params.id}`)
            //this push is happening too fast, only some information is ready to render and a refresh is necessary
        } else {
            console.log('not ALL 100');
            Swal.fire({
                icon: 'error',
                title: 'Cannot Submit Incomplete Data',
                text: 'All categories must total 100% or 0% to be submitted',
                footer: '<a href>Exit without submitting any demographic data</a>',
                timer: 5000
            });

        }
    }


    render() {
        let genderPercent = this.state.female + this.state.male + this.state.other;
        let incomePercent = this.state.Income0_24999 + this.state.Income25000_49999 + this.state.Income50000_74999 + this.state.Income75000_99999 + this.state.Income100000_149999 + this.state.Income150000_199999 + this.state.Income200000;
        let agePercent = this.state.Age0_17 + this.state.Age18_24 + this.state.Age25_34 + this.state.Age35_44 + this.state.Age45_54 + this.state.Age55_64 + this.state.Age65;
        let residentPercent = this.state.in_state + this.state.out_of_state;

        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (

            <Box>
                {/* Header */}
                <Header history={this.props.history} />

                <Typography align="center" variant="h2">Enter Demographics</Typography>
                {/* Begin Gender Demographic Inputs */}
                <Box className={classes.box_grey} margin={3}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Gender</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={12}>
                                <TextField label="Female %" type="number" placeholder="%" defaultValue={this.state.female} onChange={(event) => this.handleChange(event, 'female')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="Male %" type="number" placeholder="%" defaultValue={this.state.male} onChange={(event) => this.handleChange(event, 'male')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="Other %" type="number" placeholder="%" defaultValue={this.state.other} onChange={(event) => this.handleChange(event, 'other')}></TextField>
                            </Grid>
                            <Grid item md={2} sm={12}>
                                <Typography className={genderPercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {genderPercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Gender Demographic Inputs */}
                {/* Begin Household Income Inputs */}
                <Box margin={3}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Household Income</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={12}>
                                <TextField label="Less than $25,000" type="number" placeholder="%" defaultValue={this.state.Income0_24999} onChange={(event) => this.handleChange(event, 'Income0_24999')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$25,000-49,000" type="number" placeholder="%" defaultValue={this.state.Income25000_49999} onChange={(event) => this.handleChange(event, 'Income25000_49999')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$50,000-75,999" type="number" placeholder="%" defaultValue={this.state.Income50000_74999} onChange={(event) => this.handleChange(event, 'Income50000_74999')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$76,000-99,999" type="number" placeholder="%" defaultValue={this.state.Income75000_99999} onChange={(event) => this.handleChange(event, 'Income75000_99999')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$100,000-149,999" type="number" placeholder="%" defaultValue={this.state.Income100000_149999} onChange={(event) => this.handleChange(event, 'Income100000_149999')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$150,000-200,000" type="number" placeholder="%" defaultValue={this.state.Income150000_199999} onChange={(event) => this.handleChange(event, 'Income150000_199999')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$200,001 or Greater" type="number" placeholder="%" defaultValue={this.state.Income200000} onChange={(event) => this.handleChange(event, 'Income200000')}></TextField>
                            </Grid>
                            <Grid item md={2} sm={12}>
                                <Typography className={incomePercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {incomePercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Household Income Inputs*/}
                {/* Begin Age Inputs */}
                <Box className={classes.box_grey} margin={3}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Age Range</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={12}>
                                <TextField label="17 and Under" type="number" placeholder="%" defaultValue={this.state.Age0_17} onChange={(event) => this.handleChange(event, 'Age0_17')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="18-24" type="number" placeholder="%" defaultValue={this.state.Age18_24} onChange={(event) => this.handleChange(event, 'Age18_24')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="25-34" type="number" placeholder="%" defaultValue={this.state.Age25_34} onChange={(event) => this.handleChange(event, 'Age25_34')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="35-44" type="number" placeholder="%" defaultValue={this.state.Age35_44} onChange={(event) => this.handleChange(event, 'Age35_44')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="45-54" type="number" placeholder="%" defaultValue={this.state.Age45_54} onChange={(event) => this.handleChange(event, 'Age45_54')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="55-64" type="number" placeholder="%" defaultValue={this.state.Age55_64} onChange={(event) => this.handleChange(event, 'Age55_64')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="65 or Greater" type="number" placeholder="%" defaultValue={this.state.Age65} onChange={(event) => this.handleChange(event, 'Age65')}></TextField>
                            </Grid>
                            <Grid item md={2} sm={12}>
                                <Typography className={agePercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {agePercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Age Inputs */}
                {/* Begin Residency Inputs */}
                <Box spacing={3} margin={3}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Residency</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            {/* {this.props.oneEvent.residency.map(resident =>
                                <Grid item md={3} sm={12}>
                                    <TextField label={resident.residency} type="number" placeholder="%" defaultValue={resident.residency_percentage} onChange={(event) => this.handleChange(event, 'resident.residency')}></TextField>
                                </Grid>
                            )} */}
                            <Grid item md={5} sm={12}>
                                <TextField label="Resident" type="number" placeholder="%" defaultValue={this.state.in_state} onChange={(event) => this.handleChange(event, 'in_state')}></TextField>
                            </Grid>
                            <Grid item md={5} sm={12}>
                                <TextField label="Non-Resident" type="number" placeholder="%" defaultValue={this.state.out_of_state} onChange={(event) => this.handleChange(event, 'out_of_state')}></TextField>
                            </Grid>
                            <Grid item md={1} sm={12}>
                                <Typography className={residentPercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {residentPercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Residency Inputs*/}
                <Box mx={10} spacing={3}>
                    <Grid justify="center" container>
                        <Grid item md={3} sm={6}>
                            <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.backClick}>Back</Button>
                        </Grid>
                        <Grid item md={3}></Grid>
                        <Grid item md={3} sm={6}>
                            <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
EditDemo.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    oneEvent: state.oneEvent,

});

// const putStateOnProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(withStyles(styles)(EditDemo));