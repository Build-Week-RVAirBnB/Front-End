import React, { useState } from "react";
import axios from 'axios';
import * as Yup from 'yup'


const SignUpForm = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({ username: '', password:''});
  const [message, setMessage] = useState('');

  const handleChange = e => {

    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
    console.log(credentials);
  };

  const login = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    setMessage('Please wait....');

    axios
        .post('https://cors-anywhere.herokuapp.com/http://herokuapp.com/auth/rv/register/', credentials )
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
            setMessage(err);
          });
  }

  return (
    <div>
          <form onSubmit={login}>
            <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
            <button>Sign-up</button>
          </form>
          <h1>{message}</h1>
        </div>
      );
};

export default SignUpForm;