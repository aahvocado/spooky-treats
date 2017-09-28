import '../styles/css/views/CandyInventory.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyInventory extends Component {
    static defaultProps = {
        data: [],
    };

    static propTypes = {
        data: PropTypes.array,
    };

    render() {
        const { data } = this.props;

        return (
            <div className="st-inventory">
                { `inventory has ${data.length} items` }
            </div>
        );
    }
}
