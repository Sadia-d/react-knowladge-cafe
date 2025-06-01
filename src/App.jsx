
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
 
  const [bookmarks , setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
      console.log("Adding to bookmarks:", blog); 
   const newBookmarks = [...bookmarks , blog]
    console.log("New bookmarks list:", newBookmarks);
   setBookmarks(newBookmarks);
  
  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
         <Blogs handleAddToBookmark = {handleAddToBookmark}
         ></Blogs>
         <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
   
      
    </>
  )
}

export default App
