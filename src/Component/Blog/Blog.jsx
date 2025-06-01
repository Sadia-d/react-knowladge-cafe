import React from 'react';
import { FaRegBookmark} from "react-icons/fa";

const Blog = ({blog,handleAddToBookmark ,  handleAddReadingTime}) => {
   
  const {coverImg , title ,author_img,author,
deadline,reading_time , hashtag}=  blog
    return (
        <div>
            <img className='rounded-md' src={coverImg} alt="" />
            <div className='flex justify-between mt-4'> 

                <div className='flex gap-4'>
               <img className='w-16' src={author_img} alt="" />
                <div>
                <h4 className='text-xl'>{author}</h4>
                < p> {deadline}</p>
                </div>
                </div>
            
                <div className='mt-2 text-gray-400 '>
                <span className="mr-2">{reading_time} min read</span>
            <button onClick={() => {
               handleAddToBookmark(blog);
              }}>
            <FaRegBookmark />
           </button>


                </div>

            </div>
            <h2 className='text-3xl text-[#111111] font-bold mt-5'> {title}</h2>
            <p className='text-gray-400 mt-5 mb-4'>{hashtag}</p>

            <button onClick={() => handleAddReadingTime(reading_time)} className='text-[#6047EC] mb-4 underline font-semibold'>Mark as read</button>
        </div>
    );
};



export default Blog;