import '../styles/css/views/CandyInventory.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyInventory extends Component {
    static defaultProps = {
        data: {},
    };

    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        return (
            <div className="st-inventory">
                show the inventory
            </div>
        );
    }
}
