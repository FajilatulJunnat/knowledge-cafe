
import PropTypes from 'prop-types'; 
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingtime}) => {
    return (
       <div className='space-y-4'>
        <div className='p-4 rounded-xl bg-slate-100 ' >
            <h3 className='text-4xl'>Reading Time:{readingtime}</h3>
        </div>
         <div className="rounded-xl bg-slate-100 space-y-3 p-4">
            <h3>Book mark length:{bookmarks.length}</h3>
        {
            bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
       </div>
    );
};


Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingtime:PropTypes.number
}
export default Bookmarks;