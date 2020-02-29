import React from 'react'
import styled from 'styled-components'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


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
   width: 50%;
   background: rgba(0,0,0,0.7);
   position: relative;
   top: 8rem;
   display: flex;
   flex-direction: column;
   padding-top: 3rem;
   
   label {
       font-size: 4rem;
       -webkit-text-stroke: 1px white;
       color: white;
   }
   input{
       font-size: 1rem;
       position: relative;
       top: -20%;
       right: -3%;
       border-radius: 10px;
       background: gray;
    }
    
    h1{
        font-size: 5rem;
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






export default function SignInForm(){
   
    
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
           <SignInFormDiv>
               <h1> Adventures awaits you</h1>
               <label htmlFor=''>
                   Username :
                <input type='text' name='username'/>
               </label>
               <label htmlFor=''>
                   Password :
                 <input type='text' name='password' />
               </label>
               <Button className='SignIn' color='danger'> Sign In </Button>
               <Button className='Signup' outline color='danger' onMouseEnter={buttonChangeColor} onMouseLeave={ButtonChangeBack}> Sign Up </Button>
           </SignInFormDiv>
             
        </SignInFormContainer>
    )
}