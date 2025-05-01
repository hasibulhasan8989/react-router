import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts=useLoaderData()
   
    return (
        <div>
           <h1>Here will be all post</h1>
          <div className='grid grid-cols-5 gap-2 mt-4'>
          {
            posts.map(post=><Post key={post.id} post={post}></Post>)
           } 
          </div>
        </div>
    );
};

export default Posts;