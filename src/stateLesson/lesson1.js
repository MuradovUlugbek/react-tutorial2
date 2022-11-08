import React from 'react';
import PropTypes from 'prop-types';

class lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: 'Ulug`bek',
        age: 16,
        job: 'developer',
        date: new Date()
        };
    }

    render() {
        return (
            <>
             <h1>My name {this.state.name}</h1>
             <p>I am {this.state.age}</p>  
             <h2>He is {this.state.job}</h2> 

             <h1>It is {this.state.date.toLocaleDateString()}</h1>
            </>
        );
    }
}

export default lesson1;
