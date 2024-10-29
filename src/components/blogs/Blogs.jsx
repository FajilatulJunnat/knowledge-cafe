import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

import PropTypes from 'prop-types'; 
const Blogs = ({hendleBookMark,hendleMarkAsRead}) => {
    const [blogs,setblogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setblogs(data))
    },[])

    return (
        <div className="md:col-span-2 col-span-1">
            <h3 className="font-bold text-xl">Blogs:{blogs.length}</h3>
            {
                blogs.map(singleBlock=><Blog key={singleBlock.id} blog={singleBlock} hendleBookMark={hendleBookMark}
                    hendleMarkAsRead={hendleMarkAsRead}></Blog>)
            }
        </div>
    );
};


Blogs.propTypes={
    hendleBookMark:PropTypes.func.isRequired,
    hendleMarkAsRead:PropTypes.func.isRequired
}
export default Blogs;