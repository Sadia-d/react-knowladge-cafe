
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
     console.log("Rendering bookmarks:", bookmarks);
    return (
        <div className='w-1/3 bg-gray-300 m-4 p-4 rounded-xl '>
            <h1 className='text-2xl font-bold pl-4'>Bookmarked Blogs : {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

export default Bookmarks;