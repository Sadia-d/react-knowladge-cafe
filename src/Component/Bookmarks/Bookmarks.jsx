
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    
    return (

        <div className='w-1/3  '>
            <div className='bg-purple-200 m-4 p-4 rounded-md'>
              <h4 className='font-bold text-[#6047EC]'>Spent time on read : {readingTime} </h4>
            </div>

            <div className='bg-purple-200 m-4 p-4 rounded-xl'>

            <h1 className='text-2xl font-bold pl-4'>Bookmarked Blogs : {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}  
                    bookmark={bookmark}></Bookmark>
                )
                }
            
            </div>


        </div>
    );
};

export default Bookmarks;