import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    cButton = () => {
        this.state(
            {
                date: this.state.date + this.props.number,
            }
        )
    };


    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.tick()
            }, 10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (<div>

                {this.state.date}
                <button onClick={this.cButton.toLocaleString}>Add</button>

        </div>
    )
    }

}
export default Clock;