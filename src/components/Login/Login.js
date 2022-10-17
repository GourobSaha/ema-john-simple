import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';

const Login = () => {

    const {LogInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        LogInUser(email, password)
        .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch((error) => {
                console.error(error)
            });
    }    

    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>New to Ema-John? <Link to='/signup'>Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;