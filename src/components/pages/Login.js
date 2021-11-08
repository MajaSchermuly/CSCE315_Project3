import '../../App.css'
import Navbar from '../Navbar'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Login.css"


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        // add error handling
        return email.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();
    }

        return(
        <>
         <div className="Login">
             <Form onSubmit={handleSubmit}>
                 <Form.Group size="lg" controlID="email">
                     <Form.Label>E-mail:<br></br></Form.Label>
                     <Form.Control
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} 
                     placeholder="name@example.com"/>
                 </Form.Group>

                 <br></br>

                 <Form.Group size="lg" controlID="password">
                     <Form.Label >Password:<br></br> </Form.Label>
                     <Form.Control
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
                 </Form.Group>

                 <br></br>

                 <Button block size="lg" type="submit" disabled={!validateForm()}  class="btn mr-3">
                 <Link to='/Account' color="" className='nav-links'>
                                Login
                 </Link>
                 </Button>

                 {' '}

                 <Button block size="lg" type="submit"  class="btn mr-3">
                 <Link to='/Register' color="" className='nav-links'>
                                Register
                 </Link>
                 </Button>

             </Form>
         </div>
        </>
        );
    
}

export default Login;