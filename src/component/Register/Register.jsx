import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth=getAuth(app);

const Register = () => {
    const [email,setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email,password)
        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const loggedUser = userCredential.user;
          console.log(loggedUser);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value)
    }
    const handlePasswordBlur = (event)=> {
        // console.log(event.target.value);
    }
    return (
        <div className='w-50 mx-auto border p-4'>
            <h4 className='text-primary'>Please Register</h4>
            <form onSubmit={handleSubmit} >
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter Your Email' className='p-2 mb-1 rounded' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Enter Your Password'className='p-2 mb-1 rounded' />
                <br />
                <input type="submit" value="Register" className='p-2 btn btn-primary' />
            </form>
        </div>
    );
};

export default Register;