import React from 'react';
import './main.css'


class counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    increment(){
        this.setState({
            count: this.state.count + 2
        })
    }
    decrement(){
        this.setState({
            count: this.state.count - 2
        })
    }

    multiply(){
        this.setState({
            count: this.state.count * 2
        })
    }

    divide(){
        this.setState({
            count: this.state.count / 2
        })
    }

    degree(){
        this.setState({
            count: this.state.count ** 2
        })
    }

    reset(){
        this.setState({
            count: 0
        })
    }
    
    render() {
        return (
            <div className='main'>
            <h1>Count: {this.state.count}</h1>
            <button onClick={(e) => this.increment(e)}>+</button>
            <button onClick={(e) => this.decrement(e)}>-</button>
            <button onClick={(e) => this.multiply(e)}>*</button>
            <button onClick={(e) => this.divide(e)}>/</button>
            <button onClick={(e) => this.degree(e)}>^</button>
            <button onClick={(e) => this.reset(e)}>Reset</button>
            
            
            </div>
        );
    }
}

export default counter;
