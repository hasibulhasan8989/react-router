import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
  
    const userStyle={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'12px'
    }
    const {name,username,phone,email,id}=user
    return (
        <div style={userStyle}>
            <p>{name}</p>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <Link to={`/users/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;