import React from 'react';

function User({user}) {


    return (
        <div className='user-card'>
            <p> Blogger First Name: {user.first_name} {user.last_name} </p>
            {/* <p> {user.last_name} </p> */}
            <p> User Name: {user.user_name} </p>
            {/* <p> Blogger Email address:  {user.email} </p> */}
            
        </div>
    );
}

export default User;