import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs,setblogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setblogs(data))
    },[])

    return (
        <div className="md:col-span-2 col-span-1 border-2">
            <h3>Blogs:{blogs.length}</h3>
        </div>
    );
};

export default Blogs;