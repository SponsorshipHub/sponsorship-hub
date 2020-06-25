import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

import {PieChart, Pie, Sector, Cell, LabelList, Label} from 'recharts';

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

    render() {        
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
                    <Grid container justify="center">
                        <Grid item md={10}>
                            <Grid container>
                                <Grid item md={6} sm={8} xs={8}>
                    {/* ----------------- AGE ------------------- */}
                                    <h4>Age Ranges</h4>
                                    <PieChart width={460} height={310}>
                                        <Pie data={this.state.age}
                                            cx={220}
                                            cy={150}
                                            labelLine
                                            
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#8884d8"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >
                                                        {this.state.age[index].age_range} ({value}%)
                                                    </text>
                                                );
                                            }}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='age_percentage'
                                            nameKey={this.state.age.age_range}>
                                            
                                            {this.state.age.map((entry, i) => 
                                                <Cell key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                   
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                   {/* ----------------- INCOME ------------------- */}
                                    <h4>Household Income</h4>
                                    <PieChart width={560} height={310}>
                                        <Pie data={this.state.income}
                                            cx={235}
                                            cy={150}
                                            labelLine
                                            outerRadius={100}
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#8884d8"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >
                                                        {this.state.income[index].income_range} ({value}%)
                                                    </text>
                                                );
                                            }}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='income_percentage'>

                                            {this.state.income.map((entry, i) =>
                                                <Cell key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                    {/* ----------------- GENDER ------------------- */}
                                    <h4>Gender</h4>
                                    <PieChart width={460} height={350}>
                                        <Pie data={this.state.gender}
                                            cx={240}
                                            cy={130}
                                            labelLine
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#8884d8"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >
                                                        {this.state.gender[index].gender} ({value}%)
                                                    </text>
                                                );
                                            }}
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
                   {/* ----------------- RESIDENCY ------------------- */}
                                    <h4>Attendees Location</h4>
                                    <PieChart width={520} height={350}>
                                        <Pie data={this.state.residency}
                                            cx={250}
                                            cy={120}
                                            labelLine
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#8884d8"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >
                                                        {this.state.residency[index].residency} ({value}%)
                                                    </text>
                                                );
                                            }}
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