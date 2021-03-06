import React from 'react';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constraints';
import Blogpost from './Blogpost';

function BlogpostContainer(props) {
    
    const [blogposts, setBlogposts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // READ
  
    useEffect(() => {
      fetch(BASE_URL + "blogposts")
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch blogposts');
            }
            return res.json();
          })
        .then(json => {
            setBlogposts(json);
            setIsLoading(false);
            setError(null);
        }) 
        .catch(error => {
            console.error('There is a prolem with your fetch request. Please try again', error);
        })
    }, []);
  
    function populateBlogPosts() {
      console.log(blogposts);
      return blogposts.map((blogpost, idx) => (
        <Blogpost blogpost={blogpost} key={blogpost.id} />
      ));
    }



    
    return (
        <div className="blogpost-contiainer">
           { error && <div>{ error }</div> }
     { isLoading && <div>LOADING...</div> }
            <h2 className="users-header">Blogs</h2>
        <div className="user-container">{blogposts && populateBlogPosts()}</div>
        </div>
    );
}

export default BlogpostContainer;
