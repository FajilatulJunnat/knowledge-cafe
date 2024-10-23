import PropTypes from 'prop-types'; 
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog,hendleBookMark,hendleMarkAsRead}) => {
    const {id,title,cover,reading_time,author_img,author,posted_date,hashtags}=blog
    
    return (
        <div className='my-10 space-y-8'>
            <img className='w-full rounded-xl' src={cover} alt="cover" />
            
            <div className='flex justify-between'>
                <div className='flex space-x-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='space-x-3 items-center flex'>
                    <span>{reading_time}min read</span>
                    <button onClick={()=>hendleBookMark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
                
            </div>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <p className='space-x-3'>
                {
                    hashtags.map((haash,idx)=><span  key={idx}><a href='#'>#{haash}</a></span>)
                }
            </p>
            <button className='underline bg-green-300 p-4 rounded-xl text-white font-semibold' onClick={()=>hendleMarkAsRead(reading_time,id)}>Mark As Read</button>
        </div>
    );
};


Blog.propTypes={
    blog:PropTypes.object.isRequired,
    hendleBookMark:PropTypes.func.isRequired,
    hendleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;