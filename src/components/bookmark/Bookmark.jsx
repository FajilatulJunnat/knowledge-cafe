import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className='bg-white rounded-xl p-4'>
            <h3>Title:{title}</h3>
        </div>
    );
};


Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}
export default Bookmark;