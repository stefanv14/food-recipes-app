import React from 'react';

import classes from '../Header.css';
import clsx from 'clsx';
import {  Button, TextField } from '@material-ui/core';

class Auth extends React.Component {
    state = {
        isLogged: false
    }

    loginHandle = () => {
        const email = document.getElementById("tbEmail").value;
        const password = document.getElementById("tbPass").value;
        console.log(email)
        console.log(password)
        this.props.loginHandle();
    }

    render() {
        return  (
            <React.Fragment>
                <TextField
                    id="tbEmail"
                    label="Email"
                    className={clsx(this.props.classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    id="tbPass"
                    label="Password"
                    className={clsx(this.props.classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                />
                <Button onClick={this.loginHandle} 
                        variant="outlined" 
                        className={this.props.classes.LoginButton}>
                    Login
                </Button>
            </React.Fragment>
        )
    }
}

export default Auth;