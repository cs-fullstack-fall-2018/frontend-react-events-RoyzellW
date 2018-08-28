import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Baphoon extends Component {
    constructor(props){
        super(props);
        this.state = { addingNumber: this.props.number}
    }
    clickMe = () => {
            this.setState(
                    {
                        addingNumber: this.state.addingNumber + 1
                    }
                )
    };
    render() {
        return <div>
            <p>
                {this.state.addingNumber}
                <button onClick={this.clickMe}>Add </button>

            </p>
        </div>;
    }
}
export default Baphoon;