import React, { useState, useContext } from 'react';
import axios from 'axios';

import styled from 'styled-components'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../contexts/UserContext';


const SignInFormContainer= styled.div`
   height: 100vh;
   background-image: url('https://wallpaperaccess.com/full/101412.jpg');
   background-size: cover;
   font-family: adventure, script;
font-style: normal;
font-weight: 400;

`;

const SignInFormDiv= styled.form`
   margin: 0 auto;
   height: 60%;
   max-width: 50%;
   background: rgba(0,0,0,0.7);
   position: relative;
   top: 10rem;
   display: flex;
   
   flex-direction: column;
   padding-top: 5rem;
   
   label {
       font-size: 3rem;
       -webkit-text-stroke: 1px white;
       color: white;
       margin-top: 2rem;
   }
   input{
       font-size: 2rem;
       position: relative;
       top: -20%;
       right: -3%;
       border-radius: 10px;
       background: white;
       color: black;
    }
    
    h1{
        transform: scale(2);
        padding-top: -15rem;
        
        
        
        -webkit-text-stroke: 3px green;
   }

   Button{
       width: 10rem;
       color: white;
       position: absolute;
       left: 20rem;
       top: 25rem;
   }
 .Signup{
    width: 10rem;
    color: white;
    position: absolute;
    left: 29rem;
    top: 25rem;
    &:hover{
       
    }
 }

`;


export default function SignInForm(props){

    const { user, addUserID } = useContext(UserContext); 

   
    const [credentials, setCredentials] = useState(
        { 
            username: '', 
            password:''
        });

    localStorage.removeItem("token");



    const handleChange = e => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        console.log(credentials);
      };


    const login = e => {
        e.preventDefault();

        // https://rventure.herokuapp.com/auth/rv/login/
        // https://rventure.herokuapp.com/auth/landowner/login/

        axios
        .post('https://rventure.herokuapp.com/auth/landowner/login/', credentials )
        .then(res => {
            localStorage.setItem("token", res.data.token);
            // props.history.push("/protected");
            console.log('response',res);
            console.log('localstorage', localStorage);
            //add id and username to global state
            addUserID({username: res.data.username, userID: res.data.id})
            console.log(user);

          })
          .catch(err => {
            localStorage.removeItem("token");
            console.log("invalid login: ", err);
          });
    }
     

    
  function buttonChangeColor(){
         
    const SignInButton=document.querySelector('.SignIn');
         SignInButton.style.background='transparent'

    return SignInButton;
     }

  
  
  function ButtonChangeBack(){
    const SignInButton=document.querySelector('.SignIn');
    SignInButton.style.background= '#dc3545'
    }


    return(
        <SignInFormContainer> 
           <SignInFormDiv onSubmit={login}>
               <h1> Adventures awaits you</h1>
               <label htmlFor='username'>
                   Username :
                <input type='text' name='username' onChange={handleChange} />
               </label>
               <label htmlFor='password'>
                   Password :
                 <input type='text' name='password' onChange={handleChange}/>
               </label>
               <label htmlFor="dropdownlist">
                   I am : 
                   
                   <select name="dropdownList" id="type">
                       <option value="landowner"> Land Owner</option>
                       <option value="RVowner"> RV Owner </option>

                   </select>
                   

               </label>

               <Button className='SignIn' color='danger' type='submit'> Log In </Button>
               <Button className='Signup' outline color='danger' onMouseEnter={buttonChangeColor} onMouseLeave={ButtonChangeBack}> Register </Button>
           </SignInFormDiv>
             
        </SignInFormContainer>
    )
}

