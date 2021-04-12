import React, { Component } from 'react';

import FloppyGrid from '../FloppyGrid/FloppyGrid'
import NumberFormat from 'react-number-format'

export default class FloppyForm extends Component {
    render() {
        return (
            <div>
                <div className="floppy-count"><NumberFormat thousandSeparator={true} displayType={'text'} value={this.props.floppies} /> 3.5" floppy disks</div>
                <div><FloppyGrid floppies={this.props.floppies} /></div>
            </div>
        );
    }
}