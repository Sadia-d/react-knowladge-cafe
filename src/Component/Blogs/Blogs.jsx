import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark ,  handleAddReadingTime}) => {

    const[blogs , setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='w-2/3'>
            <h1 className="text-3xl">Blog:{blogs.length}</h1>

            {
            
            blogs.map(blog => <Blog   key={blog.id}
                     blog={blog}
                     handleAddToBookmark={handleAddToBookmark} 
                      handleAddReadingTime = { handleAddReadingTime}
              ></Blog>)
                

            }
            
        </div>
    );
};

export default Blogs;