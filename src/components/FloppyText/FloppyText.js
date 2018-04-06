import React, { Component } from 'react';

import NumberFormat from 'react-number-format';

export default class FloppyForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><NumberFormat thousandSeparator={true} displayType={'text'} value={this.props.floppies} /> 3.5" floppy disks</div>
        );
    }
}