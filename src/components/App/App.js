import React, {Component} from 'react';
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
//components
import Nav from '../Structure/Nav/Nav';
import Footer from '../Structure/Footer/Footer';
import ProtectedRoute from '../Structure/ProtectedRoute/ProtectedRoute';
import LandingPage from '../LandingPage/LandingPage';
import ResultPage from '../LandingPage/ResultPage';
import CreateSponsor from '../Create/CreateSponsor';
import CreateEvent from '../Create/CreateEvent';
import CreateDemo from '../Create/CreateDemo';


//style for app
import './App.css';
import Event from '../Event/Event';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={LandingPage}/>
            <ProtectedRoute exact path="/results" component={ResultPage}/>
            <ProtectedRoute exact path="/create-sponsor/:id" component={CreateSponsor}/>
            <ProtectedRoute exact path="/create-demo" component={CreateDemo} />
            <ProtectedRoute path="/event/:id" component={Event} 
            />
            <ProtectedRoute path="/create-event" component={CreateEvent} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
