import React from 'react';
import { 
    Switch,
    Route,
    Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthState';
import Home from './containers/HomePage';
import Login from './containers/Login';
import Register from './containers/Register';
import Recover from './containers/Recover';
import Welcome from './containers/WelcomePage';
import TodoList from './containers/todopage/TodoList';
import DogsApp from './containers/dogspage/DogsApp';



function PrivateRoute({ children, ...rest }) {

    const { isAuthorized } = useAuth();

    console.log(isAuthorized)

    if (!isAuthorized)
        return (
            <Redirect to= '/login'/>
    );

return <Route {...children} {...rest}/>

}


const Main = () => {
    return (  
        <Switch> 
        {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Welcome}></Route>
            <PrivateRoute path='/home' component={Home}></PrivateRoute>
            <PrivateRoute path='/todo' component={TodoList}></PrivateRoute>
            <PrivateRoute path='/dogs' component={DogsApp}></PrivateRoute>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/Recover' component={Recover}></Route>
            <Route render={() => <h1 className='center'>404: page not found</h1>} />
        </Switch>
    );
}
export default Main;


