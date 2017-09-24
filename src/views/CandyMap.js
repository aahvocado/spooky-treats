import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyMap extends Component {
    static defaultProps = {
        data: {},
    };

    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        return (
            <div className="st-map">
                show the neighborhood
            </div>
        );
    }
}
