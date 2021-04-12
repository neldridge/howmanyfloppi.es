import React, { Component } from 'react';

import NumberFormat from 'react-number-format'
import './FloppyGrid.css'
import disk from './disk_32.png'


export default class FloppyGrid extends Component {

    constructor(props) {
        super(props);

        this.factor = 500;
    }
    factorFloppier(floppies, factor) {
        factor++
        if (floppies >= this.factor) {
            return this.factorFloppier(floppies / this.factor, factor)
        }
        return { floppies: floppies, factor: factor }

    }

    createElements() {

        let disks = 0;
        let floppies = this.factorFloppier(this.props.floppies, 0);
        console.log(floppies);
        let factor = floppies['factor'];
        floppies = floppies['floppies'];

        let elements = [];
        if (factor === 1) {
            disks = factor;
        }
        else {
            
            disks = Math.floor(this.factor ** (factor - 1));

            elements = [<div className="floppy-grid-disk-info" key="index">Each disk represents roughly <NumberFormat thousandSeparator={true} displayType={'text'} value={disks} /> 3.5" floppy disks.</div>];
        }
        

        for (let i = 1; i <= floppies; i++) {
            elements.push(<div className="floppy-grid-disk" key={i}><img src={disk} alt="Disk {i}" key="Disk {i}" /></div>);
        }
        return elements;
    }
    render() {
        return (
                <div className="floppy-grid">
                    {this.createElements()}
                </div>
        );
    }
}