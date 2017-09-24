import '../styles/css/views/CandyDisplay.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyDisplay extends Component {
    static defaultProps = {
        data: {},
    };

    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        return (
            <div className="st-display">
                <div className="st-display--left"></div>
                <div className="st-display--middle"></div>
                <div className="st-display--right"></div>
            </div>
        );
    }
}
