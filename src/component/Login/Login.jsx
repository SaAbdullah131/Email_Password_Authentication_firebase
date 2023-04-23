import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Login = () => {
    const handleLogin=(event)=> {
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email,password);
    }
    return (
        <div className='w-25 mx-auto'>
            <h2>Please Login Here</h2>
            <Form onSubmit={handleLogin}>
                <div className='form-group mb-3'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value= ''/>
                    </Form.Group>
                </div>
                <div className='form-group mb-3'>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value='' />
                    </Form.Group>
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;