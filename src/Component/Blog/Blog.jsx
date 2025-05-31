import React from 'react';

const Blog = ({blog}) => {
    console.log(blog)
  const {coverImg , title ,author_img,author,
deadline,reading_time , hashtag}=  blog
    return (
        <div>
            <img src={coverImg} alt="" />
            <div className='flex justify-between mt-4'> 

                <div className='flex gap-4'>
               <img className='w-16' src={author_img} alt="" />
                <div>
                <h4 className='text-xl'>{author}</h4>
                < p> {deadline}</p>
                </div>
                </div>
            
                <div className='mt-2 text-gray-400'>
                <span>{reading_time} min read</span>
                </div>

            </div>
            <h2 className='text-3xl text-[#111111] font-bold'> {title}</h2>
            <p className='text-gray-400'>{hashtag}</p>
        </div>
    );
};

export default Blog;