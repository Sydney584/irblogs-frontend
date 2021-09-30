import React from 'react';

function Blogpost({blogpost}) {


    return (
        <div className='blogpost-card'>
            <p> {blogpost.title} </p>
            <p> <img  className="ui medium rounded image" src={blogpost.img_url} alt="" /> </p>
            <p> {blogpost.content} </p>
           
            
        </div>
    );
}

export default Blogpost;