import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

export default class FloppyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_size: '10',
            data_unit: 'KB',
            floppies: '1',
            floppy_text: ' 3.5" floppy disks'
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
        let url = 'http://localhost:5000/api/v1.0/floppies/' + state.data_size + '/' + state.data_unit;

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.updateFloppies(data['floppies'])
            })
            .catch((error) => {
                console.error(error);
            });
        
        this.setState(state);
    }
    updateFloppies(floppies) {
        this.setState({'floppies': floppies})
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
            <div><NumberFormat thousandSeparator={true} displayType={'text'} value={this.state.floppies} /> {this.state.floppy_text}</div>
        </form>

        );
    }
}