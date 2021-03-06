import React from 'react';
import {  useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthState';
import './NavBar.css'


/*<a href='#home' class='active'>Home</a>*/

/*<NavLink> equivalent to <a> tag in css styles*/


const NavigationBar = () => {

    let history = useHistory();
    
    const { isAuthorized, setAuthStatus } = useAuth();

    function LogOut() {
        localStorage.removeItem('user');
        sessionStorage.removeItem('auth');
        setAuthStatus(false);
        console.log(isAuthorized);
        history.push('/home')
    }

    function LogInOut() {
        
        if (isAuthorized) {
            return (
                <NavLink className= 'Link' onClick={LogOut} exact to='/'>Logout</NavLink>
            )
        } else {
            return (
                <div>
                <NavLink className= 'Link' exact to='/register'>Register</NavLink>
                <NavLink className= 'Link' exact to='/login'>Login</NavLink>
                </div>
            )
        }

    }

    return (

            <div className='NavBar'>
                <NavLink className= 'Link' exact to='/home'>Home</NavLink>
                <NavLink className= 'Link' exact to='/todo'>To do list</NavLink>
                <NavLink className= 'Link' exact to='/dogs'>Dogs API</NavLink>
                <div className='Login'>
                <LogInOut/>
                </div>
            </div>
    );
}

export default NavigationBar;