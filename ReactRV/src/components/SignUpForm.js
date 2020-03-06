import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Image,
  Dropdown
} from 'semantic-ui-react'
=======
import * as Yup from 'yup'
>>>>>>> e789d0d920c8f5643d29949cd9c27f795cde8e2d


const SignUpForm = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState(
    { 
      username: '',
      password: ''
    });

  const [endpoint, setEndpoint] = useState('https://rventure.herokuapp.com/auth/rv/register/');

    //username & password req, 
    //email, phone number as optional 

    //primary keys: user ID
    //foreign key: listing/owner
  
    const [message, setMessage] = useState('');

  const handleChange = e => {

    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
    console.log(credentials);

    console.log(endpoint)
  };

  const handleChangeDropdown = (e, { value }) => setEndpoint(value)

  const login = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    setMessage('Please wait....');

    axios
        .post(endpoint, credentials )
        .then(res => {
            // localStorage.setItem("token", res.data.payload);
            // props.history.push("/protected");
            console.log('response',res);
            console.log(res.config.data)
            setMessage("user has been created");

          })
          .catch(err => {
            // localStorage.removeItem("token");
            console.log("invalid login: ", err);
            // setMessage(err);
          });
  }

  const accountOptions = [
    {
      key: 'RVOwner',
      text: 'I need a spot for my RV',
      value: 'https://rventure.herokuapp.com/auth/rv/register/',
    },
    {
      key: 'LandOwner',
      text: 'I have land to rent',
      value: 'https://rventure.herokuapp.com/auth/landowner/register/',
    }
  ];

  return (
    <div>
      <Segment placeholder>
    <Grid columns={4} stackable textAlign='center' >
      <Divider vertical><Icon name='bus' /></Divider>
      <Grid.Row  verticalAlign='middle'>
        <Grid.Column floated='right'>
        <Image src='https://andrecolon.github.io/Marketing-page/img/rv-logo.png' size='medium' centered />
          <Header>Already have an account?</Header>
          <Link to='/signin'><Button primary>Log-in here</Button></Link>

        </Grid.Column>

        <Grid.Column floated='left'>
          <Header icon>
          <Icon name='signup' />
            Register
          </Header>
          <form onSubmit={login}>
         <Dropdown
            placeholder='Select account type'
            name='signUpType'
            onChange={handleChangeDropdown}
            selection
            options={accountOptions} 
          />
          <br />
          <br />
          <label>
            Choose a new username: <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          /></label>
          <br />
          <label>Choose a new password: <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          /></label>
          <br />
          <br />
          <Button color='red'>Sign-up</Button>
          </form>
          <h1>{message}</h1>

           
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
        </div>
      );
};

export default SignUpForm;