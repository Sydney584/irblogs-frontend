import React from 'react';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constraints';
import User from './User';

function UserContainer(props) {
    
    const [users, setUsers] = useState([]);


  // READ

  useEffect(() => {
    fetch(BASE_URL + "users")
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch users');
          }
          return res.json();
        })
      .then(json => {
          setUsers(json);
      })
      .catch(error => {
          console.error('Danger Will Robinson there is a prolem with your fetch request', error);
      })
  }, []);

  function populateUsers() {
    console.log(users);
    return users.map((user, idx) => (
      <User user={user} key={user.id} />
    ));
  }

  // CREATE

  function createUser(user) {
    fetch(BASE_URL + "users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setUsers([...users, json]));

  }

    
    return (
        <div>
        <h2 className="users-header">Bloggers</h2>
        <div className="user-container">{users && populateUsers()}</div>
        
      </div>
    );
}

export default UserContainer;