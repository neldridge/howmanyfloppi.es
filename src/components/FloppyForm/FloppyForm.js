import React, { Component } from 'react';

import './FloppyForm.css'
import FloppyText from '../FloppyText/FloppyText'


export default class FloppyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_size: '10',
            data_unit: 'KB',
            floppies: '1'
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (value === "") {
            return false;
        }

        let state = this.state
        state[name] = value
        let url = 'http://localhost:5000/api/v1.0/floppies/' + parseFloat(state.data_size) + '/' + state.data_unit;

        let modifiers = {
            'KB': Math.pow(parseFloat(10), parseFloat(-3)),
            'MB': 1,
            'GB': Math.pow(parseFloat(10), parseFloat(3)),
            'TB': Math.pow(parseFloat(10), parseFloat(6)),
            'PB': Math.pow(parseFloat(10), parseFloat(9)),
        };

        state.floppies = parseInt(Math.ceil(parseFloat(modifiers[state.data_unit]) * parseFloat(state.data_size) / parseFloat(1.44)));
        this.setState(state);
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Data Size
                <input type="number" name="data_size" value={this.state.data_size} onChange={this.handleChange} />
                <select name="data_unit" value={this.state.data_unit} onChange={this.handleChange}>
                    <option name="KB">KB</option>
                    <option name="MB">MB</option>
                    <option name="GB">GB</option>
                    <option name="TB">TB</option>
                    <option name="PB">PB</option>
                </select>
            </label>
            <FloppyText floppies={this.state.floppies} />
        </form>

        );
    }
}