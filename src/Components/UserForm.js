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
            <h2>Become an Indigo Room Blogger</h2>
            <p>Or a reader by creating your account below. You don't have to blog to register. You can read blogs, post a blog or comment on one.</p>
            <form onSubmit={handleSubmit}>
                <input name="first_name" value={user.first_name} onChange={handleChange} />
                <input name="last_name" value={user.last_name} onChange={handleChange} />
                <input name="user_name" value={user.user_name} onChange={handleChange} />
                <input name="email" value={user.email} onChange={handleChange} />
                <button type="submit">Register My Account</button>
            </form>
            
        </div>
    );
}

export default UserForm;