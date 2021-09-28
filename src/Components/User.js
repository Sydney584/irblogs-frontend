import React from 'react';

function User({user}) {


    return (
        <div className='user-card'>
            <p> {user.first_name} </p>
            <p> {user.last_name} </p>
            <p> {user.user_name} </p>
            <p> {user.email} </p>
            
        </div>
    );
}

export default User;