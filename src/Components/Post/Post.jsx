import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate=useNavigate()
    const{id,title}=post
    const handleShowDetails=()=>{
       navigate(`/posts/${id}`)
    }
    return (
        <div className='border-2 border-amber-400 p-4 rounded-xl space-y-2'>
           <h2 className='text-xl'>{id}</h2> 
           <p className='text-sm text-red-300'>{title}</p>
           {/* <Link to={`/posts/${id}`}><button></button></Link> */}
          <button onClick={handleShowDetails} >Show Details</button>

        </div>
    );
};

export default Post;