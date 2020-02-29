import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SignInForm from './components/SignInForm'
import ListingList from './components/ListingList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/SignInForm';
import ListingForm from './components/ListingForm'
import ProtectedRoute from './components/ProtectedRoute';
import ListingDetails from './components/ListingDetails';

function App() {
  return (
    <Router>
    <div className="App">
     <SignInForm />
      <Switch>
        <Route exact path='/signin' component={Login} />
        <Route exact path='/listings' component={ListingList} />
        <Route exact path='/listings/add' component={ListingForm} />
        <ProtectedRoute exact path="/protected" component={ListingForm} />
        <Route path='/listings/:id' render={props => <ListingDetails {...props} />} />

      </Switch>
    </div>
    </Router>

  );
}

export default App;
