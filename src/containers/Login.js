import React, { useState } from "react";
import {useHistory, NavLink } from 'react-router-dom';
import CustomButton from '../components/button/button';
import CustomInput from '../components/input/input';
import Flash from '../components/flash/flash';
import { useAuth } from '../contexts/AuthState';



export default function Login () {

    let history = useHistory();

    React.useEffect(() => {    
        if (sessionStorage.getItem('auth')) {
            setAuthStatus(true);
            history.go(-1)
	    }
    });


    const [showResults, setShowFlash] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const ShowFlash = (message) => {
        setErrorMessage(message);
        setShowFlash(true);
        setTimeout(() => {
            setShowFlash(false);
        }, 3000);
    }


    const { isAuthorized, setAuthStatus } = useAuth();

    const LogIn = () => {
        
            setAuthStatus(true);
            sessionStorage.setItem('auth', 'true');
            console.log(isAuthorized);
        
        return(    
            history.push('/home')   
        );
       
    }
    
    const LogConfirm = (event) => {
        event.preventDefault();

        let user = JSON.parse(localStorage.getItem('user'));

        if (user === null) 
        {
            ShowFlash(`User doesn't exist`);
        }

        else if (document.getElementById('name').value !== user.user || document.getElementById('password').value !== user.password)
        {
            ShowFlash(`Username or password doesn't match`);
        }

        else {
            LogIn();
        }
    }     
        
    return (
        <div className='center'>
            <div >
                <h1>Login</h1>
            </div>
                <div>
                    { showResults ? <Flash message={errorMessage}/> : <span>&nbsp;&nbsp;</span> }
                </div>
            <form onSubmit={LogConfirm}>
                <div>
                    <CustomInput type='text' name='text'  id='name' placeholder='Username'/>
                </div>
                <div>
                    <CustomInput type='password' name='password'  id='password' placeholder='Password'/>
                </div>
                <div>
                    <CustomButton type='submit' id='login'>
                        Login
                    </CustomButton>
                </div>
            </form>
            <div className='LinkRecover'>
                <NavLink exact to='/register'>Don't have an acount</NavLink>|<NavLink exact to='/recover'>Forgot your password?</NavLink>
            </div>
        </div>
    );
}