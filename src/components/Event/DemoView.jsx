import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

import {PieChart, Pie, Sector, Cell, Label} from 'recharts';

import '../App/App.css';

class DemoView extends Component {

    state = {
        age: [],
        gender: [],
        income: [],
        residency: [],
        COLORS: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
        RADIAN: Math.PI / 180
    }


    componentDidUpdate(prevProps){
        if(prevProps.oneEvent.age != this.props.oneEvent.age){
            this.setState({
                age: this.props.oneEvent.age,
                gender: this.props.oneEvent.gender,
                income: this.props.oneEvent.income,
                residency: this.props.oneEvent.residency
            })
        }
    }

    renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * this.state.RADIAN);
        const y = cy + radius * Math.sin(-midAngle * this.state.RADIAN);

        return(
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }

    render() {
        console.log(`Age Demo:`, this.state);
        
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box className='DemoBackground' my={2}>
                <Box>
                    <Grid container justify="space-evenly">
                        <Grid item md={10}>
                            <h2>Attendee Demographics</h2>

                        </Grid>
                    </Grid>
                    <Grid container justify="space-evenly">
                        <Grid item md={8}>
                            <Grid container>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Age Ranges</h4>
                                    <PieChart width={400} height={400}>
                                        
                                        <Pie data={this.state.age}
                                            cx={200}
                                            cy={200}
                                            labelLine
                                            label
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='age_percentage'
                                            nameKey={this.state.age.age_range}>
                                            
                                            {this.state.age.map((entry, i) => 
                                                <Cell key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                            <Label content={this.state.age.age_range} value={this.state.age.age} />
                                        </Pie>
                                    </PieChart>
                                   
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Household Income</h4>
                                    <PieChart width={400} height={400}>
                                        <Pie data={this.state.income}
                                            cx={200}
                                            cy={200}
                                            labelLine
                                            label
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='income_percentage'>

                                            {this.state.age.map((entry, i) =>
                                                <Cell key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Gender</h4>
                                    <PieChart width={400} height={400}>
                                        <Pie data={this.state.gender}
                                            cx={200}
                                            cy={200}
                                            labelLine
                                            label
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='gender_percentage'>

                                            {this.state.age.map((entry, i) =>
                                                <Cell key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                                    <h4>Attendees Location</h4>
                                    <PieChart width={400} height={400}>
                                        <Pie data={this.state.residency}
                                            cx={200}
                                            cy={200}
                                            labelLine
                                            label
                                            // nameKey={this.props.residency.residency}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='residency_percentage'>

                                            {this.state.age.map((entry, i) =>
                                                <Cell key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                            <Label value={this.state.residency.residency} position="outside" />
                                        </Pie>
                                    </PieChart>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
DemoView.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(DemoView));