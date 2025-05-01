import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div className='space-y-4'>
           <h1 className='text-2xl'>Oops!!!</h1> 
          <p>{
             
             error.statusText ||error.error.message 
               
            }</p>
            {
                error.status
                === 404 && <div>
                    <p>There is no page </p>
                    <p>please go back</p>
                   <Link to={`/`}> <button className='mt-4'>Back To Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;