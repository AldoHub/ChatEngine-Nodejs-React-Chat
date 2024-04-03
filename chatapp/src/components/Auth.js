import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const Auth = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();

        //get the input value
        const {value} = e.target[0];
        console.log(value);

        //make the call to the api to authenticate/generate the user
        axios.post('http://localhost:3001/authenticate', {
            username: value
        })
        .then((response) => {
            //pass the data to the parent component in order to render the chat
            props.onAuth({
                ...response.data,
                secret: value
            });
        })
        .catch(err => {
            console.log(err);
        })

    }



    return (
        <Fragment>
           <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                <div className="auth-label">Username</div>
                <input className="auth-input" name="username" />
                <button className="auth-button" type="submit">
                    Enter
                </button>
                </div>
            </form>
            </div>
        </Fragment>
    );


}

export default Auth;