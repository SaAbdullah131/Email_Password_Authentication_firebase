import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth=getAuth(app);

const Register = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
        // validate
        if(!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one upper case');
            return;
        }
        // else if(!/(?=.*[0-9]. *[0.9])/.test(password)) {
        //     setError("Please add at least two number");
        //     return;
        // }
        else if(password.length < 6) {
            setError('Please Set at least 6 character to your password');
            return;
        }
        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const loggedUser = userCredential.user;
          console.log(loggedUser);
          setError('');
          event.target.reset();
          setSuccess('User has been created Successfully')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage);
          setError(errorMessage);
         
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
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter Your Email' className='p-2 mb-1 rounded' required />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Enter Your Password'className='p-2 mb-1 rounded'required />
                <br />
                <input type="submit" value="Register" className='p-2 btn btn-primary' />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;