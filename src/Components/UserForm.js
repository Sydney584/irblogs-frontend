import React, { useState } from 'react';

function UserForm({createUser}) {
    const [user, setUser] = useState({first_name: "", last_name: "", user_name: "", email: ""})

    function handleChange(e) {
        const updatedValue = {...user}
        updatedValue[e.target.name] = e.target.value
        setUser(updatedValue)
    }


const handleSubmit = (e) => {
  e.preventDefault();
     createUser(user)
}


    return (
        <div>
            <h2>Create Your Account Below</h2>
            
            <form onSubmit={handleSubmit} className="user-form">
                <label className="form-label">First Name</label>
                <input type="text" placeholder='Type First Name Here' required name="first_name" value={user.first_name} onChange={handleChange} />
                <label className="form-label">Last Name</label>
                <input type="text" placeholder='Type Last Name Here' required name="last_name" value={user.last_name} onChange={handleChange} />
                <label className="form-label">User Name</label>
                <input type="text" placeholder='Create a User Name' required name="user_name" value={user.user_name} onChange={handleChange} />
                <label className="form-label">Email</label>
                <input type="text" placeholder='Type your email address' required name="email" value={user.email} onChange={handleChange} />
                <button type="submit">Create My Account</button>
            </form>
            <p>Or a reader by creating your account below. You don't have to blog to register. You can read blogs, post a blog or comment on one.</p>
        </div>
    );
}

export default UserForm;