import React from 'react';

const Register = () => {
    const handleEmailChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <form>
                <h4>Please Register</h4>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter Your Email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;