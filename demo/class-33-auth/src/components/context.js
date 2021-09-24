import React, { useState, useEffect } from 'react';
import superagent, { saveCookies } from 'superagent';
import base64 from 'base-64';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// 1- create context object
export const LoginContext = React.createContext();
const API = 'https://jam3ey.herokuapp.com';
// 2- create a component that will have the provider
export default function LoginProvider(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: '', capabilities: [] });

    // token will be saved in the cookies after login

    const login = async (username, password) => { // from login form
        try {

            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`)
            console.log('response>>> ', response)
            validateMyToken(response.body.token)

        } catch (err) {

        }
    }

    //intial render
    useEffect(() => {
        console.log("initial render here !!");
        const myTokenCookie = cookie.load('token');//read cookie from browser
        console.log("myTokenCookie", myTokenCookie);
        validateMyToken(myTokenCookie)
    }, [])



    const validateMyToken = (token) => {
        console.log('token>>>>', token)
        try {
            if (token) {
                const user = jwt.decode(token); // get user object and info and used kwt to decode because it has encoded using jwt in the backend
                console.log("user >>>>>>>>> ", user);
                // NOTE: adding it hardcoded because our API doesnt have it 
                // as an example
                user.capabilities = ['read', 'create', 'update', 'delete'];
         
                setloginState(true, user);
                cookie.save('token', token); 
            }
            else{
                setloginState(false , {})
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    

    const can = (capability) => {
        // check if the user from state can do sth 
        console.log("capability: ", capability);
        console.log(user?.capabilities)
       return user?.capabilities?.includes(capability) //boolean condition
    }

    const setloginState = (isLoggedIn, user) => {
        setLoggedIn(isLoggedIn);
        setUser(user); // {email: rawan@test.com, capabilities: ['read', 'create', 'update', 'delete']}
    }

    const logout = () => {
        // update loggedIn = false
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const state = {
        loggedIn: loggedIn,
        login: login,
        logout: logout,
        user: user,
        can: can
    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}