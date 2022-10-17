import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password !== confirm){
            setError(`Your Password Did't Match`);
        }
        else{
            setError(null);
        }
        createUser(email, password)
        .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
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
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Confirm Password' required/>
                    <p>{error}</p>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p>Already Signed Up? <Link to='/login'>Login Now!</Link></p>
            </form>
        </div>
    );
};

export default SignUp;