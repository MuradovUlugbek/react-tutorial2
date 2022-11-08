import React from 'react';
import Users from './users.json'

const JsonApp=()=>{
    return (
        <div>
            {Users.map((post)=>{
                return(
                    <div className='infos'>
                        <h1>Name: {post.name}</h1>
                        <h2>Age: {post.age}</h2>
                        <h3>Phone Number: {post.phone}</h3>
                        <p>Country: {post.country}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default JsonApp