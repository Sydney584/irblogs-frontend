import React from 'react';

function BlogpostContainer(props) {
    
    const [blogposts, setBlogposts] = useState([]);


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
        }) 
        .catch(error => {
            console.error('There is a prolem with your fetch request. Please try again', error);
        })
    }, []);
  
    function populateBlogPosts() {
      console.log(blogposts);
      return users.map((blogpost, idx) => (
        <Blogpost blogpost={blogpost} key={blogpost.id} />
      ));
    }



    
    return (
        <div>
            <h2 className="users-header">Bloggers</h2>
        <div className="user-container">{blogposts && populateBlogPosts()}</div>
        </div>
    );
}

export default BlogpostContainer;
