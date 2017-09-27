import '../styles/css/views/CandyDisplay.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyDisplay extends Component {
    static defaultProps = {
        data: {},
        displayText: '',
    };

    static propTypes = {
        data: PropTypes.object,
        displayText: PropTypes.string,
    };

    render() {
        const { data } = this.props;
        const { displayText } = data;

        return (
            <div className="st-display">
                <div className="st-display--left"></div>
                <div className="st-display--middle">
                    { displayText }
                </div>
                <div className="st-display--right"></div>
            </div>
        );
    }
}
