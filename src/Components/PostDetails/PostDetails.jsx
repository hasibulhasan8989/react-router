import React from 'react';
import {  useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const postDetails=useLoaderData()
    const navigate=useNavigate()
    const {postId}=useParams()
    const {id,body,title}=postDetails
    const handleGoBack=()=>{
        navigate(-1)
    }
    console.log(postId)

    return (
        <div className='border border-orange-500 p-6 rounded-xl my-6'>
           <h2 className='text-2xl'>Post of {id} </h2> 
           <p className='text-xl'>{title}</p>
           <p className='my-4 w-[420px]'>{body}</p>
           <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;