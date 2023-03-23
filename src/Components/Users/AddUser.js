import React from 'react';
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

function Adduser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    function addUserHandler(event) {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid Username and Age!'
            });
            return;
        }
        // for ensuring the enteredAge is numeric for comparasion
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid Age! (Greater than 0 Years)'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    };

    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    };

    function errorHandler(){
        setError(null);
    }



    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}  
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>);
}

export default Adduser;