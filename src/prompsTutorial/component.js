import React from 'react';

const component = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age} years old</h2>
        </div>
    );
};


export default component;

