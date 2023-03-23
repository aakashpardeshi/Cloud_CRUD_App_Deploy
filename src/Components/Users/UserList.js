import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css'
import Button from "../UI/Button";

function UserList(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li>
                        {user.name} ({user.age} Years Old and UserID: {user.id})
                        <Button onClick={() =>{
                            props.onUpdate(user.id, user.age)
                        }}>Update</Button>
                        <Button onClick={() =>{
                            props.onDelete(user.id);
                        }}>Delete</Button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;