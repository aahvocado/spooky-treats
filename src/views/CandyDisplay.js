import '../styles/css/views/CandyDisplay.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 
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
        return (
            <div className="st-display">
                <div className="st-display--left"></div>
                { this.renderActionContent() }
                <div className="st-display--right"></div>
            </div>
        );
    }

    // TODO: move to own component
    renderActionContent() {
        const { data } = this.props;
        const { displayText } = data;

        const displayActions = 'continue';

        return (
            <div className="st-display--middle">
                <div className="st-display-text">
                    { displayText }
                </div>
                <div className="st-display-actions">
                    { displayActions }
                </div>
            </div>
        );
    }
}
