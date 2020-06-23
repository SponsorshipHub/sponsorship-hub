import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class CreateDemo extends Component {

    state = {
        gender1: "0",
        gender2: "0",
        gender3: "0",
        genderTotal: "0",
        income1: "0",
        income2: "0",
        income3: "0",
        income4: "0",
        income5: "0",
        income6: "0",
        income7: "0",
        incomeTotal: "0",
        age1: "0",
        age2: "0",
        age3: "0",
        age4: "0",
        age5: "0",
        age6: "0",
        age7: "0",
        ageTotal: "0",
        resident1: "0",
        resident2: "0",
        residentTotal: "0"
    }

   handleChange = (event, property) => {
       this.setState({
           ...this.state,
           [property]: event.target.value
       })
       console.log(this.state);
       
   
       
   }

 calculatePercents = () => {
    console.log("calculation goes here", this.state);
    
 }


    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (

            <Box>
                <Typography align="center" variant="h2">Enter Demographics</Typography>
                {/* Begin Gender Dempgraphic Inputs */}
                <Box className={classes.box_grey}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Gender</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={12}>
                                <TextField label="Female" type="number" placeholder="%" onChange={(event)=>this.handleChange(event, 'gender1')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="Male" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'gender2')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="Other" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'gender3')}></TextField>
                            </Grid>
                        <Grid item md={2} sm={12}>
                            <Typography>Total %</Typography>
                        </Grid>   
                        </Grid>
                    </Grid>
                </Box> 
                {/* End Gender Demographic Inputs */}
                {/* Begin Household Income Inputs */}
                <Box>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Household Income</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={12}>
                                <TextField label="Less than $25,000" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income1')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$25,000-49,000" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income2')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$50,000-75,999" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income3')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$76,000-99,999" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income4')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$100,000-149,999" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income5')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$150,000-200,000" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income6')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="$200,001 or Greater" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'income7')}></TextField>
                            </Grid>
                            <Grid item md={2} sm={12}>
                                <Typography>Total %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Household Income Inputs*/}
                {/* Begin Age Inputs */}
                <Box className={classes.box_grey}>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Age Range</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={12}>
                                <TextField label="17 and Under" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age1')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="18-24" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age2')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="25-34" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age3')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="35-44" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age4')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="45-54" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age5')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="55-64" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age6')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <TextField label="65 or Greater" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'age7')}></TextField>
                            </Grid>
                            <Grid item md={2} sm={12}>
                                <Typography>Total %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Age Inputs */}
                {/* Begin Residency Inputs */}
                <Box>
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={9} sm={12}>
                            <Typography align="center" variant="h3">Residency</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={5} sm={12}>
                                <TextField label="Resident" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'resident1')}></TextField>
                            </Grid>
                            <Grid item md={5} sm={12}>
                                <TextField label="Non-Resident" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'resident2')}></TextField>
                            </Grid>
                            <Grid item md={1} sm={12}>
                                <Typography>Total %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Residency Inputs*/}
                <Box mx={10} spacing={3}>
                    <Grid justify="center" container>
                        <Grid item md={3} sm={6}>
                            <Link to="/create-sponsor"><Button fullWidth className={classes.btn_def} variant="outlined">Back</Button></Link>
                        </Grid>
                        <Grid item md={3}></Grid>
                        <Grid item md={3} sm={6}>
                            <Link to="/home"><Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.calculatePercents}>Submit</Button></Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
            
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateDemo.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(CreateDemo));